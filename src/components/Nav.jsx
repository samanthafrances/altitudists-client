/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import Icons from "./icons";

const Nav = (props) => {
  return (
    <nav>
      <NavLink to="/home">
        <Icons icon="list" fill="white" />
      </NavLink>
      <NavLink to="/destinations">
        <Icons icon="favorites" fill="white" />
      </NavLink>
      <NavLink to="/buddypass">
        <Icons icon="ticket" fill="white" />
      </NavLink>
      <NavLink to="/">
        <div onClick={props?.handleLogOut}>
          <Icons icon="logout" fill="white" />
        </div>
      </NavLink>
    </nav>
  );
};

export default Nav;
