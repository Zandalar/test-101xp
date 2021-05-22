import React from 'react';
import mount_title from '../images/mount/mount_head.png';
import mount_rating_30k from '../images/mount/mount_rating_30000.png';
import mount_rating_150k from '../images/mount/mount_rating_150000.png';

function Mount() {
  return (
    <section className='mount'>
      <img className='mount__title' src={mount_title} alt='title' />
      <div className='mount__container'>
        <div className='mount__card'>
          <img className='mount__rating' src={mount_rating_30k} alt='mount rating 30000' />
          <p className='mount__level'>1 уровень</p>
        </div>
        <div className='mount__card'>
          <img className='mount__rating' src={mount_rating_150k} alt='mount rating 150000' />
          <p className='mount__level'>50 уровень</p>
        </div>
      </div>
      <p className='mount__story'>
        Пройди десятки элитных данжей, собери крепкие доспехи и сильнейшее оружие
        и приручи верных маунтов. Добывай ценные ресурсы для максимальной прокачки
        снаряжения и отряда: развивай скиллы, применяй древние кодексы и собирай
        уникальные комбинации! Выработай свою стратегию боя и выбери ключевые умения
        для победы над врагами!
      </p>
      <button className='mount__button-next' type='button' />
    </section>
  )
}

export default Mount;