import React, { createContext, useMemo, useState } from "react";
import { isEqual } from "lodash";
import { Player } from "../../types/player";
import { Question } from "../../types/question";

export interface GameDataContextState {
  players: Player[];
  questions: Question[];
  categories: string[];
  finalQuestion: Question | undefined;
  addPlayer: (playerName: string) => void;
  removePlayer: (playerToRemove: Player) => void;
  editPlayer: ({
    playerToEdit,
    newScore,
    newName,
  }: {
    playerToEdit: Player;
    newScore?: number;
    newName?: string;
  }) => void;
  loadPlayers: (playerNames: string[]) => void;
  setQuestions: React.Dispatch<React.SetStateAction<Question[]>>;
  setQuestionVisitStatus: (question: Question, visited: boolean) => void;
  setFinalQuestion: React.Dispatch<React.SetStateAction<Question | undefined>>;
}

interface GameDataProviderProps {
  children: React.ReactNode;
}

export const GameDataContext = createContext<GameDataContextState | undefined>(
  undefined
);

export const GameDataProvider: React.FC<GameDataProviderProps> = ({
  children,
}) => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [finalQuestion, setFinalQuestion] = useState<Question>();

  const addPlayer = (playerName: string) => {
    setPlayers([...players, { name: playerName, score: 0 }]);
  };

  const removePlayer = (playerToRemove: Player) => {
    setPlayers(players.filter((player) => !isEqual(player, playerToRemove)));
  };

  const editPlayer = ({
    playerToEdit,
    newScore,
    newName,
  }: {
    playerToEdit: Player;
    newScore?: number;
    newName?: string;
  }) => {
    const playerIndex = players.findIndex((player) =>
      isEqual(player, playerToEdit)
    );
    const newPlayer: Player = {
      ...playerToEdit,
      score: newScore !== undefined ? newScore : playerToEdit.score,
      name: newName !== undefined ? newName : playerToEdit.name,
    };
    setPlayers([
      ...players.slice(0, playerIndex),
      newPlayer,
      ...players.slice(playerIndex + 1),
    ]);
  };

  const setQuestionVisitStatus = (
    questionToEdit: Question,
    visited: boolean
  ) => {
    const questionIndex = questions.findIndex((question) =>
      isEqual(question, questionToEdit)
    );
    setQuestions([
      ...questions.slice(0, questionIndex),
      { ...questionToEdit, visited },
      ...questions.slice(questionIndex + 1),
    ]);
  };

  const loadPlayers = (playerNames: string[]) => {
    setPlayers(
      playerNames.map((playerName) => ({ name: playerName, score: 0 }))
    );
  };

  const categories = useMemo(
    () =>
      questions.reduce((categories, question) => {
        if (!categories.includes(question.category)) {
          categories.push(question.category);
        }

        return categories;
      }, [] as string[]),
    [questions]
  );

  return (
    <GameDataContext.Provider
      value={{
        players,
        categories,
        questions,
        finalQuestion,
        addPlayer,
        removePlayer,
        editPlayer,
        loadPlayers,
        setQuestions,
        setQuestionVisitStatus,
        setFinalQuestion,
      }}
    >
      {children}
    </GameDataContext.Provider>
  );
};
