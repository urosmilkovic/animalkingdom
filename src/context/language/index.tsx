import React, { createContext, useContext, useState } from 'react';
import { EN, RS, RU } from 'translations';

const initialState: any = {
  currentLanguage: EN,
  languages: [EN, RS, RU],
};

const LanguageContext = createContext({
  ...initialState,
  changeLanguage: (_x: number) => _x,
  t: (x: TemplateStringsArray, ...props: any) => [x, ...props].join(''),
});

export const LanguageContextProvider = ({ children }: any) => {
  const [state, setState] = useState(initialState);

  const changeLanguage = (index?: number) => {
    if (!Number.isNaN(index) && index !== undefined) {
      setState({ ...state, currentLanguage: state.languages[index] });
    } else {
      const currentLangId = state.languages.indexOf(state.currentLanguage);
      setState({
        ...state,
        currentLanguage:
          currentLangId === state.languages.length - 1
            ? state.languages[0]
            : state.languages[currentLangId + 1],
      });
    }
    return index || 0;
  };

  const t = (stringsArray: TemplateStringsArray, ...props: any) => {
    const result = Array.isArray(stringsArray) ? stringsArray : [stringsArray];
    const retArray = [...result].map((x: string, y: number) => {
      const currentTranslations: any = state.currentLanguage.translation;
      const translated = currentTranslations[x] || x;
      const prop = props[y] ? currentTranslations[props[y]] || props[y] : '';
      return translated + prop;
    });
    return retArray.join('');
  };

  return (
    <LanguageContext.Provider value={{ ...state, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => useContext(LanguageContext);
