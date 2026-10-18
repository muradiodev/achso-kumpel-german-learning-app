import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

import { getJSON, setJSON } from '@/lib/storage';

import az from './locales/az';
import en from './locales/en';

// UI languages. Add a locale file and list it here; `ready: false` shows it
// as "coming soon" in the profile screen.
const locales = { en, az };
const LANG_KEY = 'app:uiLang';

export const UI_LANGUAGES = [
  { code: 'en', ready: true },
  { code: 'az', ready: true },
];

function lookup(dict, key) {
  return key.split('.').reduce((node, part) => (node == null ? undefined : node[part]), dict);
}

export function translate(lang, key, params) {
  let value = lookup(locales[lang], key);
  if (value === undefined) value = lookup(en, key);
  if (value === undefined) return key;
  if (params && typeof value === 'string') {
    value = value.replace(/\{(\w+)\}/g, (match, name) => (params[name] === undefined ? match : String(params[name])));
  }
  return value;
}

const I18nContext = createContext({ lang: 'en', setLang: () => {}, t: (key) => key });

export function I18nProvider({ children, initialLang = 'en' }) {
  const [lang, setLangState] = useState(locales[initialLang] ? initialLang : 'en');
  useEffect(() => {
    getJSON(LANG_KEY).then((saved) => {
      if (saved && locales[saved]) setLangState(saved);
    });
  }, []);

  const setLang = useCallback((code) => {
    if (!locales[code]) return;
    setLangState(code);
    setJSON(LANG_KEY, code);
  }, []);
  const t = useCallback((key, params) => translate(lang, key, params), [lang]);
  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}
