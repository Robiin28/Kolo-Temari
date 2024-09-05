import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  Flex,
  Grid,
  Heading,
  IconButton,
  Input,
  Select,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlus, faStar, faStarHalfAlt, faClock, faList, faHeart, faUnlock } from '@fortawesome/free-solid-svg-icons';
const mockCourses = [
  {
    id: 1,
    image: 'https://firebasestorage.googleapis.com/v0/b/kolo-temari.appspot.com/o/uploads%2Fmine.jpg1724918683266?alt=media&token=3da7b9b5-b8ae-4b4a-a640-c8bb5b358e73',
    category: 'Environmental Science',
    title: 'Race and Culture',
    duration: '1 month',
    status: 'Free',
    description: 'Explore the intersection of race and culture through historical and contemporary lenses. This co intersection of race and culture through historical and contemporary lenses. This cou intersection of race and culture through historical and contemporary lenses. This cou intersection of race and culture through historical and contemporary lenses. This couurse covers the sociopolitical impacts and cultural shifts that have shaped our understanding of race.',
    instructor: 'Yared Ekubay',
    rating: 4.7,
  },
  {
    id: 2,
    image: '/image/kolo.png',
    category: 'Computer Science',
    title: 'Introduction to Algorithms',
    duration: '3 months',
    status: 'Paid',
    price: '$120',
    description: 'Learn the fundamental algorithms and data structures used in computer science. This course provides an in-depth understanding of algorithmic principles and practical applications.',
    instructor: 'Kirubel Tesfaw',
    rating: 4.5,
  },
  {
    id: 3,
    image: '/image/kolo.png',
    category: 'Art',
    title: 'Digital Painting Basics',
    duration: '2 months',
    status: 'Subscription Only',
    price: '$30/month',
    description: 'A beginner’s guide to digital painting, focusing on the basics of tools, techniques, and creating digital artwork. This course covers essential skills for budding digital artists.',
    instructor: 'Beakal Zelealem',
    rating: 4.0,
  },
  {
    id: 4,
    image: '/image/kolo.png',
    category: 'Mathematics',
    title: 'Advanced Calculus',
    duration: '4 months',
    status: 'Free',
    description: 'Dive into advanced calculus topics including multivariable calculus, differential equations, and complex analysis. This course is designed for students seeking to deepen their mathematical knowledge.',
    instructor: 'Yared Ekubay',
    rating: 4.2,
  },
  {
    id: 5,
    image: '/image/kolo.png',
    category: 'Biology',
    title: 'Genetics 101',
    duration: '6 months',
    status: 'Paid',
    priceAmount: '$150',
    description: 'Understand the fundamental principles of genetics including DNA structure, gene expression, and genetic variation. This course provides a comprehensive overview of genetic concepts and their applications.',
    instructor: 'Kirubel Tesfaw',
    rating: 4.6,
  },
];

export const CourseTable = () => {
  const [isDisplayCatagory, setIsDisplayCatagory] = useState(true);
  const [isDisplayStatus, setIsDisplayStatus] = useState(true);
  const [isDisplayLevel, setIsDisplayLevel] = useState(true);
  const [isDisplayRating, setIsDisplayRating] = useState(true);
  const [isDisplayInstructors, setIsDisplayInstructors] = useState(true);
  const [isDisplayPrice, setIsDisplayPrice] = useState(true);
  const [course, setCourse] = useState(mockCourses)
  const [selectedValue, setSelectedValue] = useState('Release date (Newest First)');
  const sortOptions = [
    { value: 'newest', viewValue: 'Release date (Newest First)' },
    { value: 'oldest', viewValue: 'Release date (Oldest First)' },
  ];

  return (
    <Container maxW="container" py={4}>
      <Stack spacing={4}>
        {/* Header Section */}
        <Flex justify="space-between" align="center">
          <Heading as="h1" fontWeight="bold">Course</Heading>
          <Flex align="center">
            <Input placeholder="Search Courses" variant="outline" w="300px" />
            <IconButton
              aria-label="Search"
              icon={<FontAwesomeIcon icon={faSearch} />}
              colorScheme="blue"
              ml={2}
            />
          </Flex>
        </Flex>

        {/* Sort Section */}
        <Flex mb={4} >
          <Text mr={2}>Sort By:</Text>
          <Select
            value={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
            w="auto"
          >
            {sortOptions.map((sort, index) => (
              <option key={index} value={sort.value}>
                {sort.viewValue}
              </option>
            ))}
          </Select>
        </Flex>

        {/* Filter Sections and Featured Courses */}
        <Flex spacing={4} ml={8} mr={6}>
          {/* Filter Section */}
          <Stack spacing={4} w="20%" pr={4} borderRightWidth="1px">
            {/* Categories Section */}
            <Box>
              <Button
                onClick={() => setIsDisplayCatagory(!isDisplayCatagory)}
                variant="outline"
                w="full"
                justifyContent="space-between"
              >
                Category
                <FontAwesomeIcon icon={faPlus} />
              </Button>
              {!isDisplayCatagory && (
                <Stack spacing={2} mt={2}>
                  {['Theology', 'Environmental Science', 'Computer Science', 'Art', 'Mathematics', 'Biology', 'Communication', 'Medicine', 'Physics', 'Photography', 'Pharmacy', 'Graphics Designing', 'Psychology'].map((category, index) => (
                    <Checkbox key={index}>{category}</Checkbox>
                  ))}
                </Stack>
              )}
            </Box>

            {/* Status Section */}
            <Box>
              <Button
                onClick={() => setIsDisplayStatus(!isDisplayStatus)}
                variant="outline"
                w="full"
                justifyContent="space-between"
              >
                Status
                <FontAwesomeIcon icon={faPlus} />
              </Button>
              {!isDisplayStatus && (
                <Stack spacing={2} mt={2}>
                  {['Featured', 'Hot', 'New', 'Special'].map((status, index) => (
                    <Checkbox key={index}>{status}</Checkbox>
                  ))}
                </Stack>
              )}
            </Box>

            {/* Level Section */}
            <Box>
              <Button
                onClick={() => setIsDisplayLevel(!isDisplayLevel)}
                variant="outline"
                w="full"
                justifyContent="space-between"
              >
                Level
                <FontAwesomeIcon icon={faPlus} />
              </Button>
              {!isDisplayLevel && (
                <Stack spacing={2} mt={2}>
                  {['Beginner', 'Intermediate', 'Advanced'].map((level, index) => (
                    <Checkbox key={index}>{level}</Checkbox>
                  ))}
                </Stack>
              )}
            </Box>

            {/* Rating Section */}
            <Box>
              <Button
                onClick={() => setIsDisplayRating(!isDisplayRating)}
                variant="outline"
                w="full"
                justifyContent="space-between"
              >
                Rating
                <FontAwesomeIcon icon={faPlus} />
              </Button>
              {!isDisplayRating && (
                <Stack spacing={2} mt={2}>
                  {[4.5, 4.0, 3.5, 3.0].map((rating, index) => (
                    <Checkbox key={index}>
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      {rating === 4.5 && <FontAwesomeIcon icon={faStarHalfAlt} />}
                      {rating} & up
                    </Checkbox>
                  ))}
                </Stack>
              )}
            </Box>

            {/* Instructors Section */}
            <Box>
              <Button
                onClick={() => setIsDisplayInstructors(!isDisplayInstructors)}
                variant="outline"
                w="full"
                justifyContent="space-between"
              >
                Instructor
                <FontAwesomeIcon icon={faPlus} />
              </Button>
              {!isDisplayInstructors && (
                <Stack spacing={2} mt={2}>
                  {['Kirubel Tesfaw', 'Yared Ekubay', 'Beakal Zelealem'].map((instructor, index) => (
                    <Checkbox key={index}>{instructor}</Checkbox>
                  ))}
                </Stack>
              )}
            </Box>

            {/* Price Section */}
            <Box>
              <Button
                onClick={() => setIsDisplayPrice(!isDisplayPrice)}
                variant="outline"
                w="full"
                justifyContent="space-between"
              >
                Price
                <FontAwesomeIcon icon={faPlus} />
              </Button>
              {!isDisplayPrice && (
                <Stack spacing={2} mt={2}>
                  {['Free', 'Paid', 'Subscription Only'].map((price, index) => (
                    <Checkbox key={index}>{price}</Checkbox>
                  ))}
                </Stack>
              )}
            </Box>

            {/* Show Results Button */}
            <Flex mt={4} direction="column" align="end" >
              <Button color='white' backgroundColor={'orange.500'}>
                Show Results
              </Button>
              <Button variant="link" mt={2} color="red.600" mr={5}>Reset all</Button>
            </Flex>
          </Stack>

          {/* Featured Courses Section */}
          <Box w="80%">
            <Box mb={4}>
              <Flex justify="center" align="center">
                <Text fontSize="xl" fontWeight="bold" align="start" ml={5}>FEATURED COURSES</Text>
                <Spacer />
                <Button variant="link" colorScheme="blackAlpha">Show all</Button>
              </Flex>
              <Divider mt={2} />
            </Box>

            <Grid ml={12} mr={12} templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={8}>
              {course.map((courseItem) => (
                <Box position="relative" key={courseItem.id} borderWidth="1px" borderRadius="md" overflow="hidden">
                  <img c src={courseItem.image} alt="Course" style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                  <Box p={4}>
                    <Text fontSize="sm" color="gray.500">{courseItem.title}</Text>
                    <Heading size="md" color="orange.600" textAlign={"end"}>{courseItem.category}</Heading>
                    <Divider my={2} />
                    <Flex justify="space-between" align="center">
                      <Text fontSize="sm">
                        <FontAwesomeIcon icon={faClock} /> {courseItem.duration}
                      </Text>
                      <Text fontSize="sm" color="green.500">{courseItem.status}</Text>
                    </Flex>
                    <Text textAlign="end" fontSize="m" fontWeight="bold" color="red.400">{courseItem.price}</Text>
                  </Box>
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    bg="rgba(216, 85, 9, 0.6)"
                    color="white"
                    p={4}
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    opacity={0}
                    _hover={{ opacity: 1 }}
                  >
                    <Stack spacing={2}>

                      <a href="#" style={{ color: 'white' }}>{courseItem.title}</a>
                      <Text fontWeight="bold">Instructor: {courseItem.instructor}</Text>
                      <Text fontSize="sm">
                        <FontAwesomeIcon icon={faStar} />
                        {courseItem.rating}
                      </Text>
                      <Box maxH="21vh" overflowY="scroll" sx={{
                        '&::-webkit-scrollbar': {
                          width: '8px',
                        },
                        '&::-webkit-scrollbar-track': {
                          background: '#f1f1f1',
                        },
                        '&::-webkit-scrollbar-thumb': {
                          background: '#888',
                          borderRadius: '4px',
                        },
                        '&::-webkit-scrollbar-thumb:hover': {
                          background: '#555',
                        },
                      }}>
                        <Text>{courseItem.description}</Text>
                      </Box>


                    </Stack>
                    <Button color="white" style={{ backgroundColor: "black" }}>
                      {courseItem.status === "Free" ?
                        "Enroll Now" : "Add to cart"
                      }
                    </Button>
                  </Box>
                </Box>
              ))}
            </Grid>
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
};
