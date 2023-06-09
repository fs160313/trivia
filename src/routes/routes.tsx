import { Route } from "react-router-dom";
import { Admin } from "../components/Admin/Admin";
import { AppContainer } from "../components/AppContainer";
import { GameContainer } from "../components/GameContainer";
import { Board } from "../components/GameBoard/Board";
import { Hint } from "../components/Hint";
import { Answer } from "../components/Answer";

export const routes = (
  <>
    <Route path="/" element={<AppContainer />}>
      <Route path="game" element={<GameContainer />}>
        <Route index element={<Board />} />
        <Route path="hint" element={<Hint />} />
        <Route path="answer" element={<Answer />} />
      </Route>
      <Route path="admin" element={<Admin />}></Route>
    </Route>
  </>
);
