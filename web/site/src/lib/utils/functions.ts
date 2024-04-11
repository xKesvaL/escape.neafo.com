import * as m from "$paraglide/messages";

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
