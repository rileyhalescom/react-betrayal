import React, {lazy, Suspense} from "react";
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";

import home from "./home.svg"

import "./App.css"

const Characters = lazy(() => import("./Pages/Characters"))
const CharacterCard = lazy(() => import("./Pages/CharacterCard"))
const Items = lazy(() => import("./Pages/Items"))
const Omens = lazy(() => import("./Pages/Omens"))


export default function App() {
  return (
    <div className={"app"}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <nav>
          <Link to="/"><img src={home} alt={"Home Icon"}></img></Link>
          <Link to="/characters">Characters</Link>
          <Link to="/items">Items</Link>
          <Link to="/omens">Omens</Link>
        </nav>
        <div className={"page-content-wrapper"}>
          <Switch>
            <Suspense fallback={<h1>loading...</h1>}>
              <Route exact path={"/"} component={Home}/>
              <Route exact path={"/characters"} component={Characters}/>
              <Route exact path={"/characters/:name"} component={CharacterCard}/>
              <Route exact path={"/items"} component={Items}/>
              <Route exact path={"/omens"} component={Omens}/>
            </Suspense>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

const Home = () => {
  return (
    <h1>home page</h1>
  )
}