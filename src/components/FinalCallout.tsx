import { Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useGameData } from "../providers/GameProvider/useGameData";

export const FinalCallout = () => {
  const { finalQuestion } = useGameData();

  return (
    <Link
      to="final"
      state={{ question: finalQuestion }}
      style={{ display: "flex" }}
    >
      <Flex
        background="blue.700"
        border="1px solid white"
        align="center"
        justify="center"
        flex={1}
      >
        <Text
          bg="blue.700"
          color="gold"
          fontSize="5xl"
          fontWeight="bold"
          textAlign="center"
          p={4}
        >
          FINAL
        </Text>
      </Flex>
    </Link>
  );
};
