import { useGameData } from "../../providers/GameProvider/useGameData";
import { Question } from "../../types/question";
import { fileToJson } from "../../util/fileToJson";
import { FileUploadButton } from "./FileUploadButton";

function isQuestion(obj: unknown): obj is Question {
  return (
    obj !== null &&
    typeof obj === "object" &&
    "hint" in obj &&
    typeof (obj as Question).hint === "string" &&
    "answer" in obj &&
    typeof (obj as Question).answer === "string" &&
    "value" in obj &&
    typeof (obj as Question).value === "number" &&
    "category" in obj &&
    typeof (obj as Question).category === "string"
  );
}

function isQuestionArray(obj: unknown): obj is Question[] {
  if (Array.isArray(obj)) {
    return obj.every((item) => isQuestion(item));
  }
  return false;
}

export const QuestionUploadButton = () => {
  const { setQuestions, setFinalQuestion } = useGameData();

  const handleQuestionsUpload = (file: File) => {
    fileToJson(file).then((jsonBlob) => {
      if (!isQuestionArray(jsonBlob)) {
        throw new Error(
          "Error when parsing uploaded questions file, ensure it is properly formatted."
        );
      }

      const questions = jsonBlob.filter((question) => !question.final);
      const finalQuestion = jsonBlob.find((question) => question.final);

      if (!questions.length || !finalQuestion) {
        throw new Error("No questions provided or final question not found.");
      }

      setQuestions(questions);
      setFinalQuestion(finalQuestion);
    });
  };

  return (
    <FileUploadButton
      label={"Upload Questions"}
      onChange={handleQuestionsUpload}
    />
  );
};
