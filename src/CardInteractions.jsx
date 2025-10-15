import { Flex, IconButton } from "@chakra-ui/react";
import { GiCardDiscard } from "react-icons/gi";
import { IoTrashBinSharp } from "react-icons/io5";
import { MdOutlineFrontHand, MdFrontHand } from "react-icons/md";
import { PiCardsThreeBold } from "react-icons/pi";
import { Tooltip } from "./Tooltip";
import { GoStack } from "react-icons/go";

export const CardInteractions = ({ name, setCardLocation }) => (
  <Flex gap="2" alignItems="center" justifyContent="center" mx="auto" w="full">
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
        <MdFrontHand />
      </IconButton>
    </Tooltip>
    <Tooltip content="Put back card in the deck">
      <IconButton
        bg="#003366"
        color="#FFD700"
        size="xs"
        onClick={() => setCardLocation({ name, location: "deck" })}
      >
        <GoStack />
      </IconButton>
    </Tooltip>
    <Tooltip content="Put card in opponent's hand">
      <IconButton
        bg="#003366"
        color="#FFD700"
        size="xs"
        onClick={() => setCardLocation({ name, location: "opponent" })}
      >
        <MdOutlineFrontHand />
      </IconButton>
    </Tooltip>
  </Flex>
);
