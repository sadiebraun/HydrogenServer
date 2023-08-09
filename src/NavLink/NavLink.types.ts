import React from "react";

import type { Classes } from "jss";
import type { Translator } from "translationary";

export interface NavLinkProps {
  t: Translator;
  classes: Classes,
  activePage: string;
  page: string;
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
}
