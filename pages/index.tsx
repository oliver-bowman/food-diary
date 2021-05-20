import { AddIcon } from "@chakra-ui/icons";
import { VStack, Text, Box, HStack } from "@chakra-ui/react";
import React from "react";
import { PageContainer, Section } from "../components/Layout";
import { DatePicker } from "../components/DatePicker";

export default function Home() {
  return (
    <PageContainer>
      <VStack align="stretch" spacing={6}>
        <Box>
          <Text textAlign="center">date</Text>
          <DatePicker />
        </Box>
        <Section>
          <HStack justifyContent="space-between">
            <Text>🍳 Add breakfast</Text>
            <AddIcon />
          </HStack>
        </Section>
        <Section>
          <HStack justifyContent="space-between">
            <Text>🍱 Add lunch</Text>
            <AddIcon />
          </HStack>
        </Section>
        <Section>
          <HStack justifyContent="space-between">
            <Text>🍔 Add dinner</Text>
            <AddIcon />
          </HStack>
        </Section>
        <Section>
          <HStack justifyContent="space-between">
            <Text>🥨 Add snack</Text>
            <AddIcon />
          </HStack>
        </Section>
      </VStack>
    </PageContainer>
  );
}

export { getChakraSsrProps as getServerSideProps } from "../components/SsrChakraProvider";
