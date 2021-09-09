import React, {useState, useEffect} from 'react';
import axios from "axios";

const Toppings = (props) => {
  const [toppings, setToppings] = useState([]);

  useEffect(() => {
    getToppings();
  }, []);

  const getToppings = async () => {
    try {
      let res = await axios.get(`api/pizzas/${props.match.params.id}/toppings`);
      setToppings(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const renderToppings = () => {
    return toppings.map((t) => {
      return (
        <div>
          <p>{t.category}</p>
          <p>{t.name}</p>
        </div>
      );
    });
  };
  return (
    <div>
      <h1>Toppings</h1>
      <p>{renderToppings()}</p>
     
    </div>
  );
};
export default Toppings;