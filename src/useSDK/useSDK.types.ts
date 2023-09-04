import React from "react";

import type { Translator, TranslateFunction, Translate } from "translationary";

export interface SDKObject {
  components: Record<string, React.ReactNode>;
  scopedT: ((key: string) => string) & TranslateFunction & Translate;
  setActivePage: React.Dispatch<React.SetStateAction<string>>,
  shopifyFetch: (obj: { query: string, variables: Record<string, unknown> }) => Promise<{ props: any; }>;
  t: Translator;
}
