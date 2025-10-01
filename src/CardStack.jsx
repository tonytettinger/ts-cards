import { Card } from "./Card";
import { CardHeading } from "./CardHeading";
import { Stack } from "@chakra-ui/react";

export const CardStack = ({ headingText, cards, setCardLocation }) => {
  return (
    <>
      <CardHeading headingText={headingText} />
      <Stack>
        {cards.map((card) => (
          <Card card={card} key={card.name} setCardLocation={setCardLocation} />
        ))}
      </Stack>
    </>
  );
};
