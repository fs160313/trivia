import { HStack, Text } from "@chakra-ui/react";
import { FinalCallout } from "./FinalCallout";

export const TitleBarWithFinalCallout = () => {
  return (
    <HStack width="100%">
      <Text
        marginLeft={"72px"}
        fontSize="7xl"
        fontWeight="extrabold"
        color="gold"
        flex={1}
      >
        Auto Trivia: <span style={{ color: "white" }}>Extreme</span>
      </Text>
      <FinalCallout />
    </HStack>
  );
};
