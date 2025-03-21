import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'english' | 'spanish' | 'french' | 'german' | 'chinese' | 'japanese';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  english: {
    settings: 'Settings',
    notifications: 'Notifications',
    darkMode: 'Dark Mode',
    language: 'Language',
    saveChanges: 'Save Changes',
    saved: 'Saved!',
    home: 'Home',
    seniors: 'Seniors',
    companies: 'Companies',
    resources: 'Resources',
    profile: 'Your Profile',
    signOut: 'Sign out',
    manageNotifications: 'Manage your notification preferences',
    toggleDarkMode: 'Toggle dark mode appearance',
    selectLanguage: 'Select your preferred language'
  },
  spanish: {
    settings: 'Configuración',
    notifications: 'Notificaciones',
    darkMode: 'Modo Oscuro',
    language: 'Idioma',
    saveChanges: 'Guardar Cambios',
    saved: '¡Guardado!',
    home: 'Inicio',
    seniors: 'Seniors',
    companies: 'Empresas',
    resources: 'Recursos',
    profile: 'Tu Perfil',
    signOut: 'Cerrar Sesión',
    manageNotifications: 'Administra tus preferencias de notificaciones',
    toggleDarkMode: 'Cambiar modo oscuro',
    selectLanguage: 'Selecciona tu idioma preferido'
  },
  french: {
    settings: 'Paramètres',
    notifications: 'Notifications',
    darkMode: 'Mode Sombre',
    language: 'Langue',
    saveChanges: 'Enregistrer',
    saved: 'Enregistré!',
    home: 'Accueil',
    seniors: 'Seniors',
    companies: 'Entreprises',
    resources: 'Ressources',
    profile: 'Votre Profil',
    signOut: 'Déconnexion',
    manageNotifications: 'Gérer vos préférences de notifications',
    toggleDarkMode: 'Basculer le mode sombre',
    selectLanguage: 'Sélectionnez votre langue préférée'
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'english',
  setLanguage: () => {},
  t: () => '',
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'english';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language]?.[key] || translations.english[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);