import type { Meta } from "@storybook/react";
import type { PropsWithChildren } from "react";

import { Button, Label } from "../../components";
import { type Locale, getSupportedLanguages } from "../../i18n";
import { PoluiProvider } from "../../providers";
import type { LangAndText } from "../../types";
import { useTranslate } from "./use-translate";

const translations1 = {
  "es-ES": {
    title: "Title",
  },
  "en-US": {
    title: "Título",
  },
};
const Provider = ({ children }: PropsWithChildren) => {
  const langs = getSupportedLanguages(["en-US", "es-ES", "de-DE"]);
  return (
    <PoluiProvider
      defaultLanguage={langs[0]}
      translations={translations1}
      keys={{ language: "language" }}
      allLanguages={langs}
    >
      {children}
    </PoluiProvider>
  );
};

const App = () => {
  const { lang, t, changeLanguage, getInAllLanguages, getDictionary } = useTranslate();

  return (
    <div className="flex flex-col gap-2 ">
      <div>language: {lang.locale}</div>
      <div>translation: {t("title")}</div>
      <hr />
      <div className="flex items-center gap-2">
        {Object.keys(translations1).map((lang) => (
          <Button key={lang} onClick={() => changeLanguage(lang as Locale)}>
            Change language to {lang}
          </Button>
        ))}
      </div>
      <hr />
      "Title" in all languages: <pre>{JSON.stringify(getInAllLanguages("title"), null, 2)}</pre>
      <hr />
      Selected Dictionary: <pre>{JSON.stringify(getDictionary(), null, 2)}</pre>
      <hr />
    </div>
  );
};
const meta: Meta<typeof Label> = {
  title: "Hooks/useTranslate",
  component: Label,

  decorators: [
    (Story) => (
      <div className="flex flex-col p-6 ">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
};
export default meta;

export const Default = () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};

const translations2 = {
  "de-DE": {
    title: "title in de-DE",
    subtitle: "subtitle in de-DE",
  },
  "de-AT": {
    title: "title in de-AT",
  },
};
const Provider2 = ({ children }: PropsWithChildren) => {
  const langs = getSupportedLanguages(["de-DE", "de-AT"]);
  return (
    <PoluiProvider
      defaultLanguage={langs[0]}
      translations={translations2}
      keys={{ language: "language" }}
      allLanguages={langs}
    >
      {children}
    </PoluiProvider>
  );
};

const App2 = () => {
  const { lang, t, changeLanguage, getInAllLanguages } = useTranslate();

  return (
    <div className="flex flex-col gap-2 ">
      <pre>
        <code>
          {`
const translations2 = {
  'de-DE': {
    title: 'title in de-DE',
    subtitle: 'subtitle in de-DE',
  },
  'de-AT': {
    title: 'title in de-AT',
  },
}
  `}
        </code>
      </pre>
      <p>
        In our example, we have two languages: de-DE and de-AT. de-DE has both title and subtitle, while de-AT has only
        title, so subtitle will be in the de-AT's "basedOn" language, which is de-DE.
      </p>
      <div>language: {lang.locale}</div>
      <div>translation: {t("title")}</div>
      <div>translation: {t("subtitle")}</div>
      <hr />
      <div className="flex items-center gap-2">
        {Object.keys(translations2).map((lang) => (
          <Button key={lang} onClick={() => changeLanguage(lang as Locale)}>
            Change language to {lang}
          </Button>
        ))}
      </div>
      <hr />

      {JSON.stringify(getInAllLanguages("title"), null, 2)}
      <hr />
      {JSON.stringify(getInAllLanguages("subtitle"), null, 2)}
    </div>
  );
};

export const BasedLanguage = () => {
  return (
    <Provider2>
      <App2 />
    </Provider2>
  );
};

export const GetCurrentLabel = () => {
  const labels: LangAndText[] = [
    { text: "indefinido", language: "es" },
    { text: "unbestimmt", language: "de" },
    { text: "indefinite", language: "en" },
  ];
  const { getCurrentLabel } = useTranslate();
  return (
    <div className="flex flex-col space-y-6 divide-y">
      <h1>getCurrentLabel</h1>
      <pre>Data= {JSON.stringify(labels, null, 2)}</pre>
      <pre>{JSON.stringify(getCurrentLabel(labels), null, 2)}</pre>
    </div>
  );
};
