import React from "react";
import {NavLink} from "react-router-dom";
import '../../styles/Menu.css';

export default () => {
  const activeStyle = {color:"#11aa58"};

  return (
    <nav id="page-nav">
      <ul>
        <li>
          <NavLink to="/classes" activeStyle={activeStyle} exact className="home-menu-item">Class component</NavLink>
        </li>
      </ul>
    </nav>
  );
}
