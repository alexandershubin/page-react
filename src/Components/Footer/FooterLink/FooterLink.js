import React from 'react';
import {NavLink} from "react-router-dom";

export default props => {
  const links = [
    {to: '/aboutus', label: 'About Us', exact: true},
    {to: '/privacy', label: 'Privacy Policy', exact: true}
  ]
  return links.map((link, index) => {
    return (
      <NavLink key={index}
               to={link.to}
               exact={link.exact}
               className='link__footer'
      >
        {link.label}
      </NavLink>
    )
  })
}