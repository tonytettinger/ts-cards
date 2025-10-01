import { Heading } from "@chakra-ui/react";

export const CardHeading = ({ headingText }) => (
  <Heading as="h3" size="sm" p="4" bg="#00accf" color="white" fontWeight="900">
    {headingText}
  </Heading>
);
