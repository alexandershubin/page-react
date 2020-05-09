import React, {Component} from 'react'
import './MenuList.scss';
import {NavLink} from "react-router-dom";
import MenuItem from "./MenuItem/MenuItem";
import Button from "../../UI/Button/Button";

export default class MenuList extends Component {
  state = {
    links: [
      {to: '/about', label: 'About', exact: true},
      {to: '/help', label: 'Help', exact: true, isDrop: true},
      {to: '/features', label: 'Features', exact: true}
    ],
    subLinks: [
      {to: '/User Guide', label: 'User Guide', exact: true},
      {to: '/Contact Support', label: 'Contact Support', exact: true}
    ],
  
    menu: false,
    showSubMenu: false
  }
  
  clickHandlerMenu = () => {
    this.setState({
      menu: !this.state.menu
    })
  }
  
  
  clickHandlerSubMenu = () => {
    this.setState({
      showSubMenu: !this.state.showSubMenu
    })
  }
  
  render() {
    const navClass = [
      !this.state.menu ? 'menu' : 'menu active'
    ]
    
    const burgerClass = [
      !this.state.menu ? 'burger' : 'burger active'
    ]
    
    return (
      <>
        <header className='header header--padding-top'>
          <NavLink to={'/'}>
            <div className='logo'>
              <span className='logo__item logo__item--purple'></span>
              <span className='logo__item logo__item--pink'></span>
            </div>
          </NavLink>
          
          <div className={burgerClass.join(' ')}
               onClick={this.clickHandlerMenu}
          >
            <span></span>
          </div>
          
          <nav className={navClass.join(' ')}>
            <ul className='menu__list'>
              <MenuItem
                links={this.state.links}
                subLinks={this.state.subLinks}
                showSubMenu={!this.state.showSubMenu}
                clickHandlerSubMenu={this.clickHandlerSubMenu}
              />
            </ul>
            <Button
              className='button--purple'
              text={'Sign Up'}
            />
          </nav>
        </header>
      </>
    )
  }
}