<script lang="ts">
    import 'ol/ol.css';
    import OSM from 'ol/source/OSM.js';
    import TileLayer from 'ol/layer/Tile.js';
    import View from 'ol/View.js';
    import type {Action} from "svelte/action";
    import {useGeographic} from "ol/proj";
    import {Point} from "ol/geom";
    import VectorLayer from "ol/layer/Vector";
    import VectorSource from "ol/source/Vector";
    import {Feature, Map} from "ol";

    export let longitude: number;
    export let latitude: number;

    let map: Map | null = null;

    const mapAction: Action = (container) => {
        useGeographic();

        const place = [longitude, latitude];
        const point = new Point(place);

        map = new Map({
            target: container,
            layers: [
                new TileLayer({
                    source: new OSM()
                }),
                new VectorLayer({
                    source: new VectorSource({
                        features: [new Feature(point)]
                    }),
                    style: {
                        'circle-radius': 10,
                        'circle-fill-color': '#FFAA00',
                    },
                })
            ],
            view: new View({
                center: place,
                zoom: 13
            }),

        });

        return {
            destroy: () => {
                map?.dispose();
                map = null;
            }
        }
    };

</script>

<div class="h-80 w-full rounded-lg overflow-hidden" use:mapAction />
