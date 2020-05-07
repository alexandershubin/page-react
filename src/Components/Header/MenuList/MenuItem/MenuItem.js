import React from 'react'
import Submenu from "./Submenu/Submenu";
import {NavLink} from "react-router-dom";
import './MenuItem.scss';

const MenuItem = (props) => {
  const cls = [
    props.showSubMenu ? 'menu__item menu__item--submenu' : 'menu__item menu__item--submenu show'
  ]
  
  return props.links.map((link, index) => {
    return (
      <li key={index}
          className={link.isDrop ? cls.join(' ') : 'menu__item'}
          onClick={link.isDrop ? props.clickHandlerSubMenu : null}>
        <NavLink key={index}
                 to={link.to}
                 exact={link.exact}
                 className='menu__link'
        >
          {link.label}
        </NavLink>
        {link.isDrop ? <Submenu subLinks={props.subLinks}/> : null}
      </li>
    )
  })
}

export default MenuItem;