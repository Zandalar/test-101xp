import isolda_title from '../images/chars/chars_name_Isolda.png';
import isolda_fraction from '../images/chars/chars_fraction_Isolda.png';
import isoldaSkill1 from '../images/chars/chars_skill_Isolda_1.png';
import isoldaSkill2 from '../images/chars/chars_skill_Isolda_2.png';
import pamela_title from '../images/chars/chars_name_Pamela.png';
import pamela_fraction from '../images/chars/chars_fraction_Pamela.png';
import pamelaSkill1 from '../images/chars/chars_skill_Pamela_1.png';
import pamelaSkill2 from '../images/chars/chars_skill_Pamela_2.png';
import lleyn_title from '../images/chars/chars_name_Lleyn.png';
import lleyn_fraction from '../images/chars/chars_fraction_Lleyn.png';
import lleynSkill1 from '../images/chars/chars_skill_Lleyn_1.png';
import lleynSkill2 from '../images/chars/chars_skill_Lleyn_2.png';

export const characters = {
  isolda: {
    name: 'isolda',
    title: isolda_title,
    fraction: {
      name: 'Империя бессмертных',
      logo: isolda_fraction,
    },
    skills: {
      skillName1: 'Конец зимы',
      skillDescription1: '360% урона авангарду врага',
      skillImage1: isoldaSkill1,
      skillName2: 'Морозная ария',
      skillDescription2: 'Ледяной щит уменьшает получаемый урон на 20%',
      skillImage2: isoldaSkill2,
    },
    description: 'Появление королевы холода и ее верного медведя предвещает ледяная буря.' +
      ' Неуязвимая Изольда замораживает противников насмерть и не знает пощады.',
  },
  pamela: {
    name: 'pamela',
    title: pamela_title,
    fraction: {
      name: 'Союз просвященных',
      logo: pamela_fraction,
    },
    skills: {
      skillName1: 'Черное дыхание',
      skillDescription1: 'Наносит врагу с мин. ОЗ 426% урона',
      skillImage1: pamelaSkill1,
      skillName2: 'Проклятие дракона',
      skillDescription2: 'Проклинает всех врагов, снижая урон на 15%',
      skillImage2: pamelaSkill2,
    },
    description: 'Памела — супруга древнего огненного дракона, одна из первых овладела магией.' +
      ' Никто не знает, на чьей стороне она сражается на самом деле.',
  },
  lleyn: {
    name: 'lleyn',
    title: lleyn_title,
    fraction: {
      name: 'Цитадель небожителей',
      logo: lleyn_fraction,
    },
    skills: {
      skillName1: 'Дикий разрез',
      skillDescription1: 'Превращает 30% наносимого урона в ОЗ',
      skillImage1: lleynSkill1,
      skillName2: 'Найти и уничтожить',
      skillDescription2: 'Наносит 313% урона врагу',
      skillImage2: lleynSkill2,
    },
    description: 'Зверолюд Ллейн выбрал кровавый путь наемного убийцы' +
      ' в тайной организации "Покров". Его прозвали' +
      ' “Дикий клинок” из-за жестокости и скорости.',
  },
}
