import { Flex, Button, HStack, Box, IconButton } from "@chakra-ui/react";
import { TbCards } from "react-icons/tb";
import { GiCardDiscard } from "react-icons/gi";
import { IoTrashBinSharp } from "react-icons/io5";
import { MdOutlineFrontHand } from "react-icons/md";
import { PiCardsThreeBold } from "react-icons/pi";
import { Tooltip } from "./Tooltip";

export const Card = ({ card: { name, ops, side }, setCardLocation }) => {
  const bgMap = new Map([
    ["ussr", "red"],
    ["us", "blue"],
    ["n", "grey"],
  ]);
  return (
    <Flex bg="#e3f6ff" alignItems="center" p="2">
      <Box borderRadius="full" bg={bgMap.get(side)} minWidth="3" h="3" />
      <Box display="inline" p="2">
        {ops}
      </Box>
      <Box display="inline" overflow="hidden" textOverflow="ellipsis" mr="1">
        {name}
      </Box>
      <HStack ml="auto">
      <Tooltip content="Discard card">
        <IconButton
            bg="#003366"
            color="#FFD700"
            size="xs"
            onClick={() => setCardLocation({ name, location: "discard" })}
          >
            <GiCardDiscard />
          </IconButton>
        </Tooltip>
        <Tooltip content="Remove card from game">
                <IconButton
            bg="#003366"
            color="#FFD700"
            size="xs"
            onClick={() => setCardLocation({ name, location: "remove" })}
          >
            <IoTrashBinSharp />
          </IconButton>
        </Tooltip>
        <Tooltip content="Put card in hand">
          <IconButton
            bg="#003366"
            color="#FFD700"
            size="xs"
            onClick={() => setCardLocation({ name, location: "hand" })}
          >
            <MdOutlineFrontHand />
          </IconButton>
        </Tooltip>
        <Tooltip content="Put back card in the deck">
          <IconButton
            bg="#003366"
            color="#FFD700"
            size="xs"
            onClick={() => setCardLocation({ name, location: "deck" })}
          >
            <PiCardsThreeBold />
          </IconButton>
        </Tooltip>
      </HStack>
    </Flex>
  );
};
