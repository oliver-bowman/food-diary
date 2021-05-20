import { ChakraProvider } from "@chakra-ui/react";
import React, { FC, ReactNode, ComponentType } from "react";

/**
 * Adds the default contexts and wrappers to a render
 */
export const RenderWrapper: FC<{
  Wrapper?: ComponentType<unknown>;
  setDefaultContext?: boolean;
}> = ({ children, ...props }) => {
  let wrapped: ReactNode = children;
  if (props.Wrapper) {
    wrapped = <props.Wrapper {...props}>{children}</props.Wrapper>;
  }

  if (props.setDefaultContext === false) {
    return <>{wrapped}</>;
  }

  return (
      <ChakraProvider>{wrapped}</ChakraProvider>
  );
};