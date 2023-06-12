import {
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  HStack,
  IconButton,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { FiDelete, FiCheckCircle } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import { Player } from "../../types/player";
import { useGameData } from "../../providers/GameProvider/useGameData";
import { Question } from "../../types/question";
import { useEffect, useRef, useState } from "react";
import { animate, motion } from "framer-motion";

const MotionEditable = motion(Editable);

interface ScoreboardItemProps {
  player: Player;
}

export const ScoreboardItem = ({ player }: ScoreboardItemProps) => {
  const { editPlayer, removePlayer } = useGameData();
  const [question, setQuestion] = useState<Question>();
  const [scoreAdded, setScoreAdded] = useState(false);
  const scoreDisplayRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const animateAndAddScore = () => {
    const scoreDisplay = scoreDisplayRef.current;

    if (!question || !scoreDisplay) {
      return;
    }

    scoreDisplay.setAttribute("style", "color: green");

    animate(
      scoreDisplay,
      { y: [0, -10], opacity: [1, 0] },
      { duration: 0.4 }
    ).then(() => {
      editPlayer({
        playerToEdit: player,
        newScore: player.score + question.value,
      });

      animate(
        scoreDisplay,
        { y: [10, 0], opacity: [0, 1] },
        { duration: 0.4 }
      ).then(() => scoreDisplay.setAttribute("style", "color: gold"));
      setScoreAdded(true);
    });
  };

  const animateAndSubtractScore = () => {
    const scoreDisplay = scoreDisplayRef.current;

    if (!question || !scoreDisplay) {
      return;
    }

    scoreDisplay.setAttribute("style", "color: red");

    animate(
      scoreDisplay,
      { y: [0, 10], opacity: [1, 0] },
      { duration: 0.4 }
    ).then(() => {
      editPlayer({
        playerToEdit: player,
        newScore: player.score - question.value,
      });
      animate(
        scoreDisplay,
        { y: [-10, 0], opacity: [0, 1] },
        { duration: 0.4 }
      ).then(() => scoreDisplay.setAttribute("style", "color: gold"));
      setScoreAdded(false);
    });
  };

  useEffect(() => {
    setScoreAdded(false);
    if (location.state?.question) {
      setQuestion(location.state.question);
    } else {
      setQuestion(undefined);
    }
  }, [location]);

  return (
    <HStack fontSize="1xl">
      <Editable
        key={player.name}
        defaultValue={player.name}
        onSubmit={(newName: string) =>
          editPlayer({ playerToEdit: player, newName })
        }
      >
        <EditablePreview />
        <EditableInput />
      </Editable>
      <div>-</div>
      <Flex ref={scoreDisplayRef}>
        <Text paddingBlock="4px">$</Text>
        <MotionEditable
          value={player.score.toString()}
          onChange={(newScore: string) =>
            parseInt(newScore) &&
            editPlayer({ playerToEdit: player, newScore: parseInt(newScore) })
          }
        >
          <EditablePreview />
          <EditableInput />
        </MotionEditable>
      </Flex>
      <Spacer />
      <IconButton
        icon={<FiCheckCircle />}
        variant="ghost"
        color={scoreAdded ? "gold" : "white"}
        colorScheme="whiteAlpha"
        aria-label="Remove Player"
        size="sm"
        onClick={scoreAdded ? animateAndSubtractScore : animateAndAddScore}
        visibility={location.pathname === "/game/answer" ? "visible" : "hidden"}
      />
      <IconButton
        icon={<FiDelete />}
        variant="ghost"
        color="white"
        colorScheme="whiteAlpha"
        aria-label="Remove Player"
        size="sm"
        onClick={() => removePlayer(player)}
      />
    </HStack>
  );
};
