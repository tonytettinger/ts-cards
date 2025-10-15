import { Flex, Button, HStack, Box, IconButton } from "@chakra-ui/react";
import { TbCards } from "react-icons/tb";
import { GiCardDiscard } from "react-icons/gi";
import { IoTrashBinSharp } from "react-icons/io5";
import { MdOutlineFrontHand } from "react-icons/md";
import { PiCardsThreeBold } from "react-icons/pi";
import { Tooltip } from "./Tooltip";
import { CardInteractions } from "./CardInteractions";

export const Card = ({ card: { name, ops, side }, setCardLocation }) => {
  const bgMap = new Map([
    ["ussr", "red"],
    ["us", "blue"],
    ["n", "grey"],
  ]);
  return (
    <Flex
      wrap="wrap"
      textAlign="center"
      bg="#e3f6ff"
      alignItems="center"
      p="2"
      position="relative"
    >
      <Flex alignItems="center" mx="auto" mb="1">
        <Box
          position="absolute"
          left="2"
          top="2"
          borderRadius="full"
          bg={bgMap.get(side)}
          width="3"
          h="3"
        />
        <Box display="inline" px="2">
          {ops}
        </Box>
        <Box
          maxW="130px"
          display="inline"
          overflow="hidden"
          whiteSpace="nowrap"
          textOverflow="ellipsis"
          mr="1"
        >
          {name}
        </Box>
      </Flex>
      <CardInteractions name={name} setCardLocation={setCardLocation} />
    </Flex>
  );
};
