import type { SDKObject } from "./useSDK/useSDK.types";

export interface RemoteWrapperProps {
  children: React.ReactNode;
  SDK: SDKObject;
}
