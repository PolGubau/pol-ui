import React from "react";

import { formatString } from "../../helpers";
import { type Locale, Locales } from "../../i18n";
import "../../providers";
import { PolUiContext } from "../../providers/PoluiProvider/PoluiProvider";
import type { LangAndText, Language, Translation } from "../../types";
import { useLocalStorage } from "../use-local-storage";

const useTranslate = () => {
  const cortexContext = React.useContext(PolUiContext);
  if (!cortexContext) {
    throw new Error(
      "😯 This App must be used within a <PolUiProvider/>, please check the parent component (as Layout). This error is getting thrown by useTranslate custom hook and it is intentional. ⚠️",
    );
  }
  const { keys, defaultLanguage, translations, allLanguages } = cortexContext;

  const [lang, setLang] = useLocalStorage<Language>(keys.language, defaultLanguage);

  const changeLanguage = (locale: Locale) => {
    const selectedLanguage = allLanguages.find((l) => l.locale === locale);
    if (!selectedLanguage) {
      console.warn(`😯 The language "${locale}" is not available in allLanguages, please add it`);
    }
    selectedLanguage && setLang(selectedLanguage);
  };

  // if (!translations[lang.locale]) {
  //   console.info(
  //     `😯 The language "${lang.locale}" is not available in translations, back to "${defaultLanguage.locale}"`,
  //   )
  // }

  const getTranslationsByLocale = (locale: Locale): Translation => {
    return translations[locale] ?? {};
  };
  const getTranslationsByMultipleLanguages = (locales: Locale[]): Translation => {
    // Ensure that translations from more specific locales (later in the array) override those from more general locales (earlier in the array).
    return locales.reduce((acc, locale) => {
      return { ...getTranslationsByLocale(locale), ...acc };
    }, {});
  };
  const translate = (
    key: string,
    defaultLocale: Locale = lang.locale,
    fallbackLanguageCode: Locale = defaultLanguage.locale,
  ): string => {
    const languageToTranslate = defaultLocale || fallbackLanguageCode || defaultLanguage.locale || Locales.EN_US;
    const fallbackLanguages = allLanguages.find((l) => l.locale === languageToTranslate)?.basedOn || [];

    const languagesToTry = [languageToTranslate, ...fallbackLanguages];
    const languageTranslations = getTranslationsByMultipleLanguages(languagesToTry) ?? {};
    const keyExists = Object.keys(languageTranslations).find((k) => k?.toLowerCase() === key?.toLowerCase());
    const hasTranslation = keyExists !== undefined;
    const translationValue = hasTranslation ? languageTranslations[key] : key;

    if (!hasTranslation) {
      return key ? formatString(key) : "";
    }
    return formatString(translationValue ?? key);
  };

  const getInAllLanguages = (key: string): LangAndText[] => {
    return Object.keys(cortexContext.translations).map((language) => {
      const lang = language as Locale;
      return {
        language: lang,
        text: translate(key, lang),
      };
    });
  };

  const getDictionary = (searchedLang: Locale = lang.locale) => {
    return translations[searchedLang] ?? {};
  };

  const getCurrentLabel = (langArray: LangAndText[]): string | undefined => {
    return langArray.find((l) => l.language === lang.locale)?.text ?? undefined;
  };

  const languagesGrouped = (langs: Language[], forceCountry = false) => {
    // we want to group the languages by language field, some of them are the same language but different country

    // some locales are the general language, like 'es' and 'de', and some are more specific, like 'es-ES' and 'de-DE'

    // if we have a general language, we want to show it first, and then the specific ones

    // if forceCountry is true, we will filter out the general languages

    // we return array of arrays where each array contains all languages with the same language (all spanish languages, all german languages, etc.)

    const allLangs = forceCountry ? langs.filter((l) => l.country !== undefined) : langs;

    const languagesGrouped = allLangs.reduce((acc: Record<string, Language[]>, lang) => {
      const key = lang.language;
      if (forceCountry && lang.country === undefined) {
        return acc;
      }
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(lang);
      return acc;
    }, {});
    return languagesGrouped as Record<string, Language[]>;
  };

  return {
    translate,
    lang,
    changeLanguage,
    t: translate,
    getInAllLanguages,
    getDictionary,
    getCurrentLabel,
    allLanguages,
    languagesGrouped,
  };
};

export default useTranslate;
