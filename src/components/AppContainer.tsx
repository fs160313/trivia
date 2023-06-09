import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { HStack } from "@chakra-ui/react";

export const AppContainer = () => {
  return (
    <HStack spacing="0">
      <Sidebar />
      <Outlet />
    </HStack>
  );
};
