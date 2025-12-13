import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Button,
  Text,
  VStack,
  HStack,
  Input,
  Select,
  RadioGroup,
  Radio,
  Stack,
  FormControl,
  FormLabel,
  useToast,
  Heading,
  Divider,
  Badge,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaCreditCard, FaMobileAlt } from 'react-icons/fa';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { SUBSCRIPTION_SUCCESS } from '../Redux/Auth/ActionTypes';
import { useNavigate, useLocation } from 'react-router-dom';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardNumber, setCardNumber] = useState('1234567890123456');
  const [expiry, setExpiry] = useState('12/29');
  const [cvv, setCvv] = useState('123');
  const [upiId, setUpiId] = useState('demo@icici');
  const [isProcessing, setIsProcessing] = useState(false);

  const dispatch = useDispatch();
  const token = useSelector(state => state?.authReducer?.token);
  const toast = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const plan = location.state?.plan;
  const redirectTo = location.state?.redirectTo;


  console.log("token:", token);

  const plans = {
    demo_3min: { name: 'Demo 3 Minutes', price: 'Free' },
    demo_5min: { name: 'Demo 5 Minutes', price: 'Free' },
    demo_10min: { name: 'Demo 10 Minutes', price: 'Free' },
    full: { name: 'Full Access', price: '$9.99' },
  };

  const handlePayment = async () => {
    if (!plan) {
      toast({
        title: 'Error',
        description: 'No plan selected',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Dummy validation
    if (paymentMethod === 'card') {
      if (!cardNumber || !expiry || !cvv) {
        toast({
          title: 'Error',
          description: 'Please fill all card details',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
        return;
      }
    } else if (paymentMethod === 'upi') {
      if (!upiId) {
        toast({
          title: 'Error',
          description: 'Please enter UPI ID',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
        return;
      }
    }

    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(async () => {
      try {
        const res = await axios.post(`https://movies-data-fdb6.onrender.com/subscription/subscribe`,
          { plan },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        dispatch({ type: SUBSCRIPTION_SUCCESS, payload: res.data.subscription });
        toast({
          title: 'Payment Successful!',
          description: `You have subscribed to ${plans[plan].name}`,
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
        navigate(redirectTo || '/movies');
      } catch (error) {
        toast({
          title: 'Payment Failed',
          description: error.response?.data?.error || 'Subscription failed',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      } finally {
        setIsProcessing(false);
      }
    }, 2000); // Simulate 2 second processing
  };

  return (
     <Box as="main" w={"98.5vw"} paddingLeft={"13%"} height={"100Vh"} id='mainDiv'    bg={useColorModeValue('#000014', 'gray.800')} >
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ minHeight: '100vh', backgroundColor: '#000014', color: 'white', padding: '20px' }}
    >
      <Box maxW="600px" mx="auto" mt="50px">
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <VStack spacing={6} align="stretch">
            <Heading textAlign="center" color="white">Complete Your Payment</Heading>

            <Box bg="gray.800" p={6} rounded="lg" shadow="lg">
              <Text fontSize="lg" fontWeight="bold" mb={2}>Selected Plan</Text>
              <HStack justify="space-between">
                <Text>{plans[plan]?.name || 'No plan selected'}</Text>
                <Badge colorScheme="green" fontSize="lg">{plans[plan]?.price || 'N/A'}</Badge>
              </HStack>
            </Box>

            <Box bg="gray.800" p={6} rounded="lg" shadow="lg">
              <Text fontSize="lg" fontWeight="bold" mb={4}>Payment Method</Text>
              <RadioGroup onChange={setPaymentMethod} value={paymentMethod}>
                <Stack direction="row" spacing={6}>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Radio value="card" colorScheme="blue">
                      <HStack>
                        <Icon as={FaCreditCard} />
                        <Text>Credit/Debit Card</Text>
                      </HStack>
                    </Radio>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Radio value="upi" colorScheme="blue">
                      <HStack>
                        <Icon as={FaMobileAlt} />
                        <Text>UPI</Text>
                      </HStack>
                    </Radio>
                  </motion.div>
                </Stack>
              </RadioGroup>

              <Divider my={4} />

              {paymentMethod === 'card' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <VStack spacing={4}>
                    <FormControl>
                      <FormLabel>Card Number</FormLabel>
                      <Input
                        placeholder="1234 5678 9012 3456"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        bg="gray.700"
                        border="none"
                        _focus={{ bg: 'gray.600' }}
                      />
                    </FormControl>
                    <HStack spacing={4} w="full">
                      <FormControl>
                        <FormLabel>Expiry Date</FormLabel>
                        <Input
                          placeholder="MM/YY"
                          value={expiry}
                          onChange={(e) => setExpiry(e.target.value)}
                          bg="gray.700"
                          border="none"
                          _focus={{ bg: 'gray.600' }}
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel>CVV</FormLabel>
                        <Input
                          placeholder="123"
                          value={cvv}
                          onChange={(e) => setCvv(e.target.value)}
                          bg="gray.700"
                          border="none"
                          _focus={{ bg: 'gray.600' }}
                        />
                      </FormControl>
                    </HStack>
                  </VStack>
                </motion.div>
              )}

              {paymentMethod === 'upi' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <FormControl>
                    <FormLabel>UPI ID</FormLabel>
                    <Input
                      placeholder="yourname@upi"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                      bg="gray.700"
                      border="none"
                      _focus={{ bg: 'gray.600' }}
                    />
                  </FormControl>
                </motion.div>
              )}
            </Box>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                colorScheme="blue"
                size="lg"
                w="full"
                onClick={handlePayment}
                isLoading={isProcessing}
                loadingText="Processing Payment..."
              >
                Pay Now
              </Button>
            </motion.div>

            <Text textAlign="center" fontSize="sm" color="gray.400">
              This is a demo payment page. No real charges will be made.
            </Text>
          </VStack>
        </motion.div>
      </Box>
    </motion.div></Box>
  );
};

export default Payment;