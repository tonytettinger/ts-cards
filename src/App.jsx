import { Cards } from "./Cards";
import { Container, Box, Heading } from "@chakra-ui/react";
import { CardLegend } from "./CardLegend";

export default function App() {
  return (
    <Container
      bgImage="url('/twilight-struggle-card-tracker-1200x630.png')"
      bgSize="contain"
      bgPosition="center"
      minH="100vh"
    >
      <Box as="section">
        <Heading
          as="h1"
          p="2"
          fontWeight="bold"
          color="white"
          bg="black"
          mb="1"
        >
          Twilight Struggle Card Tracker & Counter
        </Heading>
        <CardLegend />
        <Cards />
      </Box>
    </Container>
  );
}
