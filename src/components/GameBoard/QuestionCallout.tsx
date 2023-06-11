import { Flex, Text } from "@chakra-ui/react";
import { Question } from "../../types/question";
import { Link } from "react-router-dom";
import { useGameData } from "../../providers/GameProvider/useGameData";
import { motion } from "framer-motion";

const MotionFlex = motion(Flex);

interface QuestionCalloutProps {
  question: Question;
}

export const QuestionCallout = ({ question }: QuestionCalloutProps) => {
  const { setQuestionVisitStatus } = useGameData();
  return (
    <Link
      to="/game/hint"
      state={{ question }}
      onClick={(e) => question.visited && e.preventDefault()}
      style={{ display: "flex", flex: 1, width: "100%" }}
    >
      <MotionFlex
        background="blue.700"
        onClick={() => setQuestionVisitStatus(question, true)}
        onContextMenu={(e) => {
          e.preventDefault();
          setQuestionVisitStatus(question, false);
        }}
        align="center"
        justify="center"
        opacity={question.visited ? "25%" : "100%"}
        flex={1}
        whileHover={
          !question.visited && {
            boxShadow: "inset 0 0 10px black",
          }
        }
        whileTap={
          !question.visited && {
            boxShadow: "inset 0 0 30px black",
          }
        }
      >
        <Text
          color="gold"
          fontSize="5xl"
          fontWeight="bold"
          textAlign="center"
          p={4}
        >
          ${question.value}
        </Text>
      </MotionFlex>
    </Link>
  );
};
