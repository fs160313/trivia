import { useContext } from "react";
import { GameDataContext, GameDataContextState } from "./GameDataProvider";

export const useGameData = (): GameDataContextState => {
  const gameDataContext = useContext(GameDataContext);
  if (!gameDataContext) {
    throw new Error("useGameData must be used within a GameData");
  }
  return gameDataContext;
};
