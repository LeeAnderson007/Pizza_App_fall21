
import React, { useEffect, useState } from 'react';
import axios from 'axios';


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
    <div>
      <h1>Edit this Pizza</h1>
      <div onClick={() => props.history.goBack()}>Back</div>
      {error && <p style={{ color: "red" }}>Error Occurred</p>}
      <form onSubmit={handleSubmit}>
        <p>Name</p>
        <input value={name} onChange={(e)=> setName(e.target.value) } /> 
        <p>Price</p>
        <input value={price} onChange={(e)=> setPrice(e.target.value) } /> 
        <p>Description</p>
        <input value={description} onChange={(e)=> setDescription(e.target.value) } /> 
        <button type={'submit'}>Edit</button>
      </form>
    </div>
  );
};

export default PizzaEdit;

//hi
// lee

// wht