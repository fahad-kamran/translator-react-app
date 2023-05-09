import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import common_en from './Translations/en.json';
import common_ar from './Translations/ar.json';
import common_ur from './Translations/ur.json';

const resources = {
    en: {
        translation: common_en
    },
    ar: {
        translation: common_ar
    },
    ur: {
        translation: common_ur
    },
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        keySeparator: {
            escapeValue: false
        }
    });

export default i18n;