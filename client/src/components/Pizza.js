import React from "react";
import { Button, Popup } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Pizza = (props) => {
  return (
    <div>
      <h1>Pizza</h1>
      <Link to={`/pizzas`}>
        <Popup content='Go Back' trigger={<Button icon="angle left" color="blue" />} />
      </Link>

      <p>id: {props.match.params.id}</p>
    </div>
  );
};

export default Pizza;