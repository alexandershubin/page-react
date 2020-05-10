import React, {Component} from 'react'
import './MenuList.scss';
import Logo from "../../UI/Logo/Logo";
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
          <div className='header__content'>
            <Logo
              circle={'logo__circle logo__circle--purple'}
              circleBig={'logo__circle-big logo__circle-big--pink'}
            />
            <div className={burgerClass.join(' ')}
                 onClick={this.clickHandlerMenu}
            >
              <span></span>
            </div>
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