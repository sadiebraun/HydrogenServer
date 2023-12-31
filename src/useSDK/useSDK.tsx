import React, { useMemo } from "react";
import Translationary from "translationary";

import Loader from "../Loader";
import RemoteWrapper from "../RemoteWrapper";
import ErrorBoundary from "../ErrorBoundary";

import translations from "../translations";
import { shopifyFetch } from "./shopify-client";

import type { SDKObject } from "./useSDK.types"

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
        onLanguageChange: (lang: string) => setCurrentLanguage(lang),
        formatter: (a: string) => a
      }),
    []
  );

  /**
   *
   */
  const scopedT = useMemo(() =>
    Object.assign((key: string, props: Record<string, unknown>) => t(`${activePage}.${key}`, props), t),
    [activePage, t]
  );

  const SDK = {
    components: {},
    scopedT,
    setActivePage,
    shopifyFetch,
    t
  };

  const WrappedLoader = (): React.ReactNode => (<Loader SDK={SDK} />);
  const WrappedRemoteWrapper = ({children}: {children: React.ReactNode}): React.ReactNode => (
    <RemoteWrapper SDK={SDK} >
      {children}
    </RemoteWrapper>
  );

  SDK.components = {
    ErrorBoundary,
    Loader: WrappedLoader,
    RemoteWrapper: WrappedRemoteWrapper
  };

  /**
   *
   */
  return SDK;
};

export default useSDK;
