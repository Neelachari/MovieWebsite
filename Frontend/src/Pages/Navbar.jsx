import {
    Avatar,
    Box,
    Flex,
    Icon,
    Text,
    Stack,
    Image,
    Button,
    Heading,
    Drawer,
    DrawerContent,
    IconButton,
    useDisclosure,
    DrawerOverlay,
    useColorModeValue
  } from '@chakra-ui/react';
  // Here we have used react-icons package for the icons
  import { FaBell } from 'react-icons/fa';
  import { AiOutlineTeam, AiOutlineHome } from 'react-icons/ai';
  import { BsFolder2, BsCalendarCheck } from 'react-icons/bs';
  import { FiMenu } from 'react-icons/fi';
  import { RiFlashlightFill } from 'react-icons/ri';
  import { FaRegCircleUser } from "react-icons/fa6"
  import { CiSearch } from "react-icons/ci"
  import { GoHomeFill } from "react-icons/go";
  import { LiaTvSolid } from "react-icons/lia"
  import { PiFilmSlateFill } from "react-icons/pi"
  import { MdSportsVolleyball } from "react-icons/md"
  import { BiSolidCategory } from "react-icons/bi"
  import {Link} from "react-router-dom"
  import "./Navbar.css"

  export default function Navbar() {
    const { isOpen, onClose, onOpen } = useDisclosure();
  
    return (
      <Box as="section" bg={useColorModeValue('gray.50', 'gray.700')}    height={"0px"} mr={"0px"}  >
        <SidebarContent display={{ base: 'none', md: 'unset' }} />
        <Drawer isOpen={isOpen} onClose={onClose} placement="left">
          <DrawerOverlay />
          <DrawerContent>
            <SidebarContent w="full" borderRight="none" />
          </DrawerContent>
        </Drawer>

        {/* <Flex 
            as="header"
            // align="center"
            w="100%"
            mt={'0px'}
            ml={"11%"}
            px="0"
            d={{ base: 'flex', md: 'none' }}
            // borderBottomWidth="1px"
            borderColor={useColorModeValue('inherit', 'gray.700')}
            bg={useColorModeValue('black', 'gray.300')}
            justifyContent={{ base: 'space-between', md: 'flex-end' }}
            // boxShadow="lg"
            h="14"
            style={{border :"3px solid red"}}
            
          > */}
            
            <IconButton
              aria-label="Menu"
              display={{ base: 'inline-flex', md: 'none' }}
              onClick={onOpen}
              icon={<FiMenu />}
              size="md"
              color={"white"}
              // border={"3px solid cyan"}
              bg={"rgba(66, 153, 225, 0.6)"}
            />
          


          {/* </Flex> */}
        
      </Box>
    );
  }
  
  const SidebarContent = ({ ...props }) => (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      
      zIndex="sticky"
      h="full"
      pb="10px"
      overflowX="hidden"
      overflowY="auto"
      bg={useColorModeValue('black', 'gray.100')}
      borderColor={useColorModeValue('inherit', 'gray.1000')}
      // borderRightWidth="0.5px"
      // borderRight={"1px solid gray"}
      // w="12%"
      mr={"0px"}
      
      // DrawerOverlay="20px"
      {...props}
    >
      
      <Flex px="4" py="5" align="center" >
       
        <Text
          fontSize="2xl"
          ml="2"
          color={useColorModeValue('brand.500', 'black')}
          fontWeight="semibold"
        >
          <Image
                alt="Homepage Image"
                objectFit="cover"
                width="60px"
                src="https://img.hotstar.com/image/upload/v1656431456/web-images/logo-d-plus.svg"
              />
        </Text>
      </Flex>
      <Flex direction="column" as="nav" fontSize="md" color="gray.600" mt="30px" aria-label="Main Navigation" pb="15px"  box-shadow ='rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;' >
      
        <Link to="/Login">
        <NavItem  icon={FaRegCircleUser}>My Space</NavItem>
        </Link>
        <Link to="/explore">
        <NavItem  icon={CiSearch}>Search</NavItem>
        </Link>
        <Link to="/">
        <NavItem  icon={GoHomeFill}>Home</NavItem>
        </Link>
        <Link to="/shows">
        <NavItem  icon={LiaTvSolid}>TV</NavItem>
        </Link>
        <Link to="/movies">
        <NavItem  icon={PiFilmSlateFill}>Movies</NavItem>
        </Link>
        <Link to="/">
        <NavItem  icon={MdSportsVolleyball}>Sports</NavItem>
        </Link>
        <Link to="/categories">
        <NavItem  icon={BiSolidCategory}>Categories</NavItem>
        </Link>
      </Flex>
      
    </Box>
  );
  
  const NavItem = (props) => {
    const color = useColorModeValue('gray.600', 'gray.300');
  
    const { icon, children } = props;
    console.log(icon, children, "from me")
    return (
      <Box>
      <Flex
        align="center"
        px="4"
        py="3"
        cursor="pointer"
        role="group"
        fontWeight="semibold"
        transition=".15s ease"
        color={useColorModeValue('inherit', 'gray.400')}
        _hover={{
          bg: useColorModeValue('gray.900', 'gray.900'),
          color: useColorModeValue('white', 'white.200'),
          
          
        }}
      >
        {icon && (
          <Icon
            mx="3"
            boxSize="5"
            _groupHover={{
              color: color
            }}
            as={icon}
          />
          
        )}
      <Box className="hidden-text">{children}</Box>
      </Flex>
      </Box>
    );
  };