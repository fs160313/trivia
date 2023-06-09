import { VStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { TitleBarWithFinalCallout } from "./TitleBarWithFinalCallout";
import { useGameData } from "../providers/GameProvider/useGameData";

export const GameContainer = () => {
  const { questions, finalQuestion } = useGameData();
  if (!questions.length || !finalQuestion) {
    return null;
  }

  return (
    <VStack flex={1}>
      <TitleBarWithFinalCallout />
      <Outlet />
    </VStack>
  );
};
