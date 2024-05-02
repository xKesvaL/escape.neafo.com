import * as m from "$paraglide/messages";

import Dreyfus from "$lib/components/differences/Dreyfus.svelte";
import MulhouseTemple from "$lib/components/differences/MulhouseTemple.svelte";
import Schweisser from "$lib/components/differences/Schweisser.svelte";
import type { ComponentType } from "svelte";

export interface Difference {
	name: string;
	location: {
		latitude: number;
		longitude: number;
	};
	content: ComponentType;
	differences: number;
}

export const differences = [
	{
		name: "temple-mulhouse",
		location: {
			latitude: 47.74678,
			longitude: 7.3388,
		},
		content: MulhouseTemple,
		differences: 4,
	},
	{
		name: "schweisser",
		location: {
			latitude: 47.749507,
			longitude: 7.3388559,
		},
		content: Schweisser,
		differences: 3,
	},
	{
		name: "dreyfus",
		location: {
			latitude: 47.74479712,
			longitude: 7.3371577,
		},
		content: Dreyfus,
		differences: 3,
	},
] as const satisfies Difference[];
