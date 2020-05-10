import React, {Component} from 'react';
import classes from './Layout.module.scss';
import MenuList from "../../Components/Header/MenuList/MenuList";
import Main from "../../Components/Main/Main";
import Footer from "../../Components/Footer/Footer";

export default class Layout extends Component {
  render() {
    return (
      <div className={classes.Layout}>
        <MenuList/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}
