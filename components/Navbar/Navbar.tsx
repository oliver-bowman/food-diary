import { Box, HStack, useColorModeValue } from "@chakra-ui/react"
import React from "react"
import { ThemeToggle } from "../ThemeToggle";

export const Navbar = () => {
  return (
    <Box background={useColorModeValue("white", "black")} p={6} boxShadow="inner" position="fixed" zIndex={1} bottom={0} width="100%">
      <HStack justifyContent="space-between">
        <Box></Box>
        <ThemeToggle />
      </HStack>
    </Box>
  );
}
