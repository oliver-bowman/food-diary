import { HStack, StackProps, Switch, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { FC } from "react";

export const ThemeToggle: FC<StackProps> = (props) => {
  const { toggleColorMode } = useColorMode();

  return (
    <HStack {...props}>
      <SunIcon />
      <Switch isChecked={useColorModeValue(false, true)} onChange={() => toggleColorMode()} />
      <MoonIcon />
    </HStack>
  );
};
