import { Flex, Text } from "@chakra-ui/react";
import { Question } from "../../types/question";
import { Link } from "react-router-dom";
import { useGameData } from "../../providers/GameProvider/useGameData";

interface QuestionCalloutProps {
  question: Question;
}

export const QuestionCallout = ({ question }: QuestionCalloutProps) => {
  const { setQuestionVisitStatus } = useGameData();
  return (
    <Link
      to="hint"
      state={{ question }}
      onClick={(e) => question.visited && e.preventDefault()}
      style={{ width: "100%", height: "100%" }}
    >
      <Flex
        width="100%"
        height="100%"
        background="blue.700"
        onClick={() => setQuestionVisitStatus(question, true)}
        onContextMenu={(e) => {
          e.preventDefault();
          setQuestionVisitStatus(question, false);
        }}
        align="center"
        justify="center"
        opacity={question.visited ? "25%" : "100%"}
      >
        <Text
          bg="blue.700"
          color="gold"
          fontSize="5xl"
          fontWeight="bold"
          textAlign="center"
          p={4}
        >
          ${question.value}
        </Text>
      </Flex>
    </Link>
  );
};
