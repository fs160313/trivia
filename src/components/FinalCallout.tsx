import { Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useGameData } from "../providers/GameProvider/useGameData";
import { motion } from "framer-motion";

const MotionFlex = motion(Flex);

export const FinalCallout = () => {
  const { finalQuestion } = useGameData();

  return (
    <Link
      to="final"
      state={{ question: finalQuestion }}
      style={{ display: "flex" }}
    >
      <MotionFlex
        background="blue.700"
        border="1px solid white"
        align="center"
        justify="center"
        flex={1}
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.95,
        }}
      >
        <Text
          bg="blue.700"
          color="gold"
          fontSize="5xl"
          fontWeight="bold"
          textAlign="center"
          p={4}
        >
          FINAL
        </Text>
      </MotionFlex>
    </Link>
  );
};
