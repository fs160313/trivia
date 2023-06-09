import { Flex, Text } from "@chakra-ui/react";

interface CategoryCalloutProps {
  category: string;
}

export const CategoryCallout = ({ category }: CategoryCalloutProps) => {
  return (
    <Flex
      width="100%"
      height="100%"
      background="blue.700"
      align="center"
      justify="center"
    >
      <Text
        bg="blue.700"
        color="white"
        fontSize="6xl"
        fontWeight="bold"
        textAlign="center"
        p={2}
      >
        {category}
      </Text>
    </Flex>
  );
};
