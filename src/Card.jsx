import { Flex, Button, HStack, Box } from "@chakra-ui/react"

export const Card = ({ card: { name, ops, side }, setCardLocation }) => {
  const bgMap = new Map([
    ["ussr", "red"],
    ["us", "blue"],
    ["n", "grey"],
  ])
  return (
    <Flex bg="#e3f6ff" alignItems="center" p="2">
      <Box borderRadius="full" bg={bgMap.get(side)} w="3" h="3" mr="2" />
      {ops} {name}
      <HStack ml="auto">
        <Button
          bg="#003366"
          color="#FFD700"
          size="xs"
          onClick={() => setCardLocation({ name, location: "discard" })}
        >
          Discard
        </Button>
        <Button
          bg="#003366"
          color="#FFD700"
          size="xs"
          onClick={() => setCardLocation({ name, location: "remove" })}
        >
          Remove
        </Button>
        <Button
          bg="#003366"
          color="#FFD700"
          size="xs"
          onClick={() => setCardLocation({ name, location: "hand" })}
        >
          Hand
        </Button>
        <Button
          bg="#003366"
          color="#FFD700"
          size="xs"
          onClick={() => setCardLocation({ name, location: "deck" })}
        >
          Deck
        </Button>
      </HStack>
    </Flex>
  )
}
