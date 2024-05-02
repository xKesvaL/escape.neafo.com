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
    import {Icon, Style} from "ol/style";
    import {locationStore} from "$lib/stores/location";
    import {type MapEvent, mapEvents} from "$lib/config/events";
    import {isAnyDifferencesClose, isAnyEventClose, isAnyQuizClose, isAnySpotsClose} from "$lib/utils/functions";
    import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '$lib/components/ui/dialog';
    import {Button} from "$lib/components/ui/button";
    import {stats} from "$lib/stores/stats";
    import {type Quiz, quizzes} from "$lib/config/quizz";
    import {IconArrowRight, IconBook, IconCamera, IconSearch} from "@tabler/icons-svelte";
    import {route} from "$lib/ROUTES";
    import {type Spot, spots} from "$lib/config/spots";
    import {type Difference, differences} from "$lib/config/differences";

    let map: Map | null = null;

    const source = new VectorSource();
    const layer = new VectorLayer({
        renderBuffer: 1024,
        source: source,
    });

    const mapAction: Action = (container) => {
        useGeographic();
        const place = [7.3379, 47.7452];

        const style = new Style({
            image: new Icon({
                src: '/location-heading.svg',
                size: [36, 36],
                rotateWithView: true,
            }),
        });
        layer.setStyle(style);

        const eventLayers = mapEvents.map(event => {
            const { longitude, latitude } = event.position;
            const point = new Point([longitude, latitude]);

            return new VectorLayer({
                renderBuffer: 1024,
                source: new VectorSource({
                    features: [new Feature(point)]
                }),
                style: new Style({
                    image: new Icon({
                        src: event.iconSource,
                        size: [40, 40],
                        rotateWithView: true,
                    }),
                }),
            });
        });

        const quizzLayers = Object.values(quizzes).map(quiz => {
            const { longitude, latitude } = quiz.location;
            const point = new Point([longitude, latitude]);

            return new VectorLayer({
                renderBuffer: 1024,
                source: new VectorSource({
                    features: [new Feature(point)]
                }),
                style: new Style({
                    image: new Icon({
                        src: "/quizz.svg",
                        size: [40, 40],
                        rotateWithView: true,
                    }),
                }),
            });
        });

        const spotsLayer = spots.map(spot => {
            const { longitude, latitude } = spot.location;
            const point = new Point([longitude, latitude]);

            return new VectorLayer({
                renderBuffer: 1024,
                source: new VectorSource({
                    features: [new Feature(point)]
                }),
                style: new Style({
                    image: new Icon({
                        src: "/spot.svg",
                        size: [40, 40],
                        rotateWithView: true,
                    }),
                }),
            });
        });

        const differencesLayer = differences.map(difference => {
            const { longitude, latitude } = difference.location;
            const point = new Point([longitude, latitude]);

            return new VectorLayer({
                renderBuffer: 1024,
                source: new VectorSource({
                    features: [new Feature(point)]
                }),
                style: new Style({
                    image: new Icon({
                        src: "/difference.svg",
                        size: [40, 40],
                        rotateWithView: true,
                    }),
                }),
            });
        });

        map = new Map({
            target: container,
            layers: [
                new TileLayer({
                    source: new OSM()
                }),
                ...eventLayers,
                ...quizzLayers,
                ...spotsLayer,
                ...differencesLayer,
                layer,
            ],
            view: new View({
                center: place,
                zoom: 17,
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

    let playingEvent: MapEvent | null = null;
    let playingQuiz: Quiz | null = null;
    let playingSpot: Spot | null = null;
    let playingDifference: Difference | null = null;

    locationStore.subscribe(loc => {
        const { longitude, latitude } = loc.position;
        const point = new Point([longitude, latitude]);
        source.clear();
        source.addFeature(new Feature(point));
        map?.getView().setCenter([longitude, latitude]);

        playingEvent = isAnyEventClose(loc, $stats.events);
        playingQuiz = isAnyQuizClose(loc, $stats.quizzes);
        playingSpot = isAnySpotsClose(loc, $stats.spots);
        playingDifference = isAnyDifferencesClose(loc, $stats.differences);
    });

</script>


<Dialog open={playingDifference !== null}>
    <DialogContent>
        <DialogHeader>
            <DialogTitle>
                Find the difference
            </DialogTitle>
            <p class="text-foreground/75 text-sm">
                Let's see how good your eyesight is. Find the difference between the image and the real place.
            </p>
        </DialogHeader>
        <DialogFooter>
            <Button class="flex items-center gap-2" href={route("/play/differences/[slug]", { slug: playingDifference?.name || "" })}>
                Let's go
                <IconSearch />
            </Button>
        </DialogFooter>
    </DialogContent>
</Dialog>

<Dialog open={playingSpot !== null}>
    <DialogContent>
        <DialogHeader>
            <DialogTitle>
                Album
            </DialogTitle>
            <p class="text-foreground/75 text-sm">
                You found a new spot in Mulhouse. Let's take a picture!
            </p>
        </DialogHeader>
        <svelte:component this={playingSpot?.image} />
        <DialogFooter>
            <Button class="flex items-center gap-2" href={route("/play/album/new/[slug]", { slug: playingSpot?.slug || "" })}>
                Take a picture
                <IconCamera />
            </Button>
        </DialogFooter>
    </DialogContent>
</Dialog>


<Dialog open={playingQuiz !== null}>
    <DialogContent>
        <DialogHeader>
            <DialogTitle>
                Quizz
            </DialogTitle>
            <p class="text-foreground/75 text-sm">
                Let's see how well you know Mulhouse. Answer the following questions to earn points.
            </p>
        </DialogHeader>
        <p class="text-foreground/75 text-sm flex justify-center items-end gap-2 font-bold">
            <IconBook />
            Instructions :
        </p>
        <div class="border border-dashed border-primary p-4 rounded-md flex gap-4">
            <Button class="bg-success text-white flex-1 hover:text-white hover:bg-success">
                Right answer
            </Button>
            <Button class="bg-destructive text-destructive-foreground flex-1 hover:text-destructive-foreground hover:bg-destructive">
                Wrong answer
            </Button>
        </div>
        <DialogFooter>
            <Button class="flex items-center gap-2" href={route("/play/quizz/[slug]", { slug: playingQuiz?.name || "" })}>
                Play the game
                <IconArrowRight />
            </Button>
        </DialogFooter>
    </DialogContent>
</Dialog>

<Dialog open={playingEvent !== null}>
    <DialogContent>
        <DialogHeader>
            <DialogTitle>
                Event
            </DialogTitle>
            <p class="text-foreground/75 text-sm">
                Oh, you discover an interesting event nearby! What is it?
            </p>
            <p class="text-foreground/75 text-sm">
                {playingEvent?.description}
            </p>
        </DialogHeader>
        <svelte:component this={playingEvent?.image} />
        <DialogFooter>
            <Button on:click={() => {
                stats.addPoints(100);
                stats.addEvent(playingEvent?.name);
                playingEvent = null;
            }}>
                Hmm.. Okay..
            </Button>
        </DialogFooter>
    </DialogContent>
</Dialog>

<div class="h-dvh w-full overflow-hidden" use:mapAction />
