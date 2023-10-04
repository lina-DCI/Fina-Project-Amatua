import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n
    .use(Backend)           // Lädt Übersetzungsdaten vom Server
    .use(LanguageDetector)  // Erkennt die Browsersprache automatisch
    .use(initReactI18next)  // Initialisiert react-i18next
    .init({
        fallbackLng: 'en',  // Fallback-Sprache, falls Übersetzungen fehlen
        debug: true,        // Aktiviere Debug-Modus
        detection: {
            order: ['queryString', 'cookie'], // Reihenfolge der Erkennungsmethoden => URL(z.B. ?lang=en), Cookies 
            cache: ['cookie'], // Sprache, falls aus den Cookies erkannt, im Cache speichern
        },
        interpolation: {
            escapeValue: false  // Überspringe das Escapen von HTML-Tags
        },
        backend: {
            loadPath: '/api/locales/{{ns}}', // Pfad zum Abrufen der Übersetzungsdaten
        }
    })

export default i18n