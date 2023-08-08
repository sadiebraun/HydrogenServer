import React from "react";

import useStyles from "./Loader.styles";

import type { SDKObject } from "../useSDK/useSDK.types";

/**
 *
 * @param param0
 * @returns
 */
const Loader = (props: SDKObject) => {
  const classes = useStyles();
  console.log(props);

  return (
    <div className={classes.ring}>
      <span></span>
    </div>
  );
};

export default Loader;
