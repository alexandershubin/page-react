import React, {Component} from 'react';
import './Main.scss';
import Features from "./Features/Features";
import Slider from "./Slider/Slider";

export default class Main extends Component {
  render() {
    return (
      <main>
        <Features
          title={'Features'}
          description={'Some of the features and advantages that we provide for those of you who store data in this Data Warehouse.'}
        />
        <Slider/>
      </main>
    )
  }
}