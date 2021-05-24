import {
  ChakraProvider,
  ChakraProviderProps,
  cookieStorageManager,
  extendTheme,
  localStorageManager,
  withDefaultColorScheme,
} from "@chakra-ui/react";

export interface SsrChakraProviderProps extends Omit<ChakraProviderProps, "colorModeManager"> {
  cookies: string | undefined;
}

export const SsrChakraProvider = ({ cookies, ...props }: SsrChakraProviderProps) => {
  cookies = cookies ?? (typeof window !== "undefined" && window.document?.cookie);

  const colorModeManager = typeof cookies === "string" ? cookieStorageManager(cookies) : localStorageManager;

  const theme = extendTheme(withDefaultColorScheme({ colorScheme: "pink" }));

  return <ChakraProvider theme={theme} colorModeManager={colorModeManager} {...props} />;
};
