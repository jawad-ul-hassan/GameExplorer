import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.png';
import ColorModeSwitch from './ColorModeSwitch';

const Navbar = () => {
  return (
    <HStack
      justifyContent="space-between"
      boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
      paddingX={5}
      paddingY={3}
      marginBottom={8}
    >
      <Image src={logo} boxSize="50px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
