import type { ComponentType } from "svelte";

export interface FAQ {
	question: string;
	answer: string;
}

export interface Steps {
	title: string;
	description: string;
	icon: ComponentType;
}

export interface TeamBuildingText {
	title: string;
	text: string;
}

export interface LegalProps {
	title: string;
	description: string;
}

export interface BookingOptions {
	min: number;
	max: number;
	step: number;
	exclude: number[];
}

export interface AboutUsProfile {
    name: string;
    role: string;
    image: ComponentType;
    job: string;
    occupation: string;
}

export interface AboutUsEscape {
    image: ComponentType;
    date: string;
}

export interface Review {
	stars: number;
    title:string;
    date: string;
	text:string;
	name:string;
	icon: ComponentType 
}
