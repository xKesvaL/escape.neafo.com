import type { ComponentType } from "svelte";

export interface FAQ {
	question: string;
	answer: string;
}

export interface Steps {
	title: string;
	description: string;
	iconPath: string;
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
