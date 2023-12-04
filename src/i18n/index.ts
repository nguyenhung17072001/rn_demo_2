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
            "login": "Login",
            "username": "Username",
            "enter your email": "Enter your email",
            "password": "Password",
            "enter password": "Enter password",
            "forgot password": "Forgot password",
            "register": "Register",
            "repassword": "Repassword"
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
            "username": "Tên đăng nhập",
            "enter your email": "Nhập Email",
            "password": "Mật khẩu",
            "enter password": "Nhập mật khẩu",
            "forgot password": "Quên mật khẩu",
            "register": "Đăng ký",
            "repassword": "Nhập lại mật khẩu"
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