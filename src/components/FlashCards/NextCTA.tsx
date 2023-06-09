import { HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface NextCTAProps {
  icon: IconType;
  text: string;
}

export const NextCTA = (props: NextCTAProps) => {
  const { icon, text } = props;
  return (
    <HStack width="100%" color="gold" justify="right" fontSize="2xl">
      <Text>{text}</Text>
      <Icon as={icon} />
    </HStack>
  );
};
