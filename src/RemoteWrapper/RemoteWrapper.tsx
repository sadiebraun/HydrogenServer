import React, { Suspense } from "react";

import ErrorBoundary from "../ErrorBoundary";
import Loader from "../Loader";

import type { SDKObject } from "../useSDK/useSDK.types";
/**
 *
 * @param param0
 * @returns
 */
const RemoteWrapper = ({
  children,
  SDK
}: { children: React.ReactNode, SDK: SDKObject }): React.ReactNode => (
  <Suspense fallback={<Loader SDK={SDK} />}>
    <ErrorBoundary>
      <div style={{transform: "rotate(0deg)"}}>
        {children}
      </div>
    </ErrorBoundary>
  </Suspense>
);

export default RemoteWrapper;
