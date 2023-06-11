import {
  Editable,
  EditableInput,
  EditablePreview,
  HStack,
  IconButton,
  Spacer,
} from "@chakra-ui/react";
import { FiDelete, FiCheckCircle } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import { Player } from "../../types/player";
import { useGameData } from "../../providers/GameProvider/useGameData";
import { Question } from "../../types/question";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const MotionEditable = motion(Editable);

interface ScoreboardItemProps {
  player: Player;
}

export const ScoreboardItem = ({ player }: ScoreboardItemProps) => {
  const { editPlayer, removePlayer } = useGameData();
  const [question, setQuestion] = useState<Question>();
  const [scoreAdded, setScoreAdded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setScoreAdded(false);
    if (location.state?.question) {
      setQuestion(location.state.question);
    } else {
      setQuestion(undefined);
    }
  }, [location]);

  const handleUpdateScore = () => {
    if (!question) {
      return;
    }
    if (!scoreAdded) {
      editPlayer({
        playerToEdit: player,
        newScore: player.score + question.value,
      });
      setScoreAdded(true);
    } else {
      editPlayer({
        playerToEdit: player,
        newScore: player.score - question.value,
      });
      setScoreAdded(false);
    }
  };

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
      <AnimatePresence mode="wait">
        <MotionEditable
          key={player.score.toString()}
          defaultValue={`$${player.score.toString()}`}
          onSubmit={(newScore: string) =>
            editPlayer({ playerToEdit: player, newScore: parseInt(newScore) })
          }
          initial={{
            opacity: 0,
            y: "-25%",
          }}
          animate={{ opacity: 100, y: 0 }}
          exit={{ opacity: 0, y: "25%", color: scoreAdded ? "red" : "green" }}
          transition={{ duration: 0.5 }}
        >
          <EditablePreview />
          <EditableInput />
        </MotionEditable>
        /
      </AnimatePresence>
      <Spacer />
      <IconButton
        icon={<FiCheckCircle />}
        variant="ghost"
        color={scoreAdded ? "gold" : "white"}
        colorScheme="whiteAlpha"
        aria-label="Remove Player"
        size="sm"
        onClick={handleUpdateScore}
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
