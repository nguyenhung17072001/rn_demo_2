import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';



// the translations
const resources = {
    en: {
        translation: {
            "slogan": "Hello"
        }
    },
    vi: {
        translation: {
            "slogan": "Xin chào"
        }
    }
};


i18n
    .use(initReactI18next) 
    .init({
        compatibilityJSON: 'v3',
        resources,
        lng: "vi", 
        fallbackLng: "vi",

        interpolation: {
            escapeValue: false
        }
});


export default i18n;