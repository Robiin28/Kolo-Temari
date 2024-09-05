import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Text, 
  Image, 
  Tabs, 
  TabList, 
  TabPanels, 
  Tab, 
  TabPanel, 
  Link, 
  Input, 
  Flex, 
  Spinner, 
  useBreakpointValue 
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import axios from 'axios';

const LessonContent = ({ lesson }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [sections, setSections] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch sections when the component mounts or lesson changes
  useEffect(() => {
    if (!lesson) return;

    const fetchSections = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:5000/api/course/${lesson.courseId}/section`);
        await new Promise(resolve => setTimeout(resolve, 1000)); // Optional delay for UX effect
        if (response.data.status === 'success') {
          setSections(response.data.data.sections); // Assume sections is an array of section data
        } else {
          setError('Failed to fetch sections.');
        }
      } catch (error) {
        setError(`Failed to fetch sections: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchSections();
  }, [lesson]);

  if (!lesson) {
    return null;
  }

  return (
    <Box 
      p={{ base: 2, md: 4 }} 
      bg="gray.50" 
      borderRadius="md" 
      boxShadow="md" 
      mt={{ base: 6, md: 12 }} 
     
      maxW="full"
    >
      <Text fontSize={{ base: "xl", md: "3xl" }} fontWeight="bold" mb={6} color="gray.900" textAlign="center">
        {lesson.title}
      </Text>

      <Tabs variant="unstyled">
        <TabList borderBottom="1px solid" borderColor="gray.300">
          <Tab {...tabStyles}>Search</Tab>
          <Tab {...tabStyles}>Overview</Tab>
          <Tab {...tabStyles}>Description</Tab>
          <Tab {...tabStyles}>Videos</Tab>
          <Tab {...tabStyles}>Resources</Tab>
          <Tab {...tabStyles}>Announcements</Tab>
          <Tab {...tabStyles}>Reviews</Tab>
        </TabList>

        <TabPanels>
          {/* Search Tab */}
          <TabPanel>
            <Flex 
              direction={{ base: "column", sm: "row" }} 
              mb={4} 
              align="center" 
              justify="center"
            >
              <SearchIcon mr={2} color="gray.500" />
              <Input 
                placeholder="Search lesson content..." 
                variant="outline" 
                width={{ base: "full", sm: "300px" }} 
              />
            </Flex>
            {/* Add search functionality later */}
          </TabPanel>

          {/* Overview Tab */}
          <TabPanel>
            {loading ? (
              <Flex justify="center" align="center">
                <Spinner size="lg" color="blue.500" />
              </Flex>
            ) : error ? (
              <Text color="red.500" textAlign="center">{error}</Text>
            ) : sections.length > 0 ? (
              <Box>
                {sections.map((section, index) => (
                  <Box 
                    key={index} 
                    p={4} 
                    mb={4} 
                    border="1px solid" 
                    borderColor="gray.200" 
                    borderRadius="md"
                    bg="white"
                  >
                    <Text fontSize="lg" fontWeight="bold" color="gray.800">Section {index+1} : {section.title}</Text>
                    <Text fontSize="sm" color="gray.600">{section.description}</Text>
                  </Box>
                ))}
              </Box>
            ) : (
              <Text color="gray.600">No sections available.</Text>
            )}
          </TabPanel>

          {/* Description Tab */}
          <TabPanel>
            <Box mb={6}>
              <Text fontSize={{ base: "sm", md: "md" }} mb={4} color="gray.700" textAlign="center">
                {lesson.description}
              </Text>
              {lesson.pic && (
                <Image 
                  src={lesson.pic} 
                  alt={lesson.title} 
                  borderRadius="md" 
                  boxShadow="md"
                  m="auto"
                  mb={6}
                  maxW={{ base: "100%", md: "20%" }} 
                  height="auto"
                />
              )}
            </Box>
          </TabPanel>

          {/* Videos Tab */}
          <TabPanel>
            {lesson.videoUrls.length > 0 ? (
              <Box>
                <Box mb={4}>
                  {lesson.videoUrls.map((url, index) => (
                    <Link 
                      key={index} 
                      onClick={() => setSelectedVideo(url)} 
                      fontSize={{ base: "sm", md: "md" }} 
                      color="blue.500" 
                      _hover={{ textDecoration: 'underline' }}
                      display="block"
                      mb={2}
                    >
                      Part {index + 1}
                    </Link>
                  ))}
                </Box>
                {selectedVideo && (
                  <Box 
                    borderRadius="md" 
                    overflow="hidden" 
                    boxShadow="md" 
                    mt={8}
                    display="flex"
                    justifyContent="center"
                  >
                    <video
                      controls
                      preload="auto"
                      width={{ base: "100%", md: "80%" }}
                      height="auto"
                      style={{ borderRadius: '8px', maxHeight: '500px' }}
                    >
                      <source src={selectedVideo} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </Box>
                )}
              </Box>
            ) : (
              <Text color="gray.600">No videos available.</Text>
            )}
          </TabPanel>

          {/* Resources Tab */}
          <TabPanel>
            {lesson.resources.length > 0 ? (
              lesson.resources.map((resource, index) => (
                <Box key={index} mb={4}>
                  <a href={resource} target="_blank" rel="noopener noreferrer">
                    <Text color="blue.500" _hover={{ textDecoration: 'underline' }}>
                      Resource {index + 1}
                    </Text>
                  </a>
                </Box>
              ))
            ) : (
              <Text color="gray.600">No resources available.</Text>
            )}
          </TabPanel>

          {/* Announcements Tab */}
          <TabPanel>
            <Text color="gray.600">Announcements content goes here...</Text>
            {/* Fetch and display announcements content later */}
          </TabPanel>

          {/* Reviews Tab */}
          <TabPanel>
            <Text color="gray.600">Reviews content goes here...</Text>
            {/* Fetch and display reviews content later */}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

// Common tab styles
const tabStyles = {
  fontSize: { base: "sm", md: "md" },
  px: 4,
  py: 2,
  _selected: { borderBottom: "2px solid gray", color: "gray.800" },
  _focus: { outline: "none" },
  _hover: { background: "transparent", color: "gray.800" },
  borderRadius: "0",
};

export default LessonContent;
