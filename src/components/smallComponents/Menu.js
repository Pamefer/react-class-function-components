import React from "react";
import {NavLink} from "react-router-dom";
import '../../styles/Menu.css';

export default () => {
  const activeStyle = {color:"#11aa58"};

  return (
    <nav id="page-nav">
      <ul>
        <li>
          <NavLink to="/class" activeStyle={activeStyle} exact className="home-menu-item">Class component</NavLink>
        </li>
        <li>
          <NavLink to="/function" activeStyle={activeStyle} className="home-menu-item">Function component</NavLink>
        </li>
      </ul>
    </nav>
  );
}
