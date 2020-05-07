import React from 'react';
import './Submenu.scss';
import {NavLink} from "react-router-dom";

const Submenu = props => {
  return (
    <ul className='submenu'>
      {props.subLinks.map((link, index) => {
        return (
          <li className='submenu__item' key={index}>
            <NavLink
              to={link.to}
              exact={link.exact}
              className='submenu__link'
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