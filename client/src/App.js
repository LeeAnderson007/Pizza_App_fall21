import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Pizzas from "./components/Pizzas"
import Pizza from "./components/Pizza"

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pizzas" component={Pizzas} />
          {/* <Route exact path="/pizzas/new" component={PizzaNew} /> */}
          <Route exact path="/pizzas/:id" component={Pizza} />
          {/* <Route exact path="/Pizzas/:id/edit" component={PizzaEdit} /> */}
        </Switch>
      </Container>
    </>
  );
}

export default App;
