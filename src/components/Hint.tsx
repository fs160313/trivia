import { Flex, HStack, Icon, Spacer, Text, VStack } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { FiArrowRightCircle } from "react-icons/fi";
import { Question } from "../types/question";

export const Hint = () => {
  const location = useLocation();
  const { question }: { question: Question } = location.state;

  return (
    <Link to="/game/answer" state={{ question }}>
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
        >{`${question.category} - $${question.value} Question`}</Text>
        <Flex align="center" flex="1">
          <Text fontSize="7xl" align="center">
            {question.hint}
          </Text>
        </Flex>
        <HStack width="100%" color="gold" justify="right" fontSize="2xl">
          <Text>Click anywhere to proceed to answer</Text>
          <Icon as={FiArrowRightCircle} />
        </HStack>
      </VStack>
    </Link>
  );
};
