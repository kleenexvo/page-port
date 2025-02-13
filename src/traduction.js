import { reactive } from 'vue';
import { locales } from './locales';

const state = reactive({
  currentLocale: 'en', 
});

export const translate = (key) => {
  return locales[state.currentLocale][key] || key;
};

export const setLocale = (locale) => {
  state.currentLocale = locale;
};

export const getLocale = () => state.currentLocale;
