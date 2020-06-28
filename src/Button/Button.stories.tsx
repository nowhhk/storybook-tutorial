import React from "react";
import Button from "./Button";
import styled from "styled-components";
import { action } from "@storybook/addon-actions";

export default {
  title: "components|Button",
  component: Button,
};

export const button = () => {
  return <Button>BUTTON</Button>;
};

button.story = {
  name: "Default",
};

export const primaryButton = () => {
  return <Button onClick={action("onClick")}>PRIMARY</Button>;
};

export const secondaryButton = () => {
  return (
    <Button onClick={action("onClick")} theme="secondary">
      SECONDARY
    </Button>
  );
};

export const tertiaryButton = () => {
  return (
    <Button onClick={action("onClick")} theme="tertiary">
      TERTIARY
    </Button>
  );
};
