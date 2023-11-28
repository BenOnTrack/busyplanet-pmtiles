<script context="module" lang="ts">
	import maplibre from 'maplibre-gl';
	import { page } from '$app/stores';
	import { PMTiles } from '$lib/pmtiles/pmtiles';

	import LayerColorSwitcher from './LayerColorSwitcher.svelte';
	import LayerSwitcher from './LayerSwitcher.svelte';
	import RouteDropdown from './RouteDropdown.svelte';
	import { Button, Tag } from 'carbon-components-svelte';

	import 'maplibre-gl/dist/maplibre-gl.css';
	import 'carbon-components-svelte/css/white.css';

	import {
		getMapZoom,
		toggleLayerIDwithFilter,
		getDataSetFeatureFromID,
		toggleRouteAndSetMapViewFromFilter
	} from '../utils/MapFunctions.svelte';
	import { addId, removeId, getAllIds } from '$lib/bookmarks/bookmarkdb';

	const basemapFilePath = 'nz-base.pmtiles';
	const routeFilePath = 'route.pmtiles';

	const basemapPMSource = browser ? new DBFetchSource(basemapFilePath) : null;
	const routePMSource = browser ? new DBFetchSource(routeFilePath) : null;

	const basemapPMTiles = new PMTiles(browser ? basemapPMSource : basemapFilePath);
	const routePMTiles = new PMTiles(browser ? routePMSource : routeFilePath);

	function handleTileRequest(match, pmTiles: PMTiles): Promise<any> {
		const z = parseInt(match[1]);
		const x = parseInt(match[2]);
		const y = parseInt(match[3]);

		return pmTiles.getZxy(z, x, y);
	}

	if (browser) {
		maplibre.addProtocol('pmtiles', (params, callback) => {
			const matchBasemap = params.url.match(/\/basemap\/([0-9]+)\/([0-9]+)\/([0-9]+)\.pbf/);
			const matchRoute = params.url.match(/\/route\/([0-9]+)\/([0-9]+)\/([0-9]+)\.pbf/);
			// console.log("params.url",params.url)
			// console.log("matchBasemap",matchBasemap)
			// console.log("matchRoute",matchRoute)

			Promise.all([
				matchBasemap && handleTileRequest(matchBasemap, basemapPMTiles),
				matchRoute && handleTileRequest(matchRoute, routePMTiles)
			])
				.then(([tileBasemap, tileRoute]) => {
					if (tileBasemap) {
						callback(null, tileBasemap.data, null, null);
					} else if (tileRoute) {
						callback(null, tileRoute.data, null, null);
					} else {
						console.log('No tiles fetched for either basemap or route');
						callback(null, null, null, null);
					}
				})
				.catch((error) => {
					console.error(`Error fetching tiles: ${error.message}`);
					callback(error, null, null, null);
				});

			return { cancel: () => {} };
		});
	}
</script>

<script lang="ts">
	import { onMount } from 'svelte';

	import { Map, NavigationControl } from 'maplibre-gl';
	import { browser } from '$app/environment';
	import { base } from '$app/paths';
	import { DBFetchSource } from '$lib/pmtiles/dbsource';

	export let lat = -36.88;
	export let lon = 174.77;
	export let zoom = 12;
	let bounds = new maplibre.LngLatBounds([174.398279, -37.104532], [175.33349, -36.828027]);
	$: if (map) {
		map.flyTo({ center: [lon, lat], zoom: zoom, essential: true });
	}
	// const { Map /*GeolocateControl */ } = maplibre;

	// Map
	let mapContainer: HTMLDivElement;
	let map: Map;
	let pmtilesOrigin: string;
	let staticOrigin: string;
	let targetLayers: string[];
	let clickedSourceFeature: maplibregl.GeoJSONFeature;
	let clickedDataSetFeature = null;
	let bookmarks = {};

	interface StyleLayer {
		id: number;
		text: string;
		visibility: string;
	}
	let styleLayers: StyleLayer[];
	let layerColorSwitcherIds: StyleLayer[] = [];
	let layerSwitcherIds: StyleLayer[] = [];
	let layerSwitcherSelectedIds: number[];
	interface Layer {
		id: string;
		metadata?: { switch: boolean };
	}
	// Tags
	let tagList: string[] = [];

	// Bookamarks
	let bookmarkIds: number[];

	// RouteSwitcher
	let routeDataSetFeatures = [];
	let filteredRouteDataSetFeatures = [];
	let groupedFilteredRouteDataSetFeatures = {};
	let routeMin = 0;
	let routeMax = 1;
	const nice = (d) => {
		if (!d && d !== 0) return '';
		return d.toFixed(2);
	};

	onMount(async () => {
		console.log('Page Url Origin:', $page.url.origin);
		console.log('Base path:', base);
		pmtilesOrigin = `pmtiles://${$page.url.origin.split('://')[1]}`;
		staticOrigin = `${$page.url.origin}${base}`;
		await basemapPMSource?.fileInfoPromise;
		await routePMSource?.fileInfoPromise;

		const style = await (await fetch(`${base}/mystyle.json`)).json();
		style.sources.basemap.tiles = style.sources.basemap.tiles.map((s: string) => {
			return s.replace('@pmtilesOrigin@', pmtilesOrigin);
		});
		style.sources.route.tiles = style.sources.route.tiles.map((s: string) => {
			return s.replace('@pmtilesOrigin@', pmtilesOrigin);
		});
		style.sprite = style.sprite.replace('@staticOrigin@', staticOrigin);
		style.glyphs = style.glyphs.replace('@staticOrigin@', staticOrigin);

		// Style Layers
		styleLayers = style.layers.map((layer: { id: number }, id: number) => ({
			id,
			text: layer.id,
			visibility: layer.layout?.visibility || null
		}));
		// Layer Color Switcher
		layerColorSwitcherIds = styleLayers.filter((layer) => {
			const metadata = style.layers[layer.id]?.metadata;
			return metadata && metadata.color === true;
		});

		// Layer Switcher
		layerSwitcherIds = styleLayers.filter((layer) => {
			const layerData = style.layers[layer.id];
			return layerData.metadata && layerData.metadata.switch === true;
		});
		layerSwitcherSelectedIds = layerSwitcherIds
			.filter((layer) => layer.visibility === 'visible')
			.map((layer) => layer.id);

		// Route Switcher
		routeDataSetFeatures = await (await fetch(`${base}/route_dataset.json`)).json();
		console.log('routeDataSet:', routeDataSetFeatures);
		// filteredRouteDataSetFeatures contains the filtered set
		filteredRouteDataSetFeatures = routeDataSetFeatures;
		// Group the features by category
		filteredRouteDataSetFeatures.forEach((feature) => {
			if (!groupedFilteredRouteDataSetFeatures[feature.subclass]) {
				groupedFilteredRouteDataSetFeatures[feature.subclass] = [];
			}
			groupedFilteredRouteDataSetFeatures[feature.subclass].push(feature);
		});

		let bounds = new maplibre.LngLatBounds([174.398279, -37.104532], [175.33349, -36.828027]);
		targetLayers = ['poi-food_and_drink', 'poi-lodging', 'poi-transportation'];

		// Bookmarks

		// Map
		map = new Map({
			container: mapContainer,
			style: style,
			center: [lon, lat],
			// zoom: zoom,
			// maxTileCacheSize: 5000,
			refreshExpiredTiles: false,
			maxBounds: bounds
		});

		map.on('load', function () {
			// control
			map.addControl(new NavigationControl(), 'top-right');
			map.addControl(
				new maplibre.GeolocateControl({
					positionOptions: {
						enableHighAccuracy: true
					},
					trackUserLocation: true
				})
			);

			// POI
			map.on('click', (e) => {
				let features = map.queryRenderedFeatures(e.point, {
					layers: targetLayers
				});
				if (!features.length) return;
				else {
					console.log(features[0]);
					clickedSourceFeature = features[0];
					map.flyTo({
						center: clickedSourceFeature.geometry.coordinates,
						zoom: 20
					});
					updateFeatureInfo();
				}
			});

			// Route_midpoint
			map.on('click', (e) => {
				let renderedSourceFeatures = map.queryRenderedFeatures(e.point, {
					layers: ['route_midpoint']
				});
				if (!renderedSourceFeatures.length) return;
				else {
					clickedSourceFeature = renderedSourceFeatures[0];
					console.log('clickedSourceFeature', clickedSourceFeature);
					clickedDataSetFeature = getDataSetFeatureFromID(
						filteredRouteDataSetFeatures,
						clickedSourceFeature.properties.id
					);
					const { id, type, bbox, members } = clickedDataSetFeature;
					console.log('clickedDataSetFeature', clickedDataSetFeature);
					const routeData = {
						id: id,
						type: type,
						bbox: bbox,
						zoom: 14
					};
					const filterWayMembers = ['in', ['id'], ['literal', members]];
					const filterRelation = ['==', 'id', id];
					toggleRouteAndSetMapViewFromFilter(map, filterWayMembers, filterRelation, bbox);
				}
			});

			// Add zoom event listener to the map
			map.on('zoom', () => {
				const currentZoom = map.getZoom();
				console.log('Current Zoom:', currentZoom);
			});

			// Bookmark
			updateBookmark();
		});
	});

	async function updateBookmark() {
		let bookmarkIds = await getAllIds();
		const bookmarkIdList = bookmarkIds.map((item) => item.id);
		console.log(bookmarkIdList);
		const bookmarkIdFilter = ['in', ['id'], ['literal', bookmarkIdList]];
		toggleLayerIDwithFilter(map, 'bookmarks', bookmarkIdFilter);
	}
	async function saveBookmark() {
		const currentId = clickedSourceFeature.id;
		if (currentId !== undefined) {
			console.log('Current ID:', currentId);

			try {
				const allIds = await getAllIds();
				// Check if the current ID exists in the database
				const idExists = allIds.some((item) => item.id === currentId);
				if (idExists) {
					// If the ID exists, remove it
					await removeId(currentId);
					console.log(`ID ${currentId} removed from the database.`);
				} else {
					// If the ID does not exist, add it
					await addId(currentId);
					console.log(`ID ${currentId} added to the database.`);
				}
			} catch (error) {
				console.error('Error checking and updating ID in the database: ', error);
			}
		} else {
			console.log('No ID selected.');
		}
		updateBookmark();
	}
	function updateFeatureInfo() {
		tagList = [];
		const propertiesToInclude = ['name:latin', 'class', 'subclass', 'category', 'cuisine'];

		propertiesToInclude.forEach((property) => {
			const value = clickedSourceFeature['properties'][property];
			if (value !== undefined && value !== null && value !== '') {
				tagList.push(value);
			}
		});
	}
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
	/>
</svelte:head>

<div>
	<div id="map" bind:this={mapContainer} />
	<LayerColorSwitcher {map} {layerColorSwitcherIds} />
	<LayerSwitcher {map} {layerSwitcherIds} {layerSwitcherSelectedIds} />
	<Button on:click={saveBookmark}>Save ID</Button>
	<div id="feature-info">
		<!-- <RouteDropdown {map} {filteredRouteDataSetFeatures} {groupedFilteredRouteDataSetFeatures} /> -->

		{#if tagList.length > 0}
			{#each tagList as tag (tag)}
				<Tag>{tag}</Tag>
			{/each}
		{/if}
	</div>
</div>

{#await basemapPMSource?.fileInfoPromise}
	<div class="waiting">
		<h1>Please Wait</h1>
	</div>
{/await}

<style>
	.waiting {
		/* position: absolute;
		top: 50%;
		left: 50%;
		width: 50%;
		transform: translate(-50%, -50%); */

		border: 5px solid;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		padding: 10px;
	}
	#map {
		width: 100%; /* Adjust as needed */
		height: 80vh; /* Adjust as needed */
	}
	#feature-info {
		padding: 10px;
	}
</style>
