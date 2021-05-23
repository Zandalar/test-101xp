import React from 'react';
import footer_title from '../images/footer/footer_head.png';
import footer_logo from '../images/footer/footer_logo_101xp.png';

function Footer({footerRef}) {
  return (
    <footer className='footer' ref={footerRef}>
      <img className='footer__title' src={footer_title} alt='title' />
      <button className='footer__button-play' type='button' />
      <p className='footer__subtitle'>
        Поделись страницей в социальной сети
      </p>
      <ul className='footer__social'>
        <li className='footer__social-item'>
          <a className='footer__link footer__link_fb' href='https://101xp.com/' target='_blank' rel='noreferrer' />
        </li>
        <li className='footer__social-item'>
          <a className='footer__link footer__link_vk' href='https://101xp.com/' target='_blank' rel='noreferrer' />
        </li>
        <li className='footer__social-item'>
          <a className='footer__link footer__link_ok' href='https://101xp.com/' target='_blank' rel='noreferrer' />
        </li>
        <li className='footer__social-item'>
          <a className='footer__link footer__link_mail' href='https://101xp.com/' target='_blank' rel='noreferrer' />
        </li>
      </ul>
      <p className='footer__text'>
        Нажимая кнопку “Играть”, вы подтверждаете, что принимаете условия&ensp;
        <span className='footer__text_underline'>Пользовательского соглашения</span>
        &ensp;и&ensp;
        <span className='footer__text_underline'>Политики приватности.</span>
      </p>
      <img className='footer__logo' src={footer_logo} alt='Logo 101xp.com'/>
    </footer>
  )
}

export default Footer;