import React from "react";
import ErrorBoundary from "../ErrorBoundary";

import type { Translator, TranslateFunction, Translate } from "translationary";

export interface ServerComponentProps {
  SDK: SDKObject;
  children?: React.ReactNode;
};

export interface SDKObject {
  components: Record<string, typeof ErrorBoundary | ((props: ServerComponentProps) => React.ReactNode)>;
  scopedT: ((key: string) => string) & TranslateFunction & Translate;
  setActivePage: React.Dispatch<React.SetStateAction<string>>,
  shopifyFetch: (obj: { query: string, variables: Record<string, unknown> }) => Promise<{ props: any; }>;
  t: Translator;
}
