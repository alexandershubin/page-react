import React from 'react';
import {NavLink} from "react-router-dom";
import './Logo.scss';

export default props => {
  return (
    <>
      <NavLink to={'/'}>
        <div className='logo'>
          <span className={props.circle}></span>
          <span className={props.circleBig}></span>
        </div>
      </NavLink>
    </>
  )
}