import React, { useState, useRef } from 'react';
import video1 from '../videos/bg.mp4';
import video2 from '../videos/bg.webm';
import title from '../images/video/video_head.png';

function Video({videoRef, mountRef}) {
  const [isPlayed, setIsPlayed] = useState(false);
  const movieRef = useRef();

  function handlePlayVideo() {
    movieRef.current.play();
    setIsPlayed(true);
  }

  function scrollToSection() {
    mountRef.current.scrollIntoView();
  }

  return (
    <section className='video' ref={videoRef}>
      <img className='video__title' src={title} alt='Title' />
      <video
        className='video__movie'
        ref={movieRef}
        width='100%'
        height='auto'
        preload='auto'
        muted
        loop='loop'
        poster='../images/video/video_poster.png'
      >
        <source src={video1} type="video/mp4" />
        <source src={video2} type="video/webm" />
      </video>
      {!isPlayed && <button className='video__button-play' type='button' onClick={handlePlayVideo}/>}
      <div className='video__container'>
        <p className='video__story'>
          Стань самым сильным в турнирах и накажи противников с других серверов
          в кросс-серверных сражениях. Занимай места в PvP- и PvE-топах и получай
          эксклюзивные награды и доступ к магазинам для избранных!
        </p>
        <button className='video__button-next' type='button' onClick={scrollToSection} />
      </div>
    </section>
  )
}

export default Video;