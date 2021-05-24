import React from "react";
import { PageContainer } from "../../../components/Layout";
import { AddItem } from "../../../components/AddItem";
import { HStack, Text, VStack } from "@chakra-ui/react";
import { PrimaryHeading } from "../../../components/Typography";
import { useRouter } from "next/router";

export default function Breakfast() {
  const { query: { date } } = useRouter();

  return (
    <PageContainer>
      <VStack align="stretch" spacing={6}>
        <HStack justifyContent="space-between">
          <PrimaryHeading>🍳 Breakfast</PrimaryHeading>
          <Text>{date}</Text>
        </HStack>

        <AddItem />
      </VStack>
    </PageContainer>
  );
}
