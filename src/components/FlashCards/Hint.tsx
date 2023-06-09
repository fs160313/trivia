import { Link, useLocation } from "react-router-dom";
import { Question } from "../../types/question";
import { FlashCardBody } from "./FlashCardBody";
import { FiArrowRightCircle } from "react-icons/fi";

export const Hint = () => {
  const location = useLocation();
  const { question }: { question: Question } = location.state;
  const headerText = `${question.category} - 
  ${question.final ? "Final" : `$${question.value}`} Question`;
  const bodyText = question.hint;
  const footerText = "Click anywhere to proceed to answer";

  return (
    <Link
      to={"/game/answer"}
      state={{ question }}
      style={{ display: "flex", flex: 1, width: "100%" }}
    >
      <FlashCardBody
        headerText={headerText}
        bodyText={bodyText}
        footerText={footerText}
        footerIcon={FiArrowRightCircle}
      />
    </Link>
  );
};
