import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { 
  Flex, 
  Heading, 
  Spacer, 
  HStack, 
  Button, 
  Avatar, 
  IconButton, 
  Text, 
  Menu, 
  MenuButton, 
  MenuList, 
  MenuItem, 
  Badge 
} from '@chakra-ui/react';
import { BellIcon, ChevronDownIcon } from '@chakra-ui/icons';

export const Navbar = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/courses');
        const courseData = response.data?.data?.courses || [];
        setCourses(courseData);
      } catch (error) {
        console.error('Error fetching courses:', error);
        setCourses([]); 
      }
    };

    fetchCourses();
  }, []);

  return (
    <Flex 
      as="nav" 
      p="8px" 
      alignItems="center" 
      bg="white" 
      boxShadow="sm" 
      px={6} 
      mb={6}
      gap="10px"
      position="fixed" 
      top="0"
      right="0"
      width="100%" 
      zIndex={1000}
    >
      <Heading as="h1" m="auto" size={{md:'md',base:'sm'}} color="teal.500" >
        Kolo Temari
      </Heading>
      <Spacer />

      {/* Course Hover Menu */}
      <Menu trigger="hover">
        <MenuButton 
          as={Button} 
          variant="ghost" 
          fontSize="sm"
          padding="4px 8px" 
          height="40px" 
          minW="fit-content" 
          display={{md:'flex',base:'none'}}
          alignItems="center"
          justifyContent="center"
          rightIcon={<ChevronDownIcon ml="2px" />}
        >
          Courses
        </MenuButton>
        <MenuList padding="0" minW="120px">
          {courses.map((course) => (
            <MenuItem key={course._id} fontSize="sm" py="4px" px="10px">
              {course.title}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>

      <Spacer />

      <HStack spacing="16px">
        <Menu>
          <MenuButton 
            as={Button} 
            variant="ghost" 
            fontSize="sm" 
            padding="4px 8px" 
            height="32px" 
            minW="fit-content" 
            display="flex" 
            alignItems="center"
            justifyContent="center"
            rightIcon={<ChevronDownIcon ml="2px" />}
          >
            Lan
          </MenuButton>
          <MenuList padding="0" minW="120px">
            <MenuItem fontSize="sm" py="4px" px="10px">English</MenuItem>
            <MenuItem fontSize="sm" py="4px" px="10px">Spanish</MenuItem>
            <MenuItem fontSize="sm" py="4px" px="10px">French</MenuItem>
            <MenuItem fontSize="sm" py="4px" px="10px">German</MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton 
            as={Button} 
            variant="ghost" 
            fontSize="sm" 
            padding="4px 8px" 
            height="32px" 
            minW="fit-content" 
            display="flex" 
            alignItems="center"
            justifyContent="center"
            rightIcon={<ChevronDownIcon ml="2px" />}
          >
            Info
          </MenuButton>
          <MenuList padding="0" minW="120px">
            <MenuItem fontSize="sm" py="4px" px="10px">Help Center</MenuItem>
            <MenuItem fontSize="sm" py="4px" px="10px">Blog</MenuItem>
            <MenuItem fontSize="sm" py="4px" px="10px">Careers</MenuItem>
          </MenuList>
        </Menu>

        <Flex position="relative">
          <IconButton
            icon={<BellIcon />}
            aria-label="Notifications"
            variant="ghost"
            size="sm"
            fontSize="lg"
          />
          <Badge 
            colorScheme="red" 
            borderRadius="full" 
            fontSize="0.7em" 
            position="absolute" 
            top="0" 
            right="0"
          >
            2
          </Badge>
        </Flex>

        <Menu>
          <MenuButton 
            as={Button} 
            variant="ghost" 
            fontSize="sm" 
            padding="4px 8px" 
            height="32px" 
            minW="fit-content"
            rightIcon={<ChevronDownIcon ml="2px" />}
          >
            <HStack spacing="8px" alignItems="center">
              <Avatar size="sm" name="Some One" src="https://bit.ly/sage-adebayo" />
            </HStack>
          </MenuButton>
          <MenuList padding="0" minW="120px">
            <MenuItem fontSize="sm" py="4px" px="10px">Profile</MenuItem>
            <MenuItem fontSize="sm" py="4px" px="10px">Settings</MenuItem>
            <MenuItem fontSize="sm" py="4px" px="10px">Logout</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Flex>
  );
};
