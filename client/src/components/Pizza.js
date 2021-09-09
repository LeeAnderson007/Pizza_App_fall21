import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Pizza = (props) => {
  return (
    <div>
      <h1>Pizza</h1>
      <Link to={`/pizzas`}>
        <Button color="blue">Go Back</Button>
      </Link>
      <p>id: {props.match.params.id}</p>
    </div>
  );
};

export default Pizza;
