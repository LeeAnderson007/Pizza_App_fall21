import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Popup } from "semantic-ui-react";
import { Link } from "react-router-dom";


const PizzaEdit = (props) => {
  const [name, setName] = useState("")
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState("")
  const [error, setError] = useState(false)

  useEffect(() => {
    getPizza();
  }, []);

  const getPizza = async () => {
    try {
    let res= await axios.get(`/api/pizzas/${props.match.params.id}`);
    setName(res.data.name)
    setPrice(res.data.price)
    setDescription(res.data.description)
  } catch (err) {
    console.log(err)
  }
}

const handleSubmit = async (e) => {
  e.preventDefault()
  setError(false)
  try {
    let pizza = {name, price, description}
    let res = await axios.put(`/api/pizzas/${props.match.params.id}`, pizza)
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
      <div><Button class="ui button" inverted color='blue' type={'submit'}>Edit</Button></div>
    </div>
  </div>
</form>
</>
);
  // return (
  //   <div>
  //     <h1>Edit this Pizza</h1>
  //     <Link to={`/pizzas`}>
  //       <Popup content='Go Back' trigger={<Button icon="angle left" color="blue" />} />
  //     </Link>
  //     {/* <div onClick={() => props.history.goBack()}>Back</div> */}
  //     {error && <p style={{ color: "red" }}>Error Occurred</p>}
  //     <form onSubmit={handleSubmit}>
  //       <p>Name</p>
  //       <input value={name} onChange={(e)=> setName(e.target.value) } /> 
  //       <p>Price</p>
  //       <input value={price} onChange={(e)=> setPrice(e.target.value) } /> 
  //       <p>Description</p>
  //       <input value={description} onChange={(e)=> setDescription(e.target.value) } /> 
  //       <button type={'submit'}>Edit</button>
  //     </form>
  //   </div>
  // );
};

export default PizzaEdit;

//hi
// lee

// wht
// sydney