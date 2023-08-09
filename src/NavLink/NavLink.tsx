import React from "react";

import type { NavLinkProps } from "./NavLink.types";

/**
 *
 * @param param0
 * @returns
 */
const NavLink = ({t, classes, page, activePage, setActivePage}: NavLinkProps) => {
  return (
    <a
      className={`${classes.link} ${
        activePage === page
          ? classes.activePage
          : classes.inactivePage
      }`}
      onClick={() => setActivePage(page)}
    >
      {t(`${page}.HEADER`)}
    </a>
  );
};

export default NavLink;
