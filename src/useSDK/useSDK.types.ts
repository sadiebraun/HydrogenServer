import type { Translator } from "translationary";

export interface SDKObject {
  scopedT: (key: string) => void;
  shopifyFetch: () => Promise<boolean>;
  t: Translator;
}
