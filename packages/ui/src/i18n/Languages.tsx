import type { Language } from "../types";
import { spanishLanguagesPack } from "./language-packs/spanish-pack";
import { type Locale, Locales } from "./locales";
import { countryCodes } from "./phones/metadata/countries";

/**
 * @name languages
 * @description language object describes the information for each country and language, user in the interface will choose between languages.
 *
 * (example: Austria will be rendered as a flag and the language will be German, same as Germany)
 *
 * Means that ONE language can be used in MULTIPLE countries.
 *
 * @type {Language[]} languages
 *
 * @see https://www.fincher.org/Utilities/CountryLanguageList.shtml
 */
export const rawLanguages: Language[] = [
	...spanishLanguagesPack,
	{
		locale: Locales.DE,
		language: Locales.DE,
		country: countryCodes.DE,
	},
	{
		locale: Locales.EN,
		language: Locales.EN,
		country: countryCodes.US,
	},
	{
		locale: Locales.DE_DE,
		country: countryCodes.DE,
		language: Locales.DE,
		basedOn: [Locales.DE],
	},
	{
		locale: Locales.EN_US,
		country: countryCodes.US,
		language: Locales.EN,
		basedOn: [Locales.EN],
	},
	{
		locale: Locales.EN_GB,
		country: countryCodes.GB,
		language: Locales.EN,
		basedOn: [Locales.EN_US, Locales.EN],
	},
	{
		locale: Locales.ES_ES,
		country: countryCodes.ES,
		language: Locales.ES,
		basedOn: [Locales.ES],
	},
	{
		locale: Locales.DE_AT,
		country: countryCodes.AT,
		language: Locales.DE,
		basedOn: [Locales.DE],
	},
	{
		locale: Locales.DE_CH,
		country: countryCodes.CH,
		language: Locales.DE,
		basedOn: [Locales.DE_DE],
	},
	{
		locale: Locales.FR,
		country: countryCodes.FR,
		language: Locales.FR,
	},
] as const;

export const languages = [...new Set(rawLanguages)] as Language[];

export const defaultLanguage =
	languages.find((lang) => lang.locale === Locales.EN_US) ?? languages[0];

// Extract unique language codes and country codes
export const allLocales = [
	...new Set(languages.map((lang) => lang.locale)),
] as const;
// Create types based on these arrays

/**
 * Provide **Country** codes of the desired languages, ES for Spanish, US for English, DE for German
 * @param countryCodes
 * @returns
 */
export const getSupportedLanguages = (
	wantedLocales: Locale[] = [],
): typeof languages => {
	const supportedLanguages = languages.filter((lang) =>
		wantedLocales.includes(lang.locale),
	);
	return supportedLanguages;
};

export const getLanguage = (locale: Locale): Language | undefined => {
	return languages.find((lang) => lang.locale === locale);
};
