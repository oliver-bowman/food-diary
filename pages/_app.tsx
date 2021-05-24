import { Box } from "@chakra-ui/react";
import { Navbar } from "../components/Navbar";
import React from "react";
import { SsrChakraProvider } from "../components/SsrChakraProvider";

function MyApp({ Component, pageProps }) {
  return (
    <SsrChakraProvider {...pageProps}>
      <Box mb={69}>
        <Component {...pageProps} />
      </Box>
      <Navbar />
    </SsrChakraProvider>
  );
}

export default MyApp;
