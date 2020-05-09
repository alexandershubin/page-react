import React from 'react';
import './Features.scss';

export default props => {
  return (
    <section className="features">
      <h2 className='features__title'>{props.title}</h2>
      <p className='features__description'>{props.description}</p>
    </section>
  )
}