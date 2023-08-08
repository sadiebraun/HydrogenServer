import React, { useState, Suspense } from "react";

import ErrorBoundary from "./ErrorBoundary";
import Loader from "./Loader";

import useSDK from "./useSDK";

import useStyles from "./App.styles";

import type { RemoteWrapperProps } from "./App.types";

/**
 * ts is having issue with the remote loading syntax
 * this can be revisited, there's prob a better answer
 */
// @ts-ignore
const LandingPage = React.lazy(() => import("TeamOne/LandingPage"));
// @ts-ignore
const TranslationToggle = React.lazy(() => import("TeamOne/TranslationToggle"));
// @ts-ignore
const OrderPage = React.lazy(() => import("TeamTwo/OrderPage"));

/**
 *
 * @param param0
 * @returns
 */
const RemoteWrapper = ({
  children,
  SDK
}: RemoteWrapperProps): React.ReactNode => (
  <Suspense fallback={<Loader {...SDK} />}>
    <ErrorBoundary>{children}</ErrorBoundary>
  </Suspense>
);

/**
 *
 * @returns
 */
const App = (): React.ReactNode => {
  const [activePage, setActivePage] = useState<string>("LANDING_PAGE");
  const [, setCurrentLanguage] = useState<string>("LANDING_PAGE");

  const classes = useStyles();
  const SDK = useSDK(activePage, setCurrentLanguage);

  const { t } = SDK;

  return (
    <div className={classes.wrapper}>
      <div className={classes.nav}>
        <h1>
          {t(`${activePage}.HEADER`)}
          {t("NAV.ACTIVE_LABEL")}
        </h1>
        <TranslationToggle {...SDK} />
        <div>
          <a
            className={`${classes.link} ${
              activePage === "LANDING_PAGE"
                ? classes.activePage
                : classes.inactivePage
            }`}
            onClick={() => setActivePage("LANDING_PAGE")}
          >
            {t("LANDING_PAGE.HEADER")}
          </a>
          <a
            className={`${classes.link} ${
              activePage === "ORDER_PAGE"
                ? classes.activePage
                : classes.inactivePage
            }`}
            onClick={() => setActivePage("ORDER_PAGE")}
          >
            {t("ORDER_PAGE.HEADER")}
          </a>
        </div>
      </div>
      <div className={classes.content}>
        <RemoteWrapper SDK={SDK}>
          {activePage === "LANDING_PAGE" && <LandingPage {...SDK} />}
          {activePage === "ORDER_PAGE" && <OrderPage {...SDK} />}
        </RemoteWrapper>
      </div>
    </div>
  );
};

export default App;
