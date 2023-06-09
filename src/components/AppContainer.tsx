import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Box, HStack } from "@chakra-ui/react";

export const AppContainer = () => {
  return (
    <HStack spacing="0">
      <Sidebar />
      <Box bg="blue.900" p={"12"} w="100%" h="100vh">
        <Outlet />
      </Box>
    </HStack>
  );
};
