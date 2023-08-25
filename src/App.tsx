import React, { useMemo, useState } from "react";

import RemoteWrapper from "./RemoteWrapper";
import NavLink from "./NavLink";
import pages, { defaultPage, TranslationToggle } from "./externalComponents";
import useSDK from "./useSDK";

import useStyles from "./App.styles";

/**
 *
 * @returns
 */
const App = (): React.ReactNode => {
  const [activePage, setActivePage] = useState<string>(defaultPage);
  const [, setCurrentLanguage] = useState<string | null>(null);

  const classes = useStyles();
  const SDK = useSDK(activePage, setCurrentLanguage, setActivePage);
  const ActivePage = useMemo(() => pages[activePage as keyof typeof pages], [activePage]);

  const { t } = SDK;


  return (
    <div className={classes.wrapper}>
      <div className={classes.nav}>
        <h1>
          {t(`${activePage}.HEADER`)}
          {t("NAV.ACTIVE_LABEL")}
        </h1>
        <RemoteWrapper SDK={SDK}>
          <TranslationToggle {...SDK} />
        </RemoteWrapper>
        <div>
          {Object.keys(pages).map((page, i) => (
            <NavLink key={i} t={t} classes={classes} page={page} activePage={activePage} setActivePage={setActivePage} />
          ))}
        </div>
      </div>
      <div className={classes.content}>
        <RemoteWrapper SDK={SDK}>
          <ActivePage {...SDK} />
        </RemoteWrapper>
      </div>
    </div>
  );
};

export default App;
