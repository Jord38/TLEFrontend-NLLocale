import deDE from "./de-DE";
import enUS from "./en-US";
import frFR from "./fr-FR";
import jaJP from "./ja-JP";
import koKR from "./ko-KR";
import ptBR from "./pt-BR";
import ruRU from "./ru-RU";
import zhHANS from "./zh-HANS";
import zhHANT from "./zh-HANT";

const defaultLocale = "en-US";

const localisations: {[key: string]: {[key: string]: string}} = {
  "de-DE": deDE,
  "en-US": enUS,
  "fr-FR": frFR,
  "ja-JP": jaJP,
  "ko-KR": koKR,
  "pt-BR": ptBR,
  "ru-RU": ruRU,
  "zh-HANS": zhHANS,
  "zh-HANT": zhHANT
};

const getString = (locale: string, key: string) => {
  if (!(locale in localisations)) {
    locale = defaultLocale;
  }
  if (key in localisations[locale]) {
    return localisations[locale][key];
  }
  if (key in localisations[defaultLocale]) {
    return localisations[defaultLocale][key];
  }
  return key;
}

export {
  defaultLocale,
  getString,
  localisations
};