import Home from "./components/home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Avengers from "./components/moviesList/Avengers";
import Batman from "./components/moviesList/Batman";
import Fast9 from "./components/moviesList/Fast9";
import Kgf from "./components/moviesList/Kgf";
import Lotr from "./components/moviesList/Lotr";
import Pathan from "./components/moviesList/Pathan";
import Pushpa from "./components/moviesList/Pushpa";
import Sultan from "./components/moviesList/Sultan";
import Uiavengers from "./components/moviesList/Uiavengers";
import Uibatman from "./components/moviesList/Uibatman";
import Uifast9 from "./components/moviesList/Uifast9";
import Uikgf from "./components/moviesList/Uikgf";
import Uilotr from "./components/moviesList/Uilotr";
import Uipathan from "./components/moviesList/Uipathan";
import Uipushpa from "./components/moviesList/Uipushpa";
import Uisultan from "./components/moviesList/Uisultan";
import Bookedtickets from "./Bookedtickets";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path={"/"} exact>
            <Home />
          </Route>
          <Route path={"/avengers"}>
            <Avengers />
          </Route>
          <Route path={"/batman"}>
            <Batman />
          </Route>
          <Route path={"/fast9"}>
            <Fast9 />
          </Route>
          <Route path={"/kgf"}>
            <Kgf />
          </Route>
          <Route path={"/lotr"} exact>
            <Lotr />
          </Route>
          <Route path={"/pathan"} exact>
            <Pathan />
          </Route>
          <Route path={"/pushpa"}>
            <Pushpa />
          </Route>
          <Route path={"/sultan"}>
            <Sultan />
          </Route>
          <Route path={"/Uiavengers"}>
            <Uiavengers />
          </Route>
          <Route path={"/Uibatman"}>
            <Uibatman />
          </Route>
          <Route path={"/Uifast9"}>
            <Uifast9 />
          </Route>
          <Route path={"/Uikgf"}>
            <Uikgf />
          </Route>
          <Route path={"/Uilotr"}>
            <Uilotr />
          </Route>
          <Route path={"/Uipathan"}>
            <Uipathan />
          </Route>
          <Route path={"/Uipushpa"}>
            <Uipushpa />
          </Route>
          <Route path={"/Uisultan"}>
            <Uisultan />
          </Route>
          <Route path={"/booked"}>
            <Bookedtickets />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
