import React, { useState, useEffect } from 'react';
import { SimpleGrid, HStack, Box, Text, Image, Stack, Button, Flex, Popover, PopoverTrigger, PopoverContent, PopoverBody, PopoverArrow } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

export const RelatedCourse = ({ isSidebarCollapsed }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch related courses data from API
    const fetchCourses = async () => {
      // Replace with your API call
      // const response = await fetchRelatedCourses();
      // setCourses(response.data);
      
      // Sample data
      setCourses([
        { id: 1, title: 'Introduction to Javascript', description: 'Description for Course 1', imageUrl: 'https://firebasestorage.googleapis.com/v0/b/kolo-temari.appspot.com/o/uploads%2Fmine.jpg1724918683266?alt=media&token=3da7b9b5-b8ae-4b4a-a640-c8bb5b358e73', price: '$99', rating: 4.5, category: 'Development' },
        { id: 2, title: 'Introduction to Javascript 2', description: 'Description for Course 2', imageUrl: 'https://via.placeholder.com/150', price: '$199', rating: 3.8, category: 'Design' },
        { id: 3, title: 'Introduction to Javascript 3', description: 'Description for Course 3', imageUrl: 'https://via.placeholder.com/150', price: '$299', rating: 4.7, category: 'Marketing' },
        { id: 4, title: 'Introduction to Javascript 4', description: 'Description for Course 4', imageUrl: 'https://via.placeholder.com/150', price: '$399', rating: 4.9, category: 'Photography' },
        { id: 5, title: 'Introduction to Javascript 5', description: 'Description for Course 5', imageUrl: 'https://via.placeholder.com/150', price: '$499', rating: 4.2, category: 'Business' },
      ]);
    };

    fetchCourses();
  }, []);

  return (
    <Box p={6} >
      <Text fontSize="2xl" fontWeight="bold" mb={6}>Related Courses</Text>
      <SimpleGrid 
        columns={{ 
          base: 1, 
          sm: 2, 
          md: 3, 
          lg: isSidebarCollapsed ? 5 : 4,
          xl: isSidebarCollapsed ? 5 : 4 
        }} 
        spacing={6}
      >
        {courses.map(course => (
          <Popover key={course.id} trigger="hover" placement="auto" strategy="fixed">
            <PopoverTrigger>
              <Box 
                borderWidth="1px"
                boxShadow="sm"
                borderRadius="sm" 
                overflow="hidden" 
                transition="transform 0.3s, box-shadow 0.3s" 
                _hover={{ transform: 'scale(1.05)', boxShadow: 'lg' }}
              >
                <Image 
                  src={course.imageUrl} 
                  alt={course.title} 
                  objectFit="cover" 
                  height="150px" 
                  width="100%" 
                />
                <Stack spacing={3} p={3} >
                  <Text fontSize="lg" fontWeight="bold" noOfLines={2}>{course.title}</Text>
                  <Flex align="center" justify="space-between">
                    <HStack align="center" justifyContent="center" gap={2}>
                      <Text fontSize="sm" mb="0" fontWeight="medium" color="gray.600" >{course.rating}</Text>
                      <Flex alignItems="center" justifyContent="center">
                        {Array(5)
                          .fill('')
                          .map((_, i) => (
                            <StarIcon 
                              key={i} 
                              color={i < Math.floor(course.rating) ? 'yellow.400' : 'gray.300'} 
                            />
                          ))}
                      </Flex>
                      
                    <Text fontSize="sm" ml={8} mb="0" color="gray.500" fontWeight="medium">{course.category}</Text>
                    </HStack>
                  </Flex>
                  <Text fontWeight="bold" style={{color:"#f68a1f"}}>{course.price}</Text>
                </Stack>
              </Box>
            </PopoverTrigger>
            <PopoverContent boxShadow="lg" p={4} borderColor="gray.200" borderRadius="0">
              <PopoverArrow />
              <PopoverBody>
                <Text fontSize="lg" fontWeight="bold" mb={2}>{course.title}</Text>
                <Text fontSize="sm" color="gray.600" mb={3}>{course.description}</Text>
                <Text fontSize="md" fontWeight="bold" color="teal.500" mb={3}>{course.price}</Text>
                <Button colorScheme="teal" variant="solid" width="full">Enroll Now</Button>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        ))}
      </SimpleGrid>
    </Box>
  );
};
