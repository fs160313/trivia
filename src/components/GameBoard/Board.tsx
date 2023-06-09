import { HStack, StackDivider } from "@chakra-ui/react";
import { useGameData } from "../../providers/GameProvider/useGameData";
import { QuestionStack } from "./QuestionStack";

export const Board = () => {
  const { categories } = useGameData();

  if (!categories.length) {
    return null;
  }

  return (
    <HStack
      spacing={0}
      divider={<StackDivider />}
      border="1px solid white"
      height="100%"
    >
      {categories.map((category) => (
        <QuestionStack category={category} />
      ))}
    </HStack>
  );
};
