import React, {Component} from 'react'
import './MenuList.scss';
import {NavLink} from "react-router-dom";
import Submenu from "./Submenu/Submenu";

export default class MenuList extends Component {
  state = {
    links: [
      {to: '/', label: 'About', exact: true},
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
  
  showClass = () => {
    this.setState({
      showSubMenu: 'show'
    })
  }
  
  renderLinks = () => {
    return this.state.links.map((link, index) => {
      return (
        <li key={index}
            className={!this.state.showSubMenu ? 'menu__item hide' : 'menu__item show'}
            onClick={link.isDrop ? this.clickHandlerSubMenu : null}>
          <NavLink key={index}
                   to={link.to}
                   exact={link.exact}
                   className='menu__link'
          >
            {link.label}
          </NavLink>
          {link.isDrop ? <Submenu subLinks={this.state.subLinks}/> : null}
        </li>
      )
    })
  }
  
  render() {
    return (
      <>
        <header className='header'>
          <NavLink to={'/'}>
            <div className='logo'>
              <span className='logo__item logo__item--purple'></span>
              <span className='logo__item logo__item--pink'></span>
            </div>
          </NavLink>
  
          <div className={!this.state.menu ? 'burger' : 'burger active'}
          onClick={this.clickHandlerMenu}
          >
            <span></span>
          </div>

          <nav className={!this.state.menu ? 'menu' : 'menu active'}>
            <ul className='menu__list'>
              {this.renderLinks()}
            </ul>
          </nav>
        </header>
      </>
    )
  }
}