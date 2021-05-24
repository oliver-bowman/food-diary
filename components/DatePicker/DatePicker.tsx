import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { HStack, IconButton, Text } from "@chakra-ui/react";
import React, { FC, useState } from "react"
import dayjs from "dayjs";

export const DatePicker: FC = () => {
  const [date, setDate] = useState(() => dayjs().startOf('day'));

  return (
    <HStack px={6} justifyContent="space-between">
      <IconButton aria-label="Previous date" icon={<ArrowLeftIcon />} onClick={() => setDate(d => d.add(-1, 'day'))} />
      <Text>{date.format("DD/MM/YYYY")}</Text>
      <IconButton aria-label="Next date" icon={<ArrowRightIcon />} onClick={() => setDate(d => d.add(1, 'day'))} />
    </HStack>
  );
}