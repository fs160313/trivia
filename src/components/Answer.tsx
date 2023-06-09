import { Text, Flex, HStack, Icon, VStack } from "@chakra-ui/react";
import { FiHome } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { Question } from "../types/question";

export const Answer = () => {
  const location = useLocation();
  const { question }: { question: Question } = location.state;
  return (
    <Link to="/game">
      <VStack
        width="100%"
        height="100%"
        color="white"
        border="1px solid white"
        padding="40px"
      >
        <Text
          fontSize="7xl"
          fontWeight={"bold"}
        >{`${question.category} - $${question.value} Answer`}</Text>
        <Flex align="center" flex="1">
          <Text fontSize="7xl" align="center">
            {question.answer}
          </Text>
        </Flex>
        <HStack width="100%" color="gold" justify="right" fontSize="2xl">
          <Text>Click anywhere to return to the board</Text>
          <Icon as={FiHome} />
        </HStack>
      </VStack>
    </Link>
  );
};
