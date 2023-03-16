import React from 'react';

import DateCours from './DateCours';
import Card from '../../components/UI/Card';
import './CoursObjet.css';

const CoursObjet = (props) => {
  return (
    <li>
      <Card className='expense-item'>
        <DateCours date={props.dateStart} />
        <DateCours date={props.dateFin} />
        <div className='expense-item__description'>
          <h2>{props.titre}</h2>
          <h2>{props.discipline}</h2>
          <div className='expense-item__price'>{props.nbEtudiant} étudiants</div>
        </div>
      </Card>
    </li>
  );
};

export default CoursObjet;