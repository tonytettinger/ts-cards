import { CardStack } from "./CardStack";
import { Heading, Box } from "@chakra-ui/react";

export const CardCategory = ({ position, cards, setCardLocation }) => {
  const early = cards.filter((card) => card.stage === "early");
  const mid = cards.filter((card) => card.stage === "mid");
  const late = cards.filter((card) => card.stage === "late");

  return (
    <>
      <Heading as="h2" size="xl" p="2" fontWeight="900">
        {position}
      </Heading>
      <Box>
        <CardStack
          headingText="EARLY WAR"
          cards={early}
          setCardLocation={setCardLocation}
        />
        <CardStack
          headingText="MID WAR"
          cards={mid}
          setCardLocation={setCardLocation}
        />
        <CardStack
          headingText="LATE WAR"
          cards={late}
          setCardLocation={setCardLocation}
        />
      </Box>
    </>
  );
};
