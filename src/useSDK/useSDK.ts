import React, { useMemo } from "react";
import Translationary from "translationary";
import translations from "../translations";

import type { SDKObject } from "./useSDK.types";

const shopifyFetch = (): Promise<boolean> => {
  console.log("this could have been a pre-authorized fetch to shopify.");

  return Promise.resolve(true);
};

const useSDK = (
  activePage: string,
  setCurrentLanguage: React.Dispatch<React.SetStateAction<string>>
): SDKObject => {
  /**
   *
   */
  const t = useMemo(
    () =>
      new Translationary({
        appName: "sdk",
        fetchTranslations: ({ lang }) => translations[lang],
        lang: "en",
        onLanguageChange: (lang) => setCurrentLanguage(lang)
      }),
    []
  );

  /**
   *
   */
  const scopedT = useMemo(() => {
    const tt = (key: string) => t(`${activePage}.${key}`);

    Object.keys(t).forEach((prop) => {
      tt[prop] = t[prop];
    });

    return tt;
  }, [activePage, t]);

  /**
   *
   */
  return {
    scopedT,
    t,
    shopifyFetch
  };
};

export default useSDK;
