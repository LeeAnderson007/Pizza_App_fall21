import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Button, Card } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Pizzas = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    getPizzas();
  }, []);

  const getPizzas = async () => {
    try {
      let res = await axios.get("/api/pizzas");
      setPizzas(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const renderPizzas = () => {
    return pizzas.map((p) => {
      return (
        <Card>
        <Card.Content header={p.name} />
        <Card.Content description={p.description} />
        <Card.Content extra>Price: {p.price}</Card.Content>
        <Button.Group>
          <Link to={`/pizzas/${p.id}`}>
            <Button icon="file alternate outline" color="blue" />
          </Link>
          <Link to={`/pizzas/${p.id}/edit`}>
            <Button icon="edit" color="blue" />
          </Link>
          {/* <Button icon="delete" color="red" onClick={() => deletePizza(p.id)} /> */}
        </Button.Group>
        </Card>
      );
    });
  };

  return (
    <div>
      <h1>Pizzas</h1>
      <Link to={`/pizzas/new`}>
        <Button icon="file" color="blue" />
      </Link>
      <Card.Group>{renderPizzas()}</Card.Group>
      
    </div>
  );



};

export default Pizzas;

