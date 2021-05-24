import { Button, Select, FormControl, FormLabel, HStack, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, VStack, Heading } from "@chakra-ui/react";
import React, { FC, useCallback } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { InteractionGroup, Section } from "../Layout";

interface FoodItem {
  foodName: string;
  allergens: string;
  quantity: number;
}

export const AddItem: FC = () => {
  const { register, handleSubmit, setValue } = useForm<FoodItem>({ defaultValues: { foodName: "", allergens: "", quantity: 1 }});

  const onSubmit: SubmitHandler<FoodItem> = useCallback((data: FoodItem) => {
    console.log(data);
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InteractionGroup>
        <VStack spacing={4} align="stretch">
          <FormControl>
            <FormLabel htmlFor="foodName">Food Name</FormLabel>
            <Input {...register("foodName", { required: true })} placeholder="Orange juice" />
          </FormControl>
          <FormControl>
          <FormLabel htmlFor="allergens">Allergens</FormLabel>
            <Select {...register("allergens", { required: true })} placeholder="Select allergen">
              <option value="Celery">Celery</option>
              <option value="Crustaceans ">Crustaceans </option>
              <option value="Dairy">Dairy</option>
              <option value="Eggs">Eggs</option>
              <option value="Fish">Fish</option>
              <option value="Gluten">Gluten</option>
              <option value="Lupin">Lupin</option>
              <option value="Molluscs">Molluscs</option>
              <option value="Mustard">Mustard</option>
              <option value="Nuts">Nuts</option>
              <option value="Peanuts">Peanuts</option>
              <option value="Sesame seeds">Sesame seeds</option>
              <option value="Soya">Soya</option>
              <option value="Sulphur dioxide">Sulphur dioxide</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="quantity">Quantity</FormLabel>
            <NumberInput {...register("quantity", { required: true })} defaultValue={1} min={1} onChange={(_, value) => setValue("quantity", value)}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <HStack spacing={2}>
            <Button variant="ghost" mr={3} onClick={() => undefined}>
              Go back
            </Button>
            <Button type="submit">Save</Button>
          </HStack>
        </VStack>
      </InteractionGroup>
    </form>
  );
}
