import { Card } from "./Card";
import { CardHeading } from "./CardHeading";
import { Box } from "@chakra-ui/react";

export const CardStack = ({ headingText, cards, setCardLocation }) => {
  return (
    <Box bg="white" border="1px solid black" borderRadius="md">
      <CardHeading headingText={headingText} />
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fill, minmax(250px, 1fr))"
        gap="1"
      >
        {cards.map((card) => (
          <Card key={card.name} card={card} setCardLocation={setCardLocation} />
        ))}
      </Box>
    </Box>
  );
};
