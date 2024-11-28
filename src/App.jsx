import { Cards } from "./Cards"
import { Container, Box, Heading } from "@chakra-ui/react"

export default function App() {
  return (
    <Container maxW="900px" bg="white">
      <Box as="section">
        <Heading as="h1" size="xl" p="2">
          Twilight Struggle Cards
        </Heading>
        <Cards />
      </Box>
    </Container>
  )
}
