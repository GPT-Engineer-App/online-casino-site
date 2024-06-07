import { Container, VStack, Text, Button, Box, Image, Heading } from "@chakra-ui/react";
import { FaDice, FaMoneyBillWave, FaGamepad } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">Welcome to the Ultimate Online Casino</Heading>
        <Image src="/images/casino-banner.jpg" alt="Casino Banner" borderRadius="md" />
        <Text fontSize="lg" textAlign="center">Experience the thrill of real casino games from the comfort of your home.</Text>
        <Box display="flex" justifyContent="space-around" width="100%">
          <Button leftIcon={<FaDice />} colorScheme="teal" variant="solid" size="lg">
            Play Dice
          </Button>
          <Button leftIcon={<FaMoneyBillWave />} colorScheme="teal" variant="solid" size="lg">
            Win Big
          </Button>
          <Button leftIcon={<FaGamepad />} colorScheme="teal" variant="solid" size="lg">
            More Games
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;