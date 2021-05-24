import { DarkMode, LightMode } from "@chakra-ui/color-mode";
import React from "react";
import { render, screen } from "test-utils";
import { ThemeToggle } from "./ThemeToggle";

it("should be checked when in dark theme", async () => {
  render(
    <DarkMode>
      <ThemeToggle />
    </DarkMode>
  );

  const checkbox = await screen.findByRole("checkbox");
  expect(checkbox).toBeChecked();
});

it("should be unchecked when in light theme", async () => {
  render(
    <LightMode>
      <ThemeToggle />
    </LightMode>
  );

  const checkbox = await screen.findByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});
