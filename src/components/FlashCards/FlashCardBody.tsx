import { VStack, Flex, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { NextCTA } from "./NextCTA";

interface FlashCardBodyProps {
  headerText: string;
  bodyText: string;
  footerText: string;
  footerIcon: IconType;
}

export const FlashCardBody = (props: FlashCardBodyProps) => {
  const { headerText, bodyText, footerIcon, footerText } = props;
  return (
    <VStack
      flex={1}
      color="white"
      border="1px solid white"
      padding="40px"
      background="blue.700"
      overflow={"auto"}
    >
      <Text fontSize="7xl" fontWeight={"bold"}>
        {headerText}
      </Text>
      <Flex align="center" flex="1">
        <Text fontSize="5xl" align="center">
          {bodyText}
        </Text>
      </Flex>
      <NextCTA icon={footerIcon} text={footerText} />
    </VStack>
  );
};
