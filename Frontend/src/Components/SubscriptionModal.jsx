import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Button, Text, VStack, HStack, useToast, Badge, Icon, Grid, GridItem } from '@chakra-ui/react';
import { FaCrown, FaStar, FaRocket } from 'react-icons/fa';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { SUBSCRIPTION_SUCCESS } from '../Redux/Auth/ActionTypes';
import { useNavigate } from 'react-router-dom';

const SubscriptionModal = ({ isOpen, onClose, redirectTo }) => {
  const [selectedPlan, setSelectedPlan] = useState('demo_3min');
  const dispatch = useDispatch();
  const token = useSelector(state => state.authReducer.token);
  const toast = useToast();
  const navigate = useNavigate();

  const plans = [
    { 
      id: 'demo_3min', 
      name: 'Free Trial', 
      duration: '3 minutes', 
      price: 'Free', 
      features: ['Access to selected movies', 'Standard quality streaming', 'Limited watch time'],
      icon: FaStar,
      color: 'gray'
    },
    { 
      id: 'demo_5min', 
      name: 'Basic Plan', 
      duration: '5 minutes', 
      price: '₹149/month', 
      features: ['Full movie library access', 'HD streaming quality', 'Watch on 1 device', 'Email support'],
      icon: FaRocket,
      color: 'blue'
    },
    { 
      id: 'demo_10min', 
      name: 'Premium Plan', 
      duration: '10 minutes', 
      price: '₹299/month', 
      features: ['4K Ultra HD streaming', 'Watch on 2 devices', 'Download for offline', 'Priority customer support', 'Ad-free experience'],
      icon: FaCrown,
      color: 'purple'
    },
    { 
      id: 'full', 
      name: 'VIP Annual', 
      duration: '1 year', 
      price: '₹3499/year', 
      features: ['Everything in Premium', 'Watch on 4 devices', 'Exclusive early access', 'VIP customer support', 'Family sharing (up to 6)', 'Save $19.89/year'],
      icon: FaCrown,
      color: 'yellow'
    },
  ];

  const handleSubscribe = () => {
    if (!selectedPlan) return;
    navigate('/payment', { state: { plan: selectedPlan, redirectTo } });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            paddingLeft:"13%"
          }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <Box 
              bg="rgba(0, 0, 0, 0.9)" 
              backdropFilter="blur(20px)" 
              p={8} 
              rounded="xl" 
              shadow="2xl" 
              maxW="xlg" 
              w="full" 
              border="1px solid rgba(255, 255, 255, 0.1)"
            >
              <VStack spacing={6}>
                <VStack spacing={2} textAlign="center">
                  <Text fontSize="2xl" fontWeight="bold" color="white">Choose Your Plan</Text>
                  <Text fontSize="sm" color="gray.300">Unlock unlimited movies and exclusive content</Text>
                  <Badge colorScheme="blue" variant="subtle">Demo Mode - No Real Charges</Badge>
                </VStack>
                
                <Grid templateColumns="repeat(4, 1fr)" gap={4} w="full">
                  {plans.map(plan => (
                    <GridItem key={plan.id}>
                      <motion.div
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        style={{ height: '100%' }}
                      >
                        <Box
                          p={4}
                          rounded="lg"
                          bg={selectedPlan === plan.id ? `rgba(59, 130, 246, 0.1)` : "rgba(255, 255, 255, 0.05)"}
                          border={selectedPlan === plan.id ? "2px solid #3b82f6" : "1px solid rgba(255, 255, 255, 0.1)"}
                          cursor="pointer"
                          onClick={() => setSelectedPlan(plan.id)}
                          transition="all 0.2s"
                          _hover={{ bg: "rgba(255, 255, 255, 0.08)" }}
                          h="full"
                        >
                          <VStack align="start" spacing={3} h="full">
                            <HStack justify="space-between" w="full">
                              <HStack spacing={2}>
                                <Icon as={plan.icon} color={`${plan.color}.400`} />
                                <Text fontWeight="bold" color="white">{plan.name}</Text>
                              </HStack>
                              <Badge colorScheme={plan.color} fontSize="xs">{plan.price}</Badge>
                            </HStack>
                            <Text fontSize="sm" color="gray.400">{plan.duration}</Text>
                            <VStack align="start" spacing={1} flex={1}>
                              {plan.features.map((feature, idx) => (
                                <Text key={idx} fontSize="xs" color="gray.500">• {feature}</Text>
                              ))}
                            </VStack>
                            <Box w={4} h={4} rounded="full" bg={selectedPlan === plan.id ? "#3b82f6" : "transparent"} border="2px solid #3b82f6" alignSelf="center" />
                          </VStack>
                        </Box>
                      </motion.div>
                    </GridItem>
                  ))}
                </Grid>

                <HStack spacing={4} w="full">
                  <Button onClick={onClose} variant="ghost" color="gray.300" _hover={{ bg: "rgba(255, 255, 255, 0.1)" }} flex={1}>
                    Cancel
                  </Button>
                  <Button 
                    onClick={handleSubscribe} 
                    colorScheme="blue" 
                    isDisabled={!selectedPlan}
                    flex={2}
                    bg="blue.600"
                    _hover={{ bg: "blue.700" }}
                  >
                    Proceed to Payment
                  </Button>
                </HStack>
              </VStack>
            </Box>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SubscriptionModal;