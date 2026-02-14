import { Flex, type FlexProps, Image } from "@chakra-ui/react";
import { Drawer } from "./drawer";

export const Header = (props: FlexProps) => {
  return (
    <Flex
      as="header"
      width={{ base: "100%" }}
      justifyContent="space-between"
      backgroundColor="orange"
      {...props}
    >
      <Image src="https://placehold.co/120x40?text=My+Logo" alt="Dummy logo" />
      <Drawer />
    </Flex>
  );
};
