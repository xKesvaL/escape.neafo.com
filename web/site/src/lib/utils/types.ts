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

export interface TeambuildingText{
    title: string;
    text: string;
}

export interface LegalProps{
    title: string;
    description: string;
}

export interface AboutUsProfile{
    name: string;
    role: string;
    image: ComponentType;
    job: string;
    occupation: string;
}

export interface AboutUsEscape{
    image: ComponentType;
    date: string;
}
