import React from "react";

import useStyles from "./Loader.styles";

import type { ServerComponentProps, SDKObject } from "../useSDK/useSDK.types";

/**
 *
 * @param param0
 * @returns
 */
const Loader = ({ SDK }: ServerComponentProps) => {
  const classes = useStyles();
  console.log(SDK);

  return (
    <div className={classes.ring}>
      <span></span>
    </div>
  );
};

export default Loader;
