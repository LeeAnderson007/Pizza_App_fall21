import React, { useState } from 'react';
import axios from 'axios';

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
      <div onClick={() => props.history.goBack()}>Back</div>
      <h1>Create a new pizza</h1>
       {error && <p style={{ color: "red" }}>Error Occurred</p>}
        <div class="ui inverted segment">
        <div class="ui inverted form">
          <div class="two fields">
            <div class="field">
              <label>Pizza Name</label>
              <input value={name} onChange={(e)=> setName(e.target.value)} placeholder="Pizza Name" type="text" />
            </div>
            <div class="field">
              <label>Price</label>
              <input value={price} onChange={(e)=> setPrice(e.target.value) } placeholder="Price" type="text" />
            </div>
            <div class="field">
              <label>Description</label>
              <input value={description} onChange={(e)=> setDescription(e.target.value) } placeholder="Description" type="text" />
            </div>
          </div>
          <div class="ui submit button"><button style={{border:"none"}} type={'submit'}>Add Pizza</button></div>
        </div>
      </div>
    </form>
    </>
  );
};

export default PizzaNew;