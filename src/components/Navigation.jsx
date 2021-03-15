import React from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../routes";

const Navigation = () => {
  return (
    <nav>
      <NavLink
        exact
        to={routes.home}
        className="NavLink"
        activeClassName="NavLink--active"
      >
        Home
      </NavLink>
      <NavLink
        to={routes.authors}
        className="NavLink"
        activeClassName="NavLink--active"
      >
        Authors
      </NavLink>
      <NavLink
        to={routes.books}
        className="NavLink"
        activeClassName="NavLink--active"
      >
        Books
      </NavLink>
    </nav>
  );
};

export default Navigation;
