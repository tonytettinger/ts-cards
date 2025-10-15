import { GiCardDiscard } from "react-icons/gi";
import { IoTrashBinSharp } from "react-icons/io5";
import { MdOutlineFrontHand, MdFrontHand } from "react-icons/md";
import { GoStack } from "react-icons/go";
import { IconButton, Text, Flex } from "@chakra-ui/react";

export const CardLegend = () => (
  <Flex
    padding="2"
    gap="2"
    border="2px solid black"
    borderRadius="md"
    mb="4"
    bg="lightgrey"
    wrap="wrap"
  >
    <Flex alignItems="center" gap="2">
      <IconButton bg="#003366" color="#FFD700" size="xs">
        <GiCardDiscard />
      </IconButton>
      <Text>Discard</Text>
    </Flex>
    <Flex alignItems="center" gap="2">
      <IconButton bg="#003366" color="#FFD700" size="xs">
        <IoTrashBinSharp />
      </IconButton>
      <Text>Remove</Text>
    </Flex>
    <Flex alignItems="center" gap="2">
      <IconButton bg="#003366" color="#FFD700" size="xs">
        <MdFrontHand />
      </IconButton>
      <Text>Hand</Text>
    </Flex>
    <Flex alignItems="center" gap="2">
      <IconButton bg="#003366" color="#FFD700" size="xs">
        <GoStack />
      </IconButton>
      <Text>Deck</Text>
    </Flex>
    <Flex alignItems="center" gap="2">
      <IconButton bg="#003366" color="#FFD700" size="xs">
        <MdOutlineFrontHand />
      </IconButton>
      <Text>Opponent</Text>
    </Flex>
  </Flex>
);
