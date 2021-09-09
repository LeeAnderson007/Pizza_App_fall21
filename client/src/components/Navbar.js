import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const NavBar = () => {
  return (
    <Menu>
      <Link to="/">
        <Menu.Item>Home</Menu.Item>
      </Link>
      <Link to="/pizzas">
        <Menu.Item>Pizzas</Menu.Item>
      </Link>
    </Menu>
  );
};

export default NavBar;
