import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';



// the translations
const resources = {
    en: {
        translation: {
            "slogan": "Hello",
            "selection language": "selection language",
            "vi": "Vietnamese",
            "en": "English",
            "confirm": "Confirm",
            "login": "Login"
        }
    },
    vi: {
        translation: {
            "slogan": "Xin chào",
            "selection language": "Chọn ngôn ngữ",
            "vi": "Tiếng Việt",
            "en": "Tiếng Anh",
            "confirm": "Xác nhận",
            "login": "Đăng nhập",
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