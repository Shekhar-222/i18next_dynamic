// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: "en", // Default language
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false
    },
    backend: {
      // Configure the backend to load translation files from the specified paths
      loadPath: "/locales/{{lng}}.json" // Assuming the translation files are in the 'public/locales' folder
    }
  });

export default i18n;
