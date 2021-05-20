import React, { FC } from "react";
import { render as reactRender } from "@testing-library/react";
import { RenderWrapper } from "./RenderWrapper";

export * from "@testing-library/react";

type ReactRenderOptions = Parameters<typeof reactRender>["1"];

export interface RenderOptions extends ReactRenderOptions {
  /**
   * Whether to wrap the rendered element in global contexts like ChakraProvider and QueryProvider.
   * Defaults to true
   */
  setDefaultContext?: boolean;
}

export const render = (element: React.ReactElement, options?: RenderOptions) => {
  const wrapper: FC = ({ children, ...props }) => {
    return (
      <RenderWrapper {...props} setDefaultContext={options?.setDefaultContext} Wrapper={options?.wrapper}>
        {children}
      </RenderWrapper>
    );
  };

  return reactRender(element, { ...(options ?? {}), wrapper });
};