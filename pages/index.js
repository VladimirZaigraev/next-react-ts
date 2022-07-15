import React, { useState } from 'react';

import Pacient from '../components/Pacient';
import Symptoms from '../components/Symptoms';
import Title from '../components/Title';
import styles from '../styles/Index.module.sass';
import adult from '../img/adult.jpg';
import child from '../img/child.jpg';

const data = [
  {
    id: 1,
    title: 'Взрослый',
    img: adult,
    info: [
      {
        id: 1,
        text: 'Менее тяжелые формы СМА могут возникать и диагностироваться в зрелом возрасте.',
      },
      {
        id: 2,
        text: 'По сравнению с СМА у детей, СМА у взрослых может иметь более легкие симптомы, но без патогенетической терапии пациенты со СМА 2-3 типа неуклонно теряют двигательные навыки.',
      },
      {
        id: 3,
        text: 'По сравнению с СМА в детстве, течение СМА у взрослых может быть более коварным и трудным для распознавания.',
      },
    ],
  },
  {
    id: 2,
    title: 'Ребенок',
    img: child,
    info: [
      {
        id: 1,
        text: 'Ребенок, плохо удерживающий голову, когда ему придают сидячее положение, с вялыми движениями нижних конечностей или с трудом тянущийся к предметам, но при этом с осмысленным и ярким взглядом, улыбающийся и социально активный, вызывает настороженность в отношении наличия СМА.',
      },
      {
        id: 2,
        text: 'Младенцам со СМА необходимо экстренное направление к специалисту, ранняя диагностика и обеспечение терапией, спасающей жизнь, поскольку эти мотонейроны очень быстро подвергаются дегенерации при прогрессировании заболевания.',
      },
    ],
  },
];

const Index = () => {
  const [activePacient, setActivePacient] = useState(data[0]);

  const handlerClick = (event) => {
    const dataFind = data.find((elem) => elem.id == event.target.id);
    setActivePacient(dataFind);
  };

  return (
    <div className={styles.container}>
      <Title text={'А вдруг СМА?'} />
      <Pacient data={data} handlerClick={handlerClick} />
      <Symptoms activePacient={activePacient} />
    </div>
  );
};
export default Index;
