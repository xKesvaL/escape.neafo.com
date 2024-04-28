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
    import {Style, Fill, Icon} from "ol/style";
    import {onMount} from "svelte";

    let map: Map | null = null;

    const source = new VectorSource();
    const layer = new VectorLayer({
        source: source,
    });



    const mapAction: Action = (container) => {
        useGeographic();
        const place = [7.3379, 47.7452];

        const style = new Style({
            fill: new Fill({
                color: 'rgba(0, 0, 255, 0.2)',
            }),
            image: new Icon({
                src: '/location-heading.svg',
                size: [27, 55],
                rotateWithView: true,
            }),
        });
        layer.setStyle(style);

        map = new Map({
            target: container,
            layers: [
                new TileLayer({
                    source: new OSM()
                }),
                layer
            ],
            view: new View({
                center: place,
                zoom: 16,
                minZoom: 16,
                maxZoom: 19
            }),

        });



        return {
            destroy: () => {
                map?.dispose();
                map = null;
            }
        }
    };

    onMount(() => {
        setTimeout(() => {
            navigator.geolocation.watchPosition((position) => {
                const {latitude, longitude} = position.coords;
                const point = new Point([longitude, latitude]);
                source.clear();
                source.addFeature(new Feature(point));
                map?.getView().setCenter([longitude, latitude]);
                console.log(longitude, latitude)
            });
        }, 1000)
    })

</script>


<div class="h-dvh w-full overflow-hidden" use:mapAction />
