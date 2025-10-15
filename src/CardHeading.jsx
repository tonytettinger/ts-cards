import { Heading } from "@chakra-ui/react";

export const CardHeading = ({ headingText }) => (
  <Heading as="h3" size="sm" p="1" bg="#00accf" color="white" fontWeight="900" borderTopRightRadius="sm" borderTopLeftRadius="sm">
    {headingText}
  </Heading>
);
