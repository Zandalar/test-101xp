import React from 'react';
import footer_title from '../images/footer/footer_head.png';
import footer_logo from '../images/footer/footer_logo_101xp.png';
import vk_logo from '../images/footer/footer_btn_vk_normal.png';
import fb_logo from '../images/footer/footer_btn_fb_normal.png';
import ok_logo from '../images/footer/footer_btn_ok_normal.png';
import mail_logo from '../images/footer/footer_btn_mail_normal.png';
import vk_logo_hover from '../images/footer/footer_btn_vk_hover.png';
import fb_logo_hover from '../images/footer/footer_btn_fb_hover.png';
import ok_logo_hover from '../images/footer/footer_btn_ok_hover.png';
import mail_logo_hover from '../images/footer/footer_btn_mail_hover.png';
import vk_logo_active from '../images/footer/footer_btn_vk_active.png';
import fb_logo_active from '../images/footer/footer_btn_fb_active.png';
import ok_logo_active from '../images/footer/footer_btn_ok_active.png';
import mail_logo_active from '../images/footer/footer_btn_mail_active.png';

function Footer() {
  return (
    <footer className='footer'>
      <img className='footer__title' src={footer_title} alt='title' />
      <button className='footer__button-play' type='button' />
      <p className='footer__subtitle'>
        Поделись страницей в социальной сети
      </p>
      <ul className='footer__social'>
        <li className='footer__social-item'>
          <a className='footer__link' href='https://101xp.com/' target='_blank' rel='noreferrer'>
            <img className='footer__social-image' src={fb_logo} alt='fb link' />
          </a>
        </li>
        <li className='footer__social-item'>
          <a className='footer__link' href='https://101xp.com/' target='_blank' rel='noreferrer'>
            <img className='footer__social-image' src={vk_logo} alt='vk link' />
          </a>
        </li>
        <li className='footer__social-item'>
          <a className='footer__link' href='https://101xp.com/' target='_blank' rel='noreferrer'>
            <img className='footer__social-image' src={ok_logo} alt='ok link' />
          </a>
        </li>
        <li className='footer__social-item'>
          <a className='footer__link' href='https://101xp.com/' target='_blank' rel='noreferrer'>
            <img className='footer__social-image' src={mail_logo} alt='e-mail link' />
          </a>
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