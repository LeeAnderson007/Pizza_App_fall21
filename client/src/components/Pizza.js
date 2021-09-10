import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Pizza = (props) => {
  return (
    <div>
      <h1>Pizza</h1>
      <Button.Group>
      <Link to={`/pizzas`}>
        <Button color="blue">Go Back</Button>
      </Link>
      <Link to={`/toppings`}>
        <Button color="blue">Toppings</Button>
      </Link>
      <p>id: {props.match.params.id}</p>
      </Button.Group>
    </div>
  );
};

export default Pizza;

{/* <Link to={`/pizzas/${p.id}/toppings`}>
<Button color="blue" />
</Link> */}