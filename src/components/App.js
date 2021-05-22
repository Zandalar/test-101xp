import React, {useState} from 'react';
import Header from './Header';
import Chars from './Chars';
import {characters} from '../utils/chars';
import Video from './Video';
import Mount from './Mount';
import Footer from './Footer';

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  const chars = [
    <Chars
      name={characters.isolda.name}
      fractionName={characters.isolda.fraction.name}
      fractionLogo={characters.isolda.fraction.logo}
      skillImage1={characters.isolda.skills.skillImage1}
      skillName1={characters.isolda.skills.skillName1}
      skillDescription1={characters.isolda.skills.skillDescription1}
      skillImage2={characters.isolda.skills.skillImage2}
      skillName2={characters.isolda.skills.skillName2}
      skillDescription2={characters.isolda.skills.skillDescription2}
      description={characters.isolda.description}
      charsTitle={characters.isolda.title}
      onRightArrowClick={increaseCharsIndex}
      onLeftArrowClick={decreaseCharsIndex}
      onIsoldaClick={onIsoldaClick}
      onPamelaClick={onPamelaClick}
      onLleynClick={onLleynClick}
      activeIndex={activeIndex}
    />,
    <Chars
      name={characters.pamela.name}
      fractionName={characters.pamela.fraction.name}
      fractionLogo={characters.pamela.fraction.logo}
      skillImage1={characters.pamela.skills.skillImage1}
      skillName1={characters.pamela.skills.skillName1}
      skillDescription1={characters.pamela.skills.skillDescription1}
      skillImage2={characters.pamela.skills.skillImage2}
      skillName2={characters.pamela.skills.skillName2}
      skillDescription2={characters.pamela.skills.skillDescription2}
      description={characters.pamela.description}
      charsTitle={characters.pamela.title}
      onRightArrowClick={increaseCharsIndex}
      onLeftArrowClick={decreaseCharsIndex}
      onIsoldaClick={onIsoldaClick}
      onPamelaClick={onPamelaClick}
      onLleynClick={onLleynClick}
      activeIndex={activeIndex}
    />,
    <Chars
      name={characters.lleyn.name}
      fractionName={characters.lleyn.fraction.name}
      fractionLogo={characters.lleyn.fraction.logo}
      skillImage1={characters.lleyn.skills.skillImage1}
      skillName1={characters.lleyn.skills.skillName1}
      skillDescription1={characters.lleyn.skills.skillDescription1}
      skillImage2={characters.lleyn.skills.skillImage2}
      skillName2={characters.lleyn.skills.skillName2}
      skillDescription2={characters.lleyn.skills.skillDescription2}
      description={characters.lleyn.description}
      charsTitle={characters.lleyn.title}
      onRightArrowClick={increaseCharsIndex}
      onLeftArrowClick={decreaseCharsIndex}
      onIsoldaClick={onIsoldaClick}
      onPamelaClick={onPamelaClick}
      onLleynClick={onLleynClick}
      activeIndex={activeIndex}
    />,
  ]

  function increaseCharsIndex() {
    setActiveIndex((index) => (index === chars.length - 1 ? 0 : index + 1));
  }

  function decreaseCharsIndex() {
    setActiveIndex((index) => (index === 0 ? chars.length - 1 : index - 1));
  }

  function onIsoldaClick() {
    setActiveIndex(0);
  }

  function onPamelaClick() {
    setActiveIndex(1);
  }

  function onLleynClick() {
    setActiveIndex(2);
  }

  return (
    <div className="app">
      <Header />
      {chars[activeIndex]}
      <Video />
      <Mount />
      <Footer />
    </div>
  );
}

export default App;
