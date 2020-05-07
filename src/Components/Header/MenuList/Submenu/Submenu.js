import React from 'react';
import './Submenu.scss';
import {NavLink} from "react-router-dom";

const Submenu = props => {
  return (
    <ul className='Submenu'>
      {props.subLinks.map((link, index) => {
        return (
          <li key={index}>
            <NavLink
              to={link.to}
              exact={link.exact}
              className='Submenu__item'
            >
              {link.label}
            </NavLink>
          </li>
        )
      })}
    </ul>
  )
}

export default Submenu;