import { Link } from "react-router-dom";
import { Menu, Sticky } from "semantic-ui-react";

const NavBar = () => {
  return (
    <Sticky>
      <div style={styles.navBar}>
        <Menu color='blue' inverted>
          <Link to="/">
            <Menu.Item>Home</Menu.Item>
          </Link>
          <Link to="/pizzas">
            <Menu.Item>Pizzas</Menu.Item>
          </Link>
        </Menu>
      </div>
    </Sticky>
  );
};

const styles = {
  navBar: {
    boxShadow: "2px 2px 10px"
  },
};
export default NavBar;
