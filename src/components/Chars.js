import React from 'react';
import chars_title from '../images/chars/chars_head.png';
import isolda_name from '../images/chars/chars_name_Isolda.png';
import isolda_fraction from '../images/chars/chars_fraction_Isolda.png';

function Chars({ name,
                 fraction,
                 skillImage1,
                 skillName1,
                 skillDescription1,
                 skillImage2,
                 skillName2,
                 skillDescription2,
               }) {
  return (
    <section className='chars'>
      <img className='chars__title' src={chars_title} alt='title' />
      <div className='chars__container'>
        <div className='chars__about'>
          <img className='chars__name' src={isolda_name} alt={name} />
          <div className='chars__fraction'>
            <img className='chars__image' src={isolda_fraction} alt={name} />
            <p className='chars__fraction-name'>{fraction}</p>
          </div>
          <p className='chars__description'>
            Появление королевы холода и ее верного медведя предвещает
            ледяная буря. Неуязвимая Изольда замораживает
            противников насмерть и не знает пощады.
          </p>
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
            <button className='chars__button chars__button_isolda' type='button' />
          </li>
          <li className='chars__list-item'>
            <button className='chars__button chars__button_pamela' type='button' />
          </li>
          <li className='chars__list-item'>
            <button className='chars__button chars__button_lleyn' type='button' />
          </li>
        </ul>
      </div>
      <p className='chars__story'>
        60 наемников с неповторимой историей и сотни возможностей для
        построения команды ждут тебя! Система связей между персонажами —
        важная часть игрового сюжета и тонкий механизм настройки
        боевого отряда. Выбери свою фракцию и получай бонусы к мощи!
      </p>
      <button className='chars__button-next' type='button' />
      <button className='chars__button-next chars__button-next_left' type='button' />
      <button className='chars__button-next chars__button-next_right' type='button' />
    </section>
  )
}

export default Chars;
