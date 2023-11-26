<script context="module" lang="ts">
    import maplibre from 'maplibre-gl';
    import { page } from '$app/stores';
    import { PMTiles } from '$lib/pmtiles/pmtiles';

    const basemapFilePath = 'basemap.pmtiles';
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

            Promise.all([
                matchBasemap && handleTileRequest(matchBasemap, basemapPMTiles),
                matchRoute && handleTileRequest(matchRoute, routePMTiles)
            ]).then(([tileBasemap, tileRoute]) => {
                if (tileBasemap) {
                    callback(null, tileBasemap.data, null, null);
                } else if (tileRoute) {
                    callback(null, tileRoute.data, null, null);
                } else {
                    console.log('No tiles fetched for either basemap or route');
                    callback(null, null, null, null);
                }
            }).catch(error => {
                console.error(`Error fetching tiles: ${error.message}`);
                callback(error, null, null, null);
            });

            return { cancel: () => {} };
        });
    }
</script>


<script lang="ts">
	import { onMount } from 'svelte';

	import { Map } from 'maplibre-gl';
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

	let container: HTMLDivElement;
	let map: Map;
	let pmtilesOrigin: string;
	let staticOrigin: string;

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

		map = new Map({
			container: container,
			style: style,
			center: [lon, lat],
			// zoom: zoom,
			// maxTileCacheSize: 5000,
			refreshExpiredTiles: false,
			maxBounds: bounds
		});
	});
</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdn.skypack.dev/maplibre-gl/dist/maplibre-gl.css" />
</svelte:head>

<div class="mapContainer" bind:this={container} />

{#await basemapPMSource?.fileInfoPromise}
	<div class="waiting">
		<h1>Please Wait</h1>
	</div>
{/await}

<style>
	.mapContainer {
		position: absolute;
		top: 0;
		bottom: 0;
		width: 100%;
	}
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
</style>
