import { Link, useLocation } from "react-router-dom";
import { Question } from "../../types/question";
import { FlashCardBody } from "./FlashCardBody";
import { FiArrowRightCircle } from "react-icons/fi";

export const Category = () => {
  const location = useLocation();
  const { question }: { question: Question } = location.state;
  const headerText = "FINAL";
  const bodyText = question.category;
  const footerText = "Click anywhere to proceed to the final question";

  return (
    <Link
      to={"/game/hint"}
      state={{ question }}
      style={{ display: "flex", flex: 1, width: "100%", overflow: "auto" }}
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
