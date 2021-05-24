import { AddIcon } from "@chakra-ui/icons";
import { HStack, VStack, Text, Button, Divider, Accordion, AccordionIcon, AccordionItem, AccordionPanel, AccordionButton, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import React from "react";
import { PageContainer, Section } from "../../../components/Layout";
import { PrimaryHeading } from "../../../components/Typography";

export default function Breakfast() {
  const { query: { date } } = useRouter();

  return (
    <PageContainer>
      <VStack align="stretch" spacing={6}>
        <HStack justifyContent="space-between">
            <PrimaryHeading>🍳 Breakfast</PrimaryHeading>
            <Text>{date}</Text>
        </HStack>

        <Section>
          <Text>Orange Juice</Text>
          <Text>500ml</Text>
          <Text>Gluten, Rabies</Text>
        </Section>

        <Section>
          <Accordion allowToggle>
            <AccordionItem border={0}>
              <AccordionButton>
                <Box flex={1} textAlign="left">
                  <Text>Apple Juice</Text>
                  <Text>500ml</Text>
                  <Text>Gluten, Rabies</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                <Text>Dehydrated Potatoes 57%, Sunflower Oil, <strong>Rice Flour</strong>, Glucose Syrup, Potato Starch, Salt, Emulsifier: Mono- and Diglycerides of Fatty Acids, Rapeseed Oil</Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Section>

        <Divider />

        <HStack justifyContent="center">
          <NextLink href={`/${date}/breakfast/add`}>
            <Button as="a" leftIcon={<AddIcon />}>Add an item</Button>
          </NextLink>
        </HStack>
      </VStack>
    </PageContainer>
  );
}
