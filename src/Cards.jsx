import cards from "./assets/cards.json";
import { Card } from "./Card";
import { useState, useEffect } from "react";
import { Stack, Box, Heading, Button } from "@chakra-ui/react";
import { CardCategory } from "./CardCategory";
import { Tooltip } from "./Tooltip";
const colorOrder = {
  us: 1,
  ussr: 2,
  n: 3,
};

export const Cards = () => {
  useEffect(() => {
    if (localStorage.getItem("cardsData")) {
      const localStorageData = JSON.parse(localStorage.getItem("cardsData"));
      setData(localStorageData);
    }
  }, []);

  const [data, setData] = useState([...cards]);
  const setCardLocation = ({ name, location }) => {
    setData((prev) => {
      const cardLocations = prev.map((card) =>
        card.name === name ? { ...card, location } : card
      );
      localStorage.setItem("cardsData", JSON.stringify(cardLocations));
      return cardLocations;
    });
  };

  const sortedCards = data.sort((a, b) => {
    if (a.ops !== b.ops) {
      return b.ops - a.ops;
    }
    return colorOrder[a.side] - colorOrder[b.side];
  });

  const deck = sortedCards.filter((card) => card.location === "deck");
  const hand = sortedCards.filter((card) => card.location === "hand");
  const opponent = sortedCards.filter((card) => card.location === "opponent");
  const discard = sortedCards.filter((card) => card.location === "discard");
  const remove = sortedCards.filter((card) => card.location === "remove");

  return (
    <>
      <CardCategory
        position="Hand"
        cards={hand}
        setCardLocation={setCardLocation}
      />
      <CardCategory
        position="Opponent"
        cards={opponent}
        setCardLocation={setCardLocation}
      />
      <CardCategory
        position="Deck"
        cards={deck}
        setCardLocation={setCardLocation}
      />
      <CardCategory
        position="Discard"
        cards={discard}
        setCardLocation={setCardLocation}
      />
      <CardCategory
        position="Removed"
        cards={remove}
        setCardLocation={setCardLocation}
      />
      <Tooltip content="Reset to initial state">
        <Button
          bg="#003366"
          color="white"
          variant="solid"
          mt="8"
          mb="4"
          onClick={() => setData([...cards])}
        >
          Reset
        </Button>
      </Tooltip>
      <Box mt="4" mb="4" textAlign="center" bg="white" p="2">
        <span>
          For improvement suggestions, contact me on{" "}
          <a
            href="https://www.linkedin.com/in/antal-tettinger/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#0077b5", fontWeight: "bold" }}
          >
            LinkedIn
          </a>
          .
        </span>
      </Box>
    </>
  );
};
