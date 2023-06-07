import { Box, Image } from '@chakra-ui/react';
import logo from '../assets/logo.png';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box
      boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
      padding={3}
      marginBottom={8}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      columnGap="15px"
    >
      <Link to="/">
        <Image
          src={logo}
          boxSize={{
            base: '40px',
            md: '50px',
          }}
        />
      </Link>
      <Box flex="1">
        <SearchInput />
      </Box>
      <ColorModeSwitch />
    </Box>
  );
};

export default Navbar;
