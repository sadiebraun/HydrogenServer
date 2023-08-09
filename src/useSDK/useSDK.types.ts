import React from "react";
import type { Translator, TranslateFunction, Translate } from "translationary";
import ErrorBoundary from "../ErrorBoundary";

export interface ServerComponentProps {
  SDK: SDKObject;
  children?: React.ReactNode;
};

export interface SDKObject {
  components: Record<string, typeof ErrorBoundary | ((props: ServerComponentProps) => React.ReactNode)>;
  scopedT: ((key: string) => string) & TranslateFunction & Translate;
  setActivePage: React.Dispatch<React.SetStateAction<string>>,
  shopifyFetch: () => Promise<boolean>;
  t: Translator;
}
