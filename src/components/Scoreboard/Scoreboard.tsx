import { StackDivider, VStack } from "@chakra-ui/react";
import { useGameData } from "../../providers/GameProvider/useGameData";
import { ScoreboardItem } from "./ScoreboardItem";
import { AddPlayer } from "./AddPlayer";

export const Scoreboard = () => {
  const { players } = useGameData();

  return (
    <VStack divider={<StackDivider />}>
      {players.map((player, index) => (
        <ScoreboardItem player={player} key={index} />
      ))}
      <AddPlayer />
    </VStack>
  );
};
