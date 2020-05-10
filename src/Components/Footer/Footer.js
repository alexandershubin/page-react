import React from 'react';
import Logo from "../UI/Logo/Logo";
import './Footer.scss';
import Button from "../UI/Button/Button";
import FooterLink from "./FooterLink/FooterLink";

export default props => {
  return (
    <footer className='footer footer--purple'>
      <div className='footer__content'>
        <div className='block-link'>
          <Logo
            circle={'logo__circle logo__circle--white'}
            circleBig={'logo__circle-big logo__circle-big--white'}
          />
          <div className='link'>
            <FooterLink
              class={'link__footer'}
            />
          </div>
        </div>
        <form className='form' action='' method={'get'}>
          <input className='form__input' type="text" placeholder='Enter your email'/>
          <Button type='submit'
                  className='button--orange'
                  text={'Sign Up Now'}
          />
        </form>
      </div>
    </footer>
  )
}