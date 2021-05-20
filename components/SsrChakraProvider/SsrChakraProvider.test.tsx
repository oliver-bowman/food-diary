import { Theme, useTheme } from "@chakra-ui/react";
import React, { FC } from "react";
import { render } from "test-utils";
import { SsrChakraProvider } from "./SsrChakraProvider";

it("should set the default colorScheme to purple", () => {
  let theme: Theme;

  const LoadTheme: FC = () => {
    theme = useTheme();
    return <></>;
  };

  render(
    <SsrChakraProvider cookies="">
      <LoadTheme />
    </SsrChakraProvider>
  );

  expect(theme.components.Button.defaultProps.colorScheme).toBe("purple");
});