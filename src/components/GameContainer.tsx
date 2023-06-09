import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export const GameContainer = () => {
  return (
    <Box bg="blue.900" p={"24"} w="100%" h="100vh">
      <Outlet />
    </Box>
  );
};
