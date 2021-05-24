import { AddIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { VStack, Text, Box, HStack, IconButton, Divider } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import { PageContainer, InteractionGroup } from "../components/Layout";
import { DatePicker } from "../components/DatePicker";

export default function Home() {
  return (
    <PageContainer>
      <VStack align="stretch" spacing={6}>
        <Box>
          <DatePicker />
        </Box>
        <InteractionGroup>
          <HStack justifyContent="space-between">
            <Text>🍱 Add lunch</Text>
            <IconButton aria-label="Add a lunch item" icon={<AddIcon />} />
          </HStack>
        </InteractionGroup>
        <InteractionGroup>
          <HStack justifyContent="space-between">
            <Text>🍔 Add dinner</Text>
            <IconButton aria-label="Add a dinner item" icon={<AddIcon />} />
          </HStack>
        </InteractionGroup>
        <InteractionGroup>
          <HStack justifyContent="space-between">
            <Text>🥨 Add snack</Text>
            <NextLink href="/2021-01-01/breakfast/add">
              <IconButton aria-label="Add a snack item" icon={<AddIcon />} />
            </NextLink>
          </HStack>
        </InteractionGroup>
        <Divider />
        <InteractionGroup>
          <HStack justifyContent="space-between">
            <VStack align="stretch" spacing={1}>
              <Text>🍳 Breakfast</Text>
              <Text fontSize="xs">Gluten, Dairy</Text>
            </VStack>
            <NextLink href="/2021-01-01/breakfast">
              <IconButton as="a" aria-label="Add a breakfast item" icon={<ArrowRightIcon />} />
            </NextLink>
          </HStack>
        </InteractionGroup>
      </VStack>
    </PageContainer>
  );
}

export { getChakraSsrProps as getServerSideProps } from "../components/SsrChakraProvider";
