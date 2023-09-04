import React from "react";


/**
 * This file represents whatever way we may have to catalog our remote
 * sources. Combining this and the references in the webpack.config into
 * some remote json file to be retrieved on build may be possible
 */


/**
 * ts is having issue with the remote loading syntax
 * this can be revisited, there's prob a better answer
 */
// @ts-ignore
export const LandingPage = React.lazy(() => import("TeamOne/LandingPage"));
// @ts-ignore
export const TranslationToggle = React.lazy(() => import("TeamOne/TranslationToggle"));
// @ts-ignore
export const MenuPage = React.lazy(() => import("TeamTwo/MenuPage"));

export const defaultPage = "LANDING_PAGE";

const pages = {
  "LANDING_PAGE": LandingPage,
  "MENU_PAGE": MenuPage,
};

export default pages;
