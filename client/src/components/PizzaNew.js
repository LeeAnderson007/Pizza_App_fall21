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
  let pizza = {name, price, description}
  let res = await axios.post('/api/pizzas', pizza)
  props.history.push("/pizzas");
  } catch (err) {
    setError(true);
  }

}

  return (
    // <div>
    //   <h1>Create a New Pizza</h1>
    //   <div onClick={() => props.history.goBack()}>Back</div>
    //   {error && <p style={{ color: "red" }}>Error Occurred</p>}
    //   <form onSubmit={handleSubmit}>
    //     <p>Name</p>
    //     <input value={name} onChange={(e)=> setName(e.target.value) } /> 
    //     <p>Price</p>
    //     <input value={price} onChange={(e)=> setPrice(e.target.value) } /> 
    //     <p>Description</p>
    //     <input value={description} onChange={(e)=> setDescription(e.target.value) } /> 
    //     <button type={'submit'}>Add</button>
    //   </form>
    // </div>
      <>

      <div onClick={() => props.history.goBack()}>Back</div>
      <h1>Create a new pizza</h1>
       {error && <p style={{ color: "red" }}>Error Occurred</p>}
        <div class="ui inverted segment">
        <div class="ui inverted form">
          <div class="two fields">
            <div class="field">
              <label>Pizza Name</label>
              <input placeholder="Pizza Name" type="text" />
            </div>
            <div class="field">
              <label>Price</label>
              <input placeholder="Price" type="text" />
            </div>
            <div class="field">
              <label>Description</label>
              <input placeholder="Description" type="text" />
            </div>
          </div>
          <div class="ui submit button">Submit</div>
        </div>
      </div>
    </>
  );
};

export default PizzaNew;