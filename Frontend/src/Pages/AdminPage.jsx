import { Box, Button, CircularProgress, Image, Input, Stack, Text, useColorModeValue, useToast, VStack, HStack, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Badge, IconButton, Tabs, TabList, TabPanels, Tab, TabPanel, Spinner, Progress, Card, CardBody, CardHeader, Heading, Divider, Avatar, Flex, Grid, GridItem, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMovie, getMovies } from '../Redux/MovieReducer/Action';
import { AdminCard } from '../Components/AdminCard';
import { FaUsers, FaFilm, FaCrown, FaTrash, FaBan, FaCheck, FaChartBar, FaUserCheck, FaUserTimes, FaCalendarAlt } from 'react-icons/fa';
import axios from 'axios';

export const AdminPage = () => {
  const [movieData, setMovieData] = useState({
    MovieID: '',
    Title: '',
    Release_Date: '',
    Description: '',
    Poster_Image: '',
    Average_Rating: '',
    Trailer_URL: '',
    Runtime: ''
  });

  const [users, setUsers] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [userStats, setUserStats] = useState({
    totalUsers: 0,
    activeUsers: 0,
    blockedUsers: 0,
    subscribedUsers: 0,
    subscriptionPlans: []
  });
  const [loadingStats, setLoadingStats] = useState(true);

  const dispatch = useDispatch();
  const Movies = useSelector((store) => store.productReducer.movies);
  const isLoading = useSelector((store) => store.productReducer.isLoading);
  const toast = useToast()

  useEffect(() => {
    dispatch(getMovies());
    fetchUsers();
    fetchUserStats();
  }, [dispatch]);

  const fetchUsers = async () => {
    try {
      const res = await axios.get('https://movies-data-fdb6.onrender.com/users/users');
      setUsers(res.data);
    } catch (error) {
      console.error('Error fetching users:', error);
      toast({
        title: 'Error',
        description: 'Failed to fetch users',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoadingUsers(false);
    }
  };

  const fetchUserStats = async () => {
    try {
      const res = await axios.get('https://movies-data-fdb6.onrender.com/users/users/stats');
      setUserStats(res.data);
    } catch (error) {
      console.error('Error fetching user stats:', error);
      toast({
        title: 'Error',
        description: 'Failed to fetch user statistics',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoadingStats(false);
    }
  };

  const handleBlockUser = async (userId, currentStatus) => {
    const newStatus = currentStatus === 'blocked' ? 'active' : 'blocked';
    try {
      await axios.patch(`https://movies-data-fdb6.onrender.com/users/users/${userId}/status`, {
        status: newStatus
      });
      
      // Update local state
      setUsers(users.map(user => 
        user._id === userId ? { ...user, status: newStatus } : user
      ));
      
      // Refresh stats
      fetchUserStats();
      
      toast({
        title: 'Success',
        description: `User ${newStatus === 'blocked' ? 'blocked' : 'unblocked'} successfully`,
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Error updating user status:', error);
      toast({
        title: 'Error',
        description: 'Failed to update user status',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovieData({ ...movieData, [name]: name=="MovieID"? +value : value });
  };

  const handleAddMovie = () => {
    // Normally, you would dispatch the addMovie action here.
    dispatch(addMovie(movieData));
    toast({
      title: `Movie Added Successfully`,
      position: "top",
      isClosable: true,
    })
    dispatch(getMovies())
    setMovieData({
      MovieID: '',
      Title: '',
      Release_Date: '',
      Description: '',
      Poster_Image: '',
      Average_Rating: '',
      Trailer_URL: '',
      Runtime: ''
    });
  };

  return (
    <Box as="main" w={"98.5vw"} paddingLeft={"13%"} minHeight={"100vh"} bg={useColorModeValue('#000014', 'gray.800')} >
      <Tabs variant="enclosed" colorScheme="blue" padding={"4"}>
        <TabList>
          <Tab color="white">Dashboard</Tab>
          <Tab color="white">Movies</Tab>
          <Tab color="white">Users</Tab>
        </TabList>

        <TabPanels>
            <TabPanel>
            <VStack spacing={8} align="stretch">
              <Heading size="lg" color="white" textAlign="center">Admin Dashboard</Heading>
              
              {/* Statistics Cards */}
              <SimpleGrid columns={{ base: 1, md: 5 }} spacing={6}>
                <Card bg="rgba(255, 255, 255, 0.1)" border="1px solid rgba(255, 255, 255, 0.2)">
                  <CardBody>
                    <Stat>
                      <StatLabel color="white" fontSize="sm">Total Movies</StatLabel>
                      <StatNumber color="white" fontSize="3xl">{Movies.length}</StatNumber>
                      <StatHelpText color="gray.300">
                        In catalog
                      </StatHelpText>
                    </Stat>
                  </CardBody>
                </Card>

                <Card bg="rgba(255, 255, 255, 0.1)" border="1px solid rgba(255, 255, 255, 0.2)">
                  <CardBody>
                    <Stat>
                      <StatLabel color="white" fontSize="sm">Total Users</StatLabel>
                      <StatNumber color="white" fontSize="3xl">{loadingStats ? '...' : userStats.totalUsers}</StatNumber>
                      <StatHelpText color="gray.300">
                        <StatArrow type="increase" />
                        Registered accounts
                      </StatHelpText>
                    </Stat>
                  </CardBody>
                </Card>

                <Card bg="rgba(255, 255, 255, 0.1)" border="1px solid rgba(255, 255, 255, 0.2)">
                  <CardBody>
                    <Stat>
                      <StatLabel color="white" fontSize="sm">Active Users</StatLabel>
                      <StatNumber color="green.300" fontSize="3xl">{loadingStats ? '...' : userStats.activeUsers}</StatNumber>
                      <StatHelpText color="gray.300">
                        Currently active
                      </StatHelpText>
                    </Stat>
                  </CardBody>
                </Card>

                <Card bg="rgba(255, 255, 255, 0.1)" border="1px solid rgba(255, 255, 255, 0.2)">
                  <CardBody>
                    <Stat>
                      <StatLabel color="white" fontSize="sm">Subscribed Users</StatLabel>
                      <StatNumber color="blue.300" fontSize="3xl">{loadingStats ? '...' : userStats.subscribedUsers}</StatNumber>
                      <StatHelpText color="gray.300">
                        Active subscriptions
                      </StatHelpText>
                    </Stat>
                  </CardBody>
                </Card>

                <Card bg="rgba(255, 255, 255, 0.1)" border="1px solid rgba(255, 255, 255, 0.2)">
                  <CardBody>
                    <Stat>
                      <StatLabel color="white" fontSize="sm">Blocked Users</StatLabel>
                      <StatNumber color="red.300" fontSize="3xl">{loadingStats ? '...' : userStats.blockedUsers}</StatNumber>
                      <StatHelpText color="gray.300">
                        Currently blocked
                      </StatHelpText>
                    </Stat>
                  </CardBody>
                </Card>
              </SimpleGrid>

              {/* Subscription Plans Distribution */}
              <Card bg="rgba(255, 255, 255, 0.1)" border="1px solid rgba(255, 255, 255, 0.2)">
                <CardHeader>
                  <Heading size="md" color="white">Subscription Plans Distribution</Heading>
                </CardHeader>
                <CardBody>
                  {loadingStats ? (
                    <Spinner color="blue.500" />
                  ) : (
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                      {userStats.subscriptionPlans.map((plan) => (
                        <Box key={plan._id} p={4} bg="rgba(0, 0, 0, 0.3)" borderRadius="md">
                          <HStack justify="space-between">
                            <VStack align="start" spacing={1}>
                              <Text color="white" fontWeight="bold">{plan._id}</Text>
                              <Text color="gray.300" fontSize="sm">{plan.count} users</Text>
                            </VStack>
                            <Badge colorScheme="blue" fontSize="lg" p={2}>
                              {plan.count}
                            </Badge>
                          </HStack>
                          <Progress 
                            value={(plan.count / userStats.subscribedUsers) * 100} 
                            colorScheme="blue" 
                            size="sm" 
                            mt={2} 
                          />
                        </Box>
                      ))}
                    </SimpleGrid>
                  )}
                </CardBody>
              </Card>

              {/* Recent Activity */}
              <Card bg="rgba(255, 255, 255, 0.1)" border="1px solid rgba(255, 255, 255, 0.2)">
                <CardHeader>
                  <Heading size="md" color="white">Recent Users</Heading>
                </CardHeader>
                <CardBody>
                  {loadingUsers ? (
                    <Spinner color="blue.500" />
                  ) : (
                    <VStack spacing={3} align="stretch">
                      {users.slice(0, 5).map((user) => (
                        <HStack key={user._id} p={3} bg="rgba(0, 0, 0, 0.3)" borderRadius="md">
                          <Avatar size="sm" name={user.name} />
                          <VStack align="start" spacing={0} flex={1}>
                            <Text color="white" fontWeight="bold" fontSize="sm">{user.name}</Text>
                            <Text color="gray.300" fontSize="xs">{user.email}</Text>
                          </VStack>
                          <Badge colorScheme={user.status === 'active' ? 'green' : 'red'} size="sm">
                            {user.status}
                          </Badge>
                        </HStack>
                      ))}
                    </VStack>
                  )}
                </CardBody>
              </Card>
            </VStack>
          </TabPanel>

          <TabPanel>
            <VStack spacing={6} align="stretch">
              <Text fontSize="2xl" fontWeight="bold" color="white">Movie Management</Text>
              <HStack spacing={6} align="start">
                <Box width="40%" bg="rgba(255, 255, 255, 0.1)" p={6} borderRadius="lg">
                  <Text fontSize="lg" fontWeight="bold" mb={4} color="white">Add New Movie</Text>
                  <VStack spacing={3}>
                    <Input placeholder="Movie ID" name="MovieID" value={movieData.MovieID} onChange={handleChange} bg="gray.700" />
                    <Input placeholder="Title" name="Title" value={movieData.Title} onChange={handleChange} bg="gray.700" />
                    <Input placeholder="Release Date" name="Release_Date" value={movieData.Release_Date} onChange={handleChange} bg="gray.700" />
                    <Input placeholder="Description" name="Description" value={movieData.Description} onChange={handleChange} bg="gray.700" />
                    <Input placeholder="Poster Image URL" name="Poster_Image" value={movieData.Poster_Image} onChange={handleChange} bg="gray.700" />
                    <Input placeholder="Average Rating" name="Average_Rating" value={movieData.Average_Rating} onChange={handleChange} bg="gray.700" />
                    <Input placeholder="Trailer URL" name="Trailer_URL" value={movieData.Trailer_URL} onChange={handleChange} bg="gray.700" />
                    <Input placeholder="Runtime" name="Runtime" value={movieData.Runtime} onChange={handleChange} bg="gray.700" />
                    <Button colorScheme="blue" onClick={handleAddMovie} w="full">Add Movie</Button>
                  </VStack>
                </Box>
                <Box width="55%">
                  <Text fontSize="lg" fontWeight="bold" mb={4} color="white">Movie List ({Movies.length})</Text>
                  {isLoading ? <CircularProgress isIndeterminate color="blue.300" /> : 
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                      {Movies.map((movie) => (
                        <AdminCard key={movie._id} {...movie} />
                      ))}
                    </SimpleGrid>
                  }
                </Box>
              </HStack>
            </VStack>
          </TabPanel>

          <TabPanel>
            <VStack spacing={6} align="stretch">
              <Heading size="lg" color="white">User Management</Heading>
              
              <Card bg="rgba(255, 255, 255, 0.1)" border="1px solid rgba(255, 255, 255, 0.2)">
                <CardBody>
                  {loadingUsers ? (
                    <Spinner color="blue.500" />
                  ) : (
                    <Box overflowX="auto">
                      <Table variant="simple" colorScheme="whiteAlpha">
                        <Thead>
                          <Tr>
                            <Th color="white">User</Th>
                            <Th color="white">Contact</Th>
                            <Th color="white">Subscription</Th>
                            <Th color="white">Status</Th>
                            <Th color="white">Favorites</Th>
                            <Th color="white">Joined</Th>
                            <Th color="white">Actions</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {users.map((user) => (
                            <Tr key={user._id}>
                              <Td>
                                <HStack>
                                  <Avatar size="sm" name={user.name} />
                                  <VStack align="start" spacing={0}>
                                    <Text color="white" fontWeight="bold">{user.name}</Text>
                                    <Text color="gray.300" fontSize="xs">ID: {user._id.slice(-6)}</Text>
                                  </VStack>
                                </HStack>
                              </Td>
                              <Td>
                                <VStack align="start" spacing={0}>
                                  <Text color="white" fontSize="sm">{user.email}</Text>
                                  <Text color="gray.300" fontSize="xs">{user.mobile_Number}</Text>
                                </VStack>
                              </Td>
                              <Td>
                                {user.subscription ? (
                                  <Badge colorScheme="blue">{user.subscription}</Badge>
                                ) : (
                                  <Badge colorScheme="gray">None</Badge>
                                )}
                              </Td>
                              <Td>
                                <Badge colorScheme={user.status === 'active' ? 'green' : 'red'}>
                                  {user.status}
                                </Badge>
                              </Td>
                              <Td color="white">{user.favoritesCount}</Td>
                              <Td color="white" fontSize="sm">
                                {new Date(user.createdAt).toLocaleDateString()}
                              </Td>
                              <Td>
                                <Button
                                  size="sm"
                                  colorScheme={user.status === 'blocked' ? 'green' : 'red'}
                                  onClick={() => handleBlockUser(user._id, user.status)}
                                  leftIcon={user.status === 'blocked' ? <FaCheck /> : <FaBan />}
                                >
                                  {user.status === 'blocked' ? 'Unblock' : 'Block'}
                                </Button>
                              </Td>
                            </Tr>
                          ))}
                        </Tbody>
                      </Table>
                    </Box>
                  )}
                </CardBody>
              </Card>
            </VStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};
