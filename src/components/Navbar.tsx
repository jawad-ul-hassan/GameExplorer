import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.png';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

const Navbar = () => {
  return (
    <HStack
      boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
      paddingX={5}
      paddingY={3}
      marginBottom={8}
      spacing={5}
    >
      <Image
        src={logo}
        boxSize={{
          base: '40px',
          md: '50px',
        }}
      />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
