import { Container, VStack, Text, Button, Box, Image, Heading } from "@chakra-ui/react";
import { FaDice, FaMoneyBillWave, FaGamepad } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">Добро пожаловать в лучший онлайн-казино</Heading>
        <Image src="/images/casino-banner.jpg" alt="Баннер казино" borderRadius="md" />
        <Text fontSize="lg" textAlign="center">Испытайте азарт настоящих казино-игр, не выходя из дома.</Text>
        <Box display="flex" justifyContent="space-around" width="100%">
          <Button leftIcon={<FaDice />} colorScheme="teal" variant="solid" size="lg">
            Играть в кости
          </Button>
          <Button leftIcon={<FaMoneyBillWave />} colorScheme="teal" variant="solid" size="lg">
            Выигрывайте крупно
          </Button>
          <Button leftIcon={<FaGamepad />} colorScheme="teal" variant="solid" size="lg">
            Больше игр
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;