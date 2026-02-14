import { Button, Drawer as ChakraDrawer, CloseButton, Portal } from "@chakra-ui/react";

export const Drawer = () => {
  return (
    <ChakraDrawer.Root>
      <ChakraDrawer.Trigger asChild>
        <Button variant="outline" size="sm">
          Detail
        </Button>
      </ChakraDrawer.Trigger>
      <Portal>
        <ChakraDrawer.Backdrop />
        <ChakraDrawer.Positioner>
          <ChakraDrawer.Content>
            <ChakraDrawer.Header>
              <ChakraDrawer.Title>Objednávka XX-YYY-ZZZ</ChakraDrawer.Title>
            </ChakraDrawer.Header>
            <ChakraDrawer.Body>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </ChakraDrawer.Body>
            <ChakraDrawer.Footer>
              <Button variant="outline">Cancel</Button>
              <Button>Save</Button>
            </ChakraDrawer.Footer>
            <ChakraDrawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </ChakraDrawer.CloseTrigger>
          </ChakraDrawer.Content>
        </ChakraDrawer.Positioner>
      </Portal>
    </ChakraDrawer.Root>
  );
};
