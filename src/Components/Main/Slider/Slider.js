import React, {Component} from "react";
import './Slider.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import Button from "../../UI/Button/Button";

export default class SimpleSlider extends Component {
  state = {
    settings: {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }
      ]
    },

    sliders: [
      {
        title: 'First Feature',
        description: 'Little Red Cap opened her eyes and when she saw the sunbeams dancing to and fro through the trees and how the ground was covered with beautiful flowers.'
      },
      {
        title: 'Second Feature',
        description: 'Each time she picked one she thought that she could see an even more beautiful one a little way off, and she ran after it, going further and further into the woods.'
      },
      {
        title: 'Third Feature',
        description: 'The wolf pressed the latch, and the door opened. He stepped inside, went straight to the grandmother\'s bed, and ate her up.'
      },
      {
        title: 'Fourth Feature',
        description: 'Little Red Cap had run after the flowers. After she had gathered so many that she could not carry any more, she remembered her grandmother.'
      }
    ]
  }
  
  renderSlider = () => {
    return this.state.sliders.map((slider, index) => {
      return (
        <div key={index}>
          <div className={index === this.state.sliders.length - 1 ? 'slider__content slider__content--new' : 'slider__content'}>
            <h1 className='slider__title'>{slider.title}</h1>
            <p className='slider__description'>{slider.description}</p>
            <Button
              className='button--arrow'
              text={'Learn more'}
            />
          </div>
        </div>
      )
    })
  }
  
  render() {
    return (
      <div className='slider slider--features'>
        <Slider {...this.state.settings}>
          {this.renderSlider()}
        </Slider>
      </div>
    );
  }
}