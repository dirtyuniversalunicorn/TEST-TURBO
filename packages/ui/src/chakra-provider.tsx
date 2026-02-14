"use client"

import {
  ChakraProvider as DefaultChakraProvider,
  defaultSystem,
} from "@chakra-ui/react";
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "../src/components/ui/color-mode";

export function ChakraProvider(props: ColorModeProviderProps) {
  return (
    <DefaultChakraProvider value={defaultSystem}>
      <ColorModeProvider {...props} />
    </DefaultChakraProvider>
  );
}
