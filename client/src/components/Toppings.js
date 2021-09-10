import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Button, Card, Icon } from 'semantic-ui-react';
import { Link } from "react-router-dom";

const Toppings = (props) => {
  const [toppings, setToppings] = useState([]);

  useEffect(() => {
    getToppings();
  }, []);

  const getToppings = async () => {
    try {
      let res = await axios.get(`/api/pizzas/${props.match.params.id}/toppings`);  //(`/api//pizza/toppings`);
      setToppings(res.data);
    } catch (err) {
      console.log(err);
    }
  };


const deleteTopping = async (id) => {
  try {
    let res = await axios.delete(`/api/toppings/${id}`);
    setToppings(toppings.filter((t) => t.id !== id));
  } catch (err) {
    console.log(err);
  }
};

  const renderToppings = () => {
    return toppings.map((t) => {
      return (
          <Card>
            <Card.Content header={t.name} />
            <Card.Content extra>{t.category}</Card.Content>
            <Button.Group>
              <Link to={`/toppings/${t.id}/edit`}>
                <Button color="blue">Add</Button>
              </Link>

              <Button color="red" onClick={() => deleteTopping(t.id)}>
                Remove
              </Button>
            </Button.Group>
          </Card>
        );
    });
  };


  return (
    <div>
      <Card.Group>{renderToppings()}</Card.Group>
    </div>
  );
};
export default Toppings;