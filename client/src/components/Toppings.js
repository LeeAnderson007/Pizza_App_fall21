import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Button, Card, Icon, Popup } from 'semantic-ui-react';
import { Link } from "react-router-dom";

const Toppings = (props) => {
  const [toppings, setToppings] = useState([]);

  useEffect(() => {
    getToppings();
  }, []);

  const getToppings = async () => {
    try {
      let res = await axios.get(`/api/pizzas/${props.match.params.id}/toppings`);  //(`/api//pizza/toppings`);
      setToppings(res.data);
    } catch (err) {
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

  const renderToppings = () => {
    return toppings.map((t) => {
      return (
          <Card>
            <Card.Content header={t.name} />
            <Card.Content header={t.category} />
            <Button.Group basic centered vertical>
              <Link to={`/toppings/${t.id}/edit`}>
                <Button icon>
                  <Popup content='Add' trigger={<Icon name="edit" color="blue" />} />
                </Button>
              </Link>
              <Button.Group>
                <Button icon>
                  <Popup content='Delete' trigger={<Icon name='trash' color="red" background="red" onClick={() => deleteTopping(t.id)} />} />
                </Button>
              </Button.Group>
            </Button.Group>
          </Card>
      );
    });
  };


  return (
    <div>
      <h1>Toppings</h1>
      <Link to={`/pizzas`}>
        <Popup content='Go Back' trigger={<Button icon="angle left" color="blue" />} />
      </Link>
      <br />
      <br />
      <Card.Group>{renderToppings()}</Card.Group>
    </div>
  );
};
export default Toppings;