import { Divider, VStack } from "@chakra-ui/react";
import { useGameData } from "../../providers/GameProvider/useGameData";
import { ScoreboardItem } from "./ScoreboardItem";
import { AddPlayer } from "./AddPlayer";
import { AnimatePresence, motion } from "framer-motion";

export const Scoreboard = () => {
  const { players } = useGameData();

  return (
    <VStack>
      <AnimatePresence>
        {players.map((player) => (
          <motion.div
            key={player.id}
            initial={{ x: "-100%" }}
            animate={{ x: "0" }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.2 }}
            style={{ width: "100%" }}
          >
            <ScoreboardItem player={player} />
            <Divider />
          </motion.div>
        ))}
      </AnimatePresence>
      <AddPlayer />
    </VStack>
  );
};
