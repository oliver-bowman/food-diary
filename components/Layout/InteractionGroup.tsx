import { forwardRef } from "@chakra-ui/react";
import { Section, SectionProps } from "./Section";

export const InteractionGroup = forwardRef<SectionProps, typeof Section>(({ ...props }, ref) => {
  return (
    <Section boxShadow="inner" ref={ref} {...props} />
  );
});
