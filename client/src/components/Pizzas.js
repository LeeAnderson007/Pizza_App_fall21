import React, {useState, useEffect} from "react";
import axios from "axios";
import { Button, Card, Icon, Popup } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Pizzas = () => {
  const [pizzas, setPizzas] = useState([]);
  useEffect(() => {
    getPizzas();
  }, []);

  const getPizzas = async () => {
    try {
      let res = await axios.get(`/api/pizzas`);
      setPizzas(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deletePizza = async (id) => {
    try {
      let res = await axios.delete(`/api/pizzas/${id}`);
      setPizzas(pizzas.filter((p) => p.id !== id));
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
        <Button.Group vertical>
          <Link to={`/pizzas/${p.id}/toppings`}>
            <Button color="blue">Toppings</Button>
          </Link>
          <Button.Group basic centered vertical>
            <Link to={`/pizzas/${p.id}/edit`}>
              <Button icon>
                <Popup content="Edit" trigger={<Icon name="edit" color="blue" />} />
              </Button>
            </Link>
            <Button.Group>
              <Button icon>
                <Popup content="Delete" trigger={<Icon name="trash" color="red" background="red" onClick={() => deletePizza(p.id)} />} />
              </Button>
            </Button.Group>
          </Button.Group>
        </Button.Group>
        </Card>
      );
    });
  };
  return (
    <div>
      <h1>Pizzas</h1>
      <Link to={`/pizzas/new`}>
        <Popup content="New" trigger={<Button icon="file" color="blue" />} />
      </Link>
      <br />
      <br />
      <Card.Group>{renderPizzas()}</Card.Group>
     
    </div>
  );
};
export default Pizzas;