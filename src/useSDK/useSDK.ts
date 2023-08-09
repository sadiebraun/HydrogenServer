import React, { useMemo } from "react";
import Translationary from "translationary";

import Loader from "../Loader";
import RemoteWrapper from "../RemoteWrapper";
import ErrorBoundary from "../ErrorBoundary";

import translations from "../translations";

import type { SDKObject } from "./useSDK.types";

const shopifyFetch = (): Promise<boolean> => {
  console.log("this could have been a pre-authorized fetch to shopify.");

  return Promise.resolve(true);
};

/**
 *
 * @param activePage
 * @param setCurrentLanguage
 * @returns
 */
const useSDK = (
  activePage: string,
  setCurrentLanguage: React.Dispatch<React.SetStateAction<string | null>>,
  setActivePage: React.Dispatch<React.SetStateAction<string>>
): SDKObject => {
  /**
   *
   */
  const t = useMemo(
    () =>
      new Translationary({
        appName: "sdk",
        fetchTranslations: ({ lang }: { lang: string }) => translations[lang as keyof typeof translations],
        lang: "en",
        onLanguageChange: (lang: string) => setCurrentLanguage(lang)
      }),
    []
  );

  /**
   *
   */
  const scopedT = useMemo(() =>
    Object.assign((key: string) => t(`${activePage}.${key}`), t),
    [activePage, t]
  );

  /**
   *
   */
  return {
    components: {
      ErrorBoundary,
      Loader,
      RemoteWrapper
    },
    scopedT,
    setActivePage,
    shopifyFetch,
    t
  };
};

export default useSDK;
