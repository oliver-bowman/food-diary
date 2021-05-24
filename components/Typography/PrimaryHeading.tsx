import { Heading, forwardRef, HeadingProps, useColorModeValue } from "@chakra-ui/react";
import React from "react";

export const PrimaryHeading = forwardRef<HeadingProps, typeof Heading>((props, ref) => {
  return <Heading ref={ref} color={useColorModeValue("pink.600", "pink.200")} {...props}>🍳 Breakfast</Heading>
});
