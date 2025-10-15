import { CardStack } from "./CardStack";
import { Heading, Box, Flex } from "@chakra-ui/react";

export const CardCategory = ({ position, cards, setCardLocation }) => {
  const early = cards.filter((card) => card.stage === "early");
  const mid = cards.filter((card) => card.stage === "mid");
  const late = cards.filter((card) => card.stage === "late");
  if (cards.length === 0) return null;
  return (
    <Box bg="lightgrey" border="2px solid black" borderRadius="md" p="2" mb="2">
      <Heading as="h2" size="lg" fontWeight="900">
        {position}
      </Heading>
      <Flex flexDirection="column" gap="1">
        <CardStack
          headingText="EARLY WAR"
          cards={early}
          setCardLocation={setCardLocation}
        />
        {mid.length !== 0 && (
          <CardStack
            headingText="MID WAR"
            cards={mid}
            setCardLocation={setCardLocation}
          />
        )}
        {late.length !== 0 && (
          <CardStack
            headingText="LATE WAR"
            cards={late}
            setCardLocation={setCardLocation}
          />
        )}
      </Flex>
    </Box>
  );
};
