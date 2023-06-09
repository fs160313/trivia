import { Link, useLocation } from "react-router-dom";
import { Question } from "../../types/question";
import { FlashCardBody } from "./FlashCardBody";
import { FiHome } from "react-icons/fi";

export const Answer = () => {
  const location = useLocation();
  const { question }: { question: Question } = location.state;
  const headerText = `${question.category} - 
  ${question.final ? "Final" : `$${question.value}`} Answer`;
  const bodyText = question.answer;
  const footerText = "Click anywhere to return to the board";

  return (
    <Link
      to={"/game"}
      state={{ question }}
      style={{ display: "flex", flex: 1, width: "100%", overflow: "auto" }}
    >
      <FlashCardBody
        headerText={headerText}
        bodyText={bodyText}
        footerText={footerText}
        footerIcon={FiHome}
      />
    </Link>
  );
};
