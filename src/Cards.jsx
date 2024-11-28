import cards from "./assets/cards.json"
import { Card } from "./Card"
import { useState } from "react"
import { Stack, Box, Heading, Button } from "@chakra-ui/react"

const colorOrder = {
  us: 1,
  ussr: 2,
  n: 3,
}

export const Cards = () => {
  const [data, setData] = useState([...cards])
  const setCardLocation = ({ name, location }) => {
    setData((prev) =>
      prev.map((card) => (card.name === name ? { ...card, location } : card))
    )
  }

  const sortedCards = data.sort((a, b) => {
    if (a.ops !== b.ops) {
      return b.ops - a.ops
    }
    return colorOrder[a.side] - colorOrder[b.side]
  })

  const deck = sortedCards.filter((card) => card.location === "deck")
  return (
    <Stack>
      <Heading as="h2" size="xl" p="2" fontWeight="900">
        Hand
      </Heading>
      <Stack>
        {data
          .filter((card) => card.location === "hand")
          .map((card) => (
            <Card
              card={card}
              key={card.name}
              setCardLocation={setCardLocation}
            />
          ))}
      </Stack>

      <Heading as="h2" size="xl" p="2" fontWeight="900">
        Deck
      </Heading>
      <Box>
        <Heading
          as="h3"
          size="sm"
          p="4"
          bg="#00accf"
          color="white"
          fontWeight="900"
        >
          EARLY WAR
        </Heading>
        <Stack>
          {deck
            .filter((card) => card.stage === "early")
            .map((card) => (
              <Card
                card={card}
                key={card.name}
                setCardLocation={setCardLocation}
              />
            ))}
        </Stack>
        <Heading
          as="h3"
          size="sm"
          p="4"
          bg="#0089ab"
          color="white"
          fontWeight="900"
        >
          MID WAR
        </Heading>
        <Stack>
          {deck
            .filter((card) => card.stage === "mid")
            .map((card) => (
              <Card
                card={card}
                key={card.name}
                setCardLocation={setCardLocation}
              />
            ))}
        </Stack>
        <Heading
          as="h3"
          size="sm"
          p="4"
          bg="#282f42"
          color="white"
          fontWeight="900"
        >
          LATE WAR
        </Heading>
        <Stack>
          {deck
            .filter((card) => card.stage === "late")
            .map((card) => (
              <Card
                card={card}
                key={card.name}
                setCardLocation={setCardLocation}
              />
            ))}
        </Stack>
      </Box>

      <Heading as="h2" size="xl" p="2" fontWeight="900">
        Discard
      </Heading>
      <Stack>
        {data
          .filter((card) => card.location === "discard")
          .map((card) => (
            <Card
              card={card}
              key={card.name}
              setCardLocation={setCardLocation}
            />
          ))}
      </Stack>
      <Heading as="h2" size="xl" p="2" fontWeight="900">
        Removed
      </Heading>
      <Stack>
        {data
          .filter((card) => card.location === "remove")
          .map((card) => (
            <Card
              card={card}
              key={card.name}
              setCardLocation={setCardLocation}
            />
          ))}
      </Stack>
      <Button mt="8" mb="4" onClick={() => setData([...cards])}>
        Reset
      </Button>
    </Stack>
  )
}
