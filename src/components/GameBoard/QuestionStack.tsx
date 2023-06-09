import { StackDivider, VStack } from "@chakra-ui/react";
import { useGameData } from "../../providers/GameProvider/useGameData";
import { CategoryCallout } from "./CategoryCallout";
import { QuestionCallout } from "./QuestionCallout";

interface QuestionStackProps {
  category: string;
}

export const QuestionStack = ({ category }: QuestionStackProps) => {
  const { questions } = useGameData();
  const questionsInCategory = questions
    .filter((question) => question.category === category)
    .sort((a, b) => a.value - b.value);

  return (
    <VStack spacing={0} divider={<StackDivider />} flex={1} height="100%">
      <CategoryCallout category={category} />
      {questionsInCategory.map((question) => (
        <QuestionCallout question={question} />
      ))}
    </VStack>
  );
};
