import React from 'react';
import chars_title from '../images/chars/chars_head.png';

function Chars({ name,
                 fractionName,
                 fractionLogo,
                 skillImage1,
                 skillName1,
                 skillDescription1,
                 skillImage2,
                 skillName2,
                 skillDescription2,
                 description,
                 charsTitle,
                 onLeftArrowClick,
                 onRightArrowClick,
                 onIsoldaClick,
                 onPamelaClick,
                 onLleynClick,
                 activeIndex,
                 charsRef,
                 videoRef,
               }) {
  function scrollToSection() {
    videoRef.current.scrollIntoView();
  }

  return (
    <section className={`chars chars_${name}`} ref={charsRef} >
      <img className='chars__title' src={chars_title} alt='title' />
      <div className='chars__container'>
        <div className='chars__about'>
          <img className='chars__name' src={charsTitle} alt={name} />
          <div className='chars__fraction'>
            <img className='chars__image' src={fractionLogo} alt={name} />
            <p className={`chars__fraction-name chars__fraction-name_${name}`}>{fractionName}</p>
          </div>
          <p className='chars__description'>{description}</p>
          <ul className='chars__skills'>
            <li className='chars__skills-item'>
              <img className='chars__skills-image' src={skillImage1} alt={name}/>
              <div className='chars__skills-info'>
                <h3 className='chars__skills-name'>{skillName1}</h3>
                <p className='chars__skills-description'>
                  {skillDescription1}
                </p>
              </div>
            </li>
            <li className='chars__skills-item'>
              <img className='chars__skills-image' src={skillImage2} alt={name}/>
              <div className='chars__skills-info'>
                <h3 className='chars__skills-name'>{skillName2}</h3>
                <p className='chars__skills-description'>
                  {skillDescription2}
                </p>
              </div>
            </li>
          </ul>
        </div>
        <ul className='chars__list'>
          <li className='chars__list-item'>
            <button className={`chars__button ${activeIndex === 0 ? 'chars__button_isolda-active' : 'chars__button_isolda'}`} type='button' onClick={onIsoldaClick} />
          </li>
          <li className='chars__list-item'>
            <button className={`chars__button ${activeIndex === 1 ? 'chars__button_pamela-active' : 'chars__button_pamela'}`} type='button' onClick={onPamelaClick} />
          </li>
          <li className='chars__list-item'>
            <button className={`chars__button ${activeIndex === 2 ? 'chars__button_lleyn-active' : 'chars__button_lleyn'}`} type='button' onClick={onLleynClick} />
          </li>
        </ul>
      </div>
      <p className='chars__story'>
        60 наемников с неповторимой историей и сотни возможностей для
        построения команды ждут тебя! Система связей между персонажами —
        важная часть игрового сюжета и тонкий механизм настройки
        боевого отряда. Выбери свою фракцию и получай бонусы к мощи!
      </p>
      <button className='chars__button-next' type='button' onClick={scrollToSection} />
      <button className='chars__button-next chars__button-next_left' type='button' onClick={onLeftArrowClick} />
      <button className='chars__button-next chars__button-next_right' type='button' onClick={onRightArrowClick} />
    </section>
  )
}

export default Chars;
