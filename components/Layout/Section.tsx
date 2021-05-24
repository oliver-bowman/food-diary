import { Box, BoxProps, forwardRef, useColorModeValue } from "@chakra-ui/react";

export interface SectionProps extends BoxProps {
  opaque?: boolean;
}

export const Section = forwardRef<SectionProps, typeof Box>(({ opaque, ...props }, ref) => {
  const bg = useColorModeValue(opaque ? "white" : "whiteAlpha.900", opaque ? "black" : "blackAlpha.700");

  return (
    <Box borderRadius="3xl" borderWidth="1px" p={6} boxShadow="md" background={bg} ref={ref} {...props}>
      {props.children}
    </Box>
  );
});
