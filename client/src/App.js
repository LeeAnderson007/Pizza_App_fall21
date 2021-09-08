import React from "react";
import './App.css';
import { Container } from "semantic-ui-react";
import Navbar from "./components/Navbar";
import { Switch, Route } from 'react-router';
import Pizzas from "./components/Pizzas";
import Home from "./components/Home";
import PizzaNew from "./components/PizzaNew";
import Pizza from "./components/Pizza";
import PizzaEdit from "./components/PizzaEdit";
import Topping from "./components/Topping";
import Toppings from "./components/Toppings";


function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pizzas" component={Pizzas} />
          <Route exact path="/pizzas/new" component={PizzaNew} />
          <Route exact path="/pizzas/:id" component={Pizza} />
          <Route exact path="/pizzas/:id/edit" component={PizzaEdit} />
          <Route exact path="/pizzas/:id/toppings" component={Toppings} />
          <Route exact path="/pizzas/:id/toppings/:id" component={Topping} />
        </Switch>
      </Container>  
    </>
  );
}

export default App;
