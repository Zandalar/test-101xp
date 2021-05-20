import React from 'react';
import title from '../images/header/header__title.png';
import logo from '../images/header/header__logo.png';

function Header() {
  return (
    <header className='header'>
      <div className='header__container'>
        <img className='header__logo' src={logo} alt='Angels League logo'/>
        <img className='header__title' src={title} alt='Angels League title'/>
        <button className='header__button' type='button' />
        <p className='header__description'>
          Судьба планеты ангелов в твоих руках!
          Древнее зло вырвалось из глубины преисподней,
          и лишь вмешательство героя спасет этот мир!
          Все зависит только от твоих решений!
        </p>
        <button className='header__button-next' type='button' />
      </div>
    </header>
  )
}

export default Header;
