import type { Language } from "../../types";
import { Locales } from "../locales";
import { countryCodes } from "../phones/metadata/countries";

/**
 * MESALVO SPANISH LANGUAGES PACK
 * @description Spanish languages pack for all the countries that speak Spanish
 * Includes:
 * - Spanish (Spain)
 * - Spanish (Argentina)
 * - Spanish (Mexico)
 * - Spanish (Bolivia)
 * - Spanish (Chile)
 * - Spanish (Colombia)
 * - Spanish (Costa Rica)
 * - Spanish (Dominican Republic)
 * - Spanish (Ecuador)
 * - Spanish (Venezuela)
 * - Spanish (El Salvador)
 * @type {Language[]} spanishLanguagesPack
 * @see https://www.fincher.org/Utilities/CountryLanguageList.shtml
 */

export const spanishLanguagesPack: Language[] = [
  {
    locale: Locales.ES,
    language: Locales.ES,
    country: countryCodes.ES,
  },
  {
    locale: Locales.ES_AR,
    language: Locales.ES_AR,
    country: countryCodes.AR,
    basedOn: [Locales.ES],
  },
  {
    locale: Locales.ES_MX,
    language: Locales.ES_MX,
    country: countryCodes.MX,
    basedOn: [Locales.ES],
  },
  {
    locale: Locales.ES_BO,
    language: Locales.ES_BO,
    country: countryCodes.BO,
    basedOn: [Locales.ES],
  },
  {
    locale: Locales.ES_CL,
    language: Locales.ES_CL,
    country: countryCodes.CL,
    basedOn: [Locales.ES],
  },
  {
    locale: Locales.ES_CO,
    language: Locales.ES_CO,
    country: countryCodes.CO,
    basedOn: [Locales.ES],
  },
  {
    locale: Locales.ES_CR,
    language: Locales.ES_CR,
    country: countryCodes.CR,
    basedOn: [Locales.ES],
  },
  {
    locale: Locales.ES_DO,
    language: Locales.ES_DO,
    country: countryCodes.DO,
    basedOn: [Locales.ES],
  },
  {
    locale: Locales.ES_EC,
    language: Locales.ES_EC,
    country: countryCodes.EC,
    basedOn: [Locales.ES],
  },
  {
    locale: Locales.ES_VE,
    language: Locales.ES_VE,
    country: countryCodes.VE,
    basedOn: [Locales.ES],
  },
  {
    locale: Locales.ES_SV,
    language: Locales.ES_SV,
    country: countryCodes.SV,
    basedOn: [Locales.ES],
  },
];
