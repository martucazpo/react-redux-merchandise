import React from "react";
import { NavLink } from 'react-router-dom';

const Navlinks = () => {
  return (
    <span>
      <ul>
          <NavLink to=""><li>A Link</li></NavLink>
          <NavLink to=""><li>Another Link</li></NavLink>
          <NavLink to=""><li>Some Link</li></NavLink>
      </ul>
    </span>
  );
};

export default Navlinks;
