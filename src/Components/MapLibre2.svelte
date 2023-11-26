<script context="module" lang="ts">
    import maplibre from 'maplibre-gl';
    import { page } from '$app/stores';
    import * as pmtiles from 'pmtiles';
	
    if (browser) {
        let protocol = new pmtiles.Protocol();
        maplibre.addProtocol("pmtiles",protocol.tile);
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
		
		pmtilesOrigin = `pmtiles://${$page.url.origin.split('://')[1]}`;
		staticOrigin = `${$page.url.origin}${base}`;

		const style = await (await fetch(`${base}/mystyle.json`)).json();
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

<style>
	.mapContainer {
		position: absolute;
		top: 0;
		bottom: 0;
		width: 100%;
	}

</style>
