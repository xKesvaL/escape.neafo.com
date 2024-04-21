import * as m from "$paraglide/messages";
import type { Booking } from "@repo/schemas/zod";
import { getContext, setContext } from "svelte";

export const i18nKeys = Object.keys(m);

export type I18nKey = (typeof i18nKeys)[number];

/**
 * @description Gets a i18n message dynamically. Use for cases when you have a dynamic parameter, e.g: `locale_${lang}`
 * @param {I18nKey} key
 * @param args
 */
export const getI18n = (key: I18nKey, args?: { [key: string]: unknown }) => {
	if (i18nKeys.includes(key)) {
		return m[key as keyof typeof m](args);
	}

	return key;
};

export const dateEqualityByDayMonthYear = (date1: Date, date2: Date) => {
	return (
		date1.getDate() === date2.getDate() &&
		date1.getMonth() === date2.getMonth() &&
		date1.getFullYear() === date2.getFullYear()
	);
};

export const getContextEscapeBooking = (escape_id: string) => {
	return getContext<Omit<Booking, "_id">>(escape_id);
};

export const setContextEscapeBooking = (
	escape_id: string,
	data: Omit<Booking, "_id">,
) => {
	return setContext<Omit<Booking, "_id">>(escape_id, data);
};

export const updateContextEscapeBooking = (
	escape_id: string,
	data: Partial<Omit<Booking, "_id">>,
) => {
	const currentData = getContextEscapeBooking(escape_id);
	setContextEscapeBooking(escape_id, { ...currentData, ...data });
};
