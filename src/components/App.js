import React from 'react';
import Header from './Header';
import Slider from './Slider';
import Chars from './Chars';

import isoldaSkill1 from '../images/chars/chars_skill_Isolda_1.png';
import isoldaSkill2 from '../images/chars/chars_skill_Isolda_2.png';

function App() {
  let isolda = {
    name: 'Isolda',
    fraction: 'Империя бессмертных',
    skills: {
      skillName1: 'Конец зимы',
      skillDescription1: '360% урона авангарду врага',
      skillImage1: isoldaSkill1,
      skillName2: 'Морозная ария',
      skillDescription2: 'Ледяной щит уменьшает получаемый урон на 20%',
      skillImage2: isoldaSkill2,
    },
  }

  return (
    <div className="app">
      <Header />
      <Chars
        name={isolda.name}
        fraction={isolda.fraction}
        skillImage1={isolda.skills.skillImage1}
        skillName1={isolda.skills.skillName1}
        skillDescription1={isolda.skills.skillDescription1}
        skillImage2={isolda.skills.skillImage2}
        skillName2={isolda.skills.skillName2}
        skillDescription2={isolda.skills.skillDescription2}
      />
    </div>
  );
}

export default App;
