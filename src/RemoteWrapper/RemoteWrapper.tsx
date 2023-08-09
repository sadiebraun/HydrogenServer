import React, { Suspense } from "react";

import ErrorBoundary from "../ErrorBoundary";
import Loader from "../Loader";

import type { ServerComponentProps } from "../useSDK/useSDK.types";


/**
 *
 * @param param0
 * @returns
 */
const RemoteWrapper = ({
  children,
  SDK
}: ServerComponentProps): React.ReactNode => (
  <Suspense fallback={<Loader SDK={SDK} />}>
    <ErrorBoundary>{children}</ErrorBoundary>
  </Suspense>
);

export default RemoteWrapper;
