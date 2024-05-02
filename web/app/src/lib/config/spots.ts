import * as m from "$paraglide/messages";

import HotelDeVille from "$lib/components/spots/HotelDeVille.svelte";
import Moutons from "$lib/components/spots/Moutons.svelte";
import Statue from "$lib/components/spots/Statue.svelte";
import StreetArtArsenal from "$lib/components/spots/StreetArtArsenal.svelte";
import StreetArtTeutonique from "$lib/components/spots/StreetArtTeutonique.svelte";
import type { ComponentType } from "svelte";

export interface Spot {
	name: string;
	slug: string;
	image: ComponentType;
	location: {
		latitude: number;
		longitude: number;
	};
}

export const spots = [
	{
		name: "Les Moutons",
		slug: "les-moutons",
		location: {
			latitude: 47.74710147585402,
			longitude: 7.332201852494653,
		},
		image: Moutons,
	},
	{
		name: "Statue street art",
		slug: "statue-street-art",
		location: {
			latitude: 47.74757415126581,
			longitude: 7.333888342497469,
		},
		image: Statue,
	},
	{
		name: "Hotel de Ville",
		slug: "hotel-de-ville",
		location: {
			latitude: 47.74666,
			longitude: 7.33915,
		},
		image: HotelDeVille,
	},
	{
		name: "Street art Grand'rue",
		slug: "street-art-grand-rue",
		location: {
			latitude: 47.746801,
			longitude: 7.332879,
		},
		image: StreetArtArsenal,
	},
	{
		name: "Street art Teutonique",
		slug: "street-art-teutonique",
		location: {
			latitude: 47.7457991420475,
			longitude: 7.337759649356634,
		},
		image: StreetArtTeutonique,
	},
] as const satisfies Spot[];
