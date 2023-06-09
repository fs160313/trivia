import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { GameDataProvider } from "./providers/GameProvider/GameDataProvider.tsx";
import { routes } from "./routes/routes.tsx";

const router = createBrowserRouter(createRoutesFromElements(routes));

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <GameDataProvider>
        <RouterProvider router={router} />
      </GameDataProvider>
    </ChakraProvider>
  </React.StrictMode>
);
