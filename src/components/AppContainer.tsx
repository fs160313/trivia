import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Flex, HStack } from "@chakra-ui/react";

export const AppContainer = () => {
  return (
    <HStack spacing="0" height="100vh">
      <Sidebar />
      <Flex bg="blue.900" p={"12"} flex={1} height="100%">
        <Outlet />
      </Flex>
    </HStack>
  );
};
