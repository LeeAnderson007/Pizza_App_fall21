import React, { useState } from 'react';
import axios from 'axios';
import { Button, Popup } from "semantic-ui-react";
import { Link } from "react-router-dom";

const PizzaNew = (props) => {
  const [name, setName] = useState("")
  const [price, setPrice] = useState()
  const [description, setDescription] = useState("")
  const [error, setError] = useState(false)

const handleSubmit = async (e) => {
  e.preventDefault()
  setError(false)
  try {
  let res = await axios.post('/api/pizzas', {name, price, description})
  props.history.push("/pizzas");
  } catch (err) {
    setError(true);
  }

}

  return (
      <>
    <form onSubmit={handleSubmit}>
      <h1>Create a new pizza</h1>
      <Link to={`/pizzas`}>
        <Popup content='Go Back' trigger={<Button icon="angle left" color="blue" />} />
      </Link>
      {/* <div onClick={() => props.history.goBack()}>Back</div> */}
       {error && <p style={{ color: "red" }}>Error Occurred</p>}
        <div class="ui inverted segment">
        <div class="ui inverted form">
          <div class="two fields">
            <div class="field">
              <label>Name:</label>
              <input value={name} onChange={(e)=> setName(e.target.value)} placeholder="Name" type="text" />
            </div>
            <div class="field">
              <label>Price:</label>
              <input value={price} onChange={(e)=> setPrice(e.target.value) } placeholder="Price" type="text" />
            </div>
            <div class="field">
              <label>Description:</label>
              <input value={description} onChange={(e)=> setDescription(e.target.value) } placeholder="Description" type="text" />
            </div>
          </div>
          <div><Button class="ui button" inverted color='blue' type={'submit'}>Add Pizza</Button></div>
        </div>
      </div>
    </form>
    </>
  );
};

export default PizzaNew;