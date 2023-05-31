import { HStack, Switch, Text, useColorMode, Show } from '@chakra-ui/react';

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === 'dark'}
        onChange={toggleColorMode}
      />
      <Show above="sm">
        <Text whiteSpace="nowrap">Dark mode</Text>
      </Show>
    </HStack>
  );
};

export default ColorModeSwitch;
