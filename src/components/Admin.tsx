import { Box } from "@chakra-ui/react";
import { QuestionUploadButton } from "./QuestionUploadButton";
import { useGameData } from "../providers/GameProvider/useGameData";

export const Admin = () => {
  const { questions } = useGameData();
  return (
    <Box>
      <QuestionUploadButton />
      {questions.map((question) => question.hint)}
    </Box>
  );
};
