import React, { useEffect, useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'
import axios from 'axios'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'
import { setItemWithExpiration, getItemWithExpiration } from '../lib/localstorage.js'

const AppContext = React.createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export default function ContextProvider({ children }) {
  const { t, i18n } = useTranslation();

  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [areProductsLoaded, setAreProductsLoaded] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      // Überprüfen, ob die Sprache (z.B. 'en') bereits im Cookie vorhanden ist
      const existingLanguage = Cookies.get("language");
      // Überprüfen, ob die Übersetzung bereits im Local Storage vorhanden ist
      const translations = getItemWithExpiration(`translations_${existingLanguage}`)

      // Wenn Sprache und Übersetzung vorhanden
      if (existingLanguage && translations) {
        // Sprache setzen (z.B. 'de') für i18nex
        i18n.changeLanguage(existingLanguage);
        // Sprache setzen für das Dropdown-Menü
        setSelectedLanguage(existingLanguage);

        // Übersetzung dem i18n Objekt hinzufügen
        i18n.addResourceBundle(
          existingLanguage,
          "translation",
          translations,
          true,
          true
        );
        setIsDataLoaded(true);
      } else {
        // wenn die Sprache noch nicht im Cookie und die Übersetzung dafür noch nicht im Local Storage vorhanden ist
        try {
          // Load default language and translations
          const response = await axios.get(
            `${import.meta.env.VITE_ENGLISH}`
          );
          const translations = response.data;
          // Fügt die Default-Übersetzung ('en') dem i18next-Übersetzungsobjekt hinzu
          i18n.addResourceBundle(
            "en",
            "translation",
            translations,
            true,
            true
          );
          // Speichert Sprache ('en') im Cookie und Übersetzung für diese Sprache im Local Storage (wird nach 24 St. aus Local Storage gelöscht)
          Cookies.set("language", "en", { path: "/" });
          setItemWithExpiration(
            `translations_en`,
            translations,
            24                             //24 Stunden
          );
          setIsDataLoaded(true);
        } catch (error) {
          console.error("Error fetching translations:", error);
        }
      }
    };

    fetchData();
  }, []);

  // i18n.changeLanguage(language) ändert überall die Sprache abhängig vom übergebenen String
  const changeLanguage = async (language) => {
    // Sprache setzen (z.B. 'de')
    i18n.changeLanguage(language);
    // Sprache setzen für das Dropdown-Menü
    setSelectedLanguage(language);
    // Speichert die Sprache (z.B. 'en') in die Cookie
    Cookies.set("language", language, { path: "/" });

    // Ist die Übersetzung für die gesetzte Sprache vorhanden?
    if (!getItemWithExpiration(`translations_${language}`)) {
      try {
        setIsDataLoaded(false);
        const response = await axios.get(
          `${import.meta.env.VITE_ALL_LANGUAGES+language}`
        );
        const translations = response.data;
        // Fügt die Übersetzung dem i18next-Übersetzungsobjekt hinzu
        i18n.addResourceBundle(
          language,
          "translation",
          translations,
          true,
          true
        );
        setItemWithExpiration(
          `translations_${language}`,
          translations,
          24                             //24 Stunden
        );
        setIsDataLoaded(true);
      } catch (error) {
        console.error("Error fetching translations:", error);
      }
    } else {
      // Übersetzung aus Local Storage auslesen und dem i18n Objekt hinzufügen
      const translations = getItemWithExpiration(`translations_${language}`);
      i18n.addResourceBundle(
        language,
        "translation",
        translations,
        true,
        true
      );
    }

    if( product && Object.keys(product).length !== 0 ){
      const translation = Object.assign({}, product.locales[language]);
    // console.log(translation);
    if(language){
      i18n.addResourceBundle(
        language,
        "translation_product",
        translation,
        true,
        true
      );
    }
    }
  };

  // Übermittelt die Daten aus dem News Letter Formular zum Server
  const processLetterForm = async (formData) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_USER_SIGN_UP}`, formData)
      if (response.data.hasOwnProperty('validation')) {
        response.data.validation.forEach(error => notify(error))
      } else {
        notify( response.data.message )
        console.log('Response from server:', response.data)
      }
    } catch (error) {
      console.error('Error sending form data: ', error)
    }

  }

  //--------------------------------Toast Notification-------------------
  const notify = (error) => toast.error(error, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    progress: undefined,
    theme: "colored",
    draggable: false,
  })
  //-----------------------------------------------------------

  //-----------------------------Products-----------------------
  // ToggleReadMore
  const [isReadMore, setIsReadMore] = useState(false);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  //Modal - Product Card
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = (product) => {
    setIsOpen(true);
    setProduct(product)

    // Übersetzung für das Produkt
    const language = Cookies.get("language");
    // Richtige Übersetzung (z.B. Englisch) anhand vom ausgelesenen language im Cookie (z.B. 'en')
    const translation = Object.assign({}, product.locales[language]);
     // Übersetzung dem i18n Objekt hinzufügen
    if(language){
      i18n.addResourceBundle(
        language,
        "translation_product",
        translation,
        true,
        true
      );
    }
  };

  const onClose = () => {
    setIsOpen(false);
    setProduct({})
  };
  //---------------------------------------------------------------

  //-------------------------------Fetch All Products form server--------------------
  const fetchProducts = async () => {
    try {
      setAreProductsLoaded(false)
      const response = await axios.get(`${import.meta.env.VITE_ALL_PRODUCTS}`)
      setProducts(response.data);
      setAreProductsLoaded(true)
    } catch (error) {
      console.error('Error sending form data: ', error)
    }
  }
//-----------------------------------------------------------------------------------

  return (
    <AppContext.Provider
      value={{
        changeLanguage,
        isDataLoaded,
        selectedLanguage,
        t,
        processLetterForm,
        isReadMore,
        toggleReadMore,
        isOpen,
        onOpen,
        onClose,
        fetchProducts,
        products,
        product,
        areProductsLoaded,
        notify,
      }}
    >
      {children}
    </AppContext.Provider>
  );

}
