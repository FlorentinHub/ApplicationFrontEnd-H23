import React from 'react';

import CoursObjet from './CoursObjet';
import './ListeCours.css';

function ListeCours(props) {
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Aucun cours trouvé</h2>;
  }
  console.log(props)
  return (
    <ul className='expenses-list'>
      {props.items.map((cours) => (
        <CoursObjet
          key={cours.id}
          titre={cours.titre}
          discipline={cours.discipline}
          nbEtudiant={cours.nbEtudiant}
          dateStart={cours.dateStart}
          dateFin={cours.dateFin}
        />
      ))}
    </ul>
  );
};

export default ListeCours;
