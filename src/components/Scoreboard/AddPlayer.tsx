import {
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";
import { useGameData } from "../../providers/GameProvider/useGameData";
import { useRef, useState } from "react";

export const AddPlayer = () => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const { addPlayer, players } = useGameData();
  const [playerName, setPlayerName] = useState("");

  const handleAddPlayer = () => {
    if (playerName && !players.find((player) => player.name === playerName)) {
      addPlayer(playerName);
      setPlayerName("");
      nameInputRef.current?.focus();
    }
  };

  return (
    <HStack>
      <InputGroup>
        <Input
          placeholder="Player Name"
          onChange={(e) => {
            setPlayerName(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAddPlayer();
            }
          }}
          value={playerName}
          ref={nameInputRef}
        />
        <InputRightElement>
          <IconButton
            icon={<FiPlus />}
            variant="ghost"
            color="white"
            colorScheme="whiteAlpha"
            aria-label="Add Player"
            size="sm"
            onClick={handleAddPlayer}
          />
        </InputRightElement>
      </InputGroup>
    </HStack>
  );
};
