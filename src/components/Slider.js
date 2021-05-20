import React, { useState, useEffect } from 'react';
import SliderItem from './SliderItem';
import chars_title from '../images/chars/chars_head.png';

function Slider() {

  const chars = [
    'isolda',
    'pamela',
    'lleyn',
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const prevImgIndex = activeIndex ? activeIndex - 1 : chars.length - 1;
  const nextImgIndex = activeIndex === chars.length - 1 ? 0 : activeIndex + 1;

  function changeCurrentIndex() {
    setActiveIndex((index) => (index === chars.length - 1 ? 0 : index + 1));
  }

  useEffect(() => {
    setInterval(() => changeCurrentIndex(), 3000);
    return () => clearInterval();
  }, []);

  return (
    <section className="slider">
      <img className='slider__image' src={chars_title} alt='title' />
      <SliderItem classes={`slider__item slider__item_previous slider__${chars[prevImgIndex]}`} key={prevImgIndex} />
      <SliderItem classes={`slider__item slider__${chars[activeIndex]}`} key={activeIndex} />
      <SliderItem classes={`slider__item slider__item_next slider__${chars[nextImgIndex]}`} key={nextImgIndex} />
    </section>
  );
}

export default Slider;
