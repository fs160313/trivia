import {
  VStack,
  Button,
  ButtonProps,
  Link,
  HStack,
  Flex,
} from "@chakra-ui/react";
import { ReactComponentElement } from "react";
import { IconType } from "react-icons";
import { FiHome, FiSettings } from "react-icons/fi";
import { Link as RouterLink } from "react-router-dom";
import { Scoreboard } from "./Scoreboard";

interface SidebarItemProps extends ButtonProps {
  icon: ReactComponentElement<IconType>;
  label: string;
  to: string;
}

const SidebarItem = (props: SidebarItemProps) => {
  const { icon, label, to, ...rest } = props;
  return (
    <Link as={RouterLink} to={to} textDecoration="none">
      <Button
        variant="outline"
        color="white"
        leftIcon={icon}
        justifyContent="flex-start"
        _hover={{ backgroundColor: "blue.500", color: "white" }}
        _focus={{ outline: "none" }}
        aria-label={label}
        size="sm"
        {...rest}
      >
        {label}
      </Button>
    </Link>
  );
};

export const Sidebar = () => {
  return (
    <Flex
      bg="blue.700"
      height="100%"
      borderRight="1px solid white"
      display="flex"
      flexDirection="column"
      alignItems="center"
      boxShadow="lg"
      color="gold"
      padding={8}
      flexShrink={1}
    >
      <VStack>
        <HStack spacing={4} align="stretch">
          <SidebarItem icon={<FiHome />} label="Home" to="game" />
          <SidebarItem icon={<FiSettings />} label="Settings" to="admin" />
        </HStack>
        <Scoreboard />
      </VStack>
    </Flex>
  );
};
