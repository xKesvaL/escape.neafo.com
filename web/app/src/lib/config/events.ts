import EventImageBlack from "$lib/components/events/EventImageBlack.svelte";
import EventImageMustache from "$lib/components/events/EventImageMustache.svelte";
import EventImagePolice from "$lib/components/events/EventImagePolice.svelte";
import EventImageTeeth from "$lib/components/events/EventImageTeeth.svelte";
import type { ComponentType } from "svelte";

export const mapEvents = [
	{
		position: {
			longitude: 7.333884,
			latitude: 47.747923,
		},
		name: "police",
		iconSource: "/car-event.svg",
		description:
			"The police is here for a car that was supposedly broken into. What a weird city.",
		image: EventImagePolice,
	},
	{
		position: {
			longitude: 7.341169,
			latitude: 47.748231,
		},
		name: "teeth-man",
		iconSource: "/teeth-event.svg",
		description:
			"An old man fell in front of you and broke his teeth, falling on the ground. Disgusting.",
		image: EventImageTeeth,
	},
	{
		position: {
			longitude: 7.339452,
			latitude: 47.747353,
		},
		name: "carnival",
		iconSource: "/carnival-event.svg",
		description:
			"A swarm of black men appears out of nowhere. They are dancing.",
		image: EventImageBlack,
	},
	{
		position: {
			longitude: 7.336805,
			latitude: 47.745186,
		},
		name: "mustache-event",
		iconSource: "/mustache-event.svg",
		description:
			"You see a mustached man. He's looking like someone you know. You can't remember who.",
		image: EventImageMustache,
	},
] as const satisfies MapEvent[];

export interface MapEvent {
	position: {
		longitude: number;
		latitude: number;
	};
	name: string;
	iconSource: string;
	description: string;
	image: ComponentType;
}
