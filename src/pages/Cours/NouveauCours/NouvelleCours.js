import React, { useState } from 'react';

import FormulaireCours from './FormulaireCours';
import './NouvelleCours.css';

const NouvelleCours = (props) => {
  const [enEdition, setEnEdition] = useState(false);

  const enregistrerCoursHandler = (CoursSaisie) => {
    const donneesCours = {
      ...CoursSaisie,
      id: Math.random().toString(),
    };
    props.onAjoutCours(donneesCours);
    setEnEdition(false);
  };

  const debutEditionHandler = () => {
    setEnEdition(true);
  };

  const arretEditionHandler = () => {
    setEnEdition(false);
  };

  return (
    <div className='new-expense'>
      {!enEdition && (
        <button onClick={debutEditionHandler}>Ajouter nouveau cours</button>
      )}
      {enEdition && (
        <FormulaireCours
          onSaveExpenseData={enregistrerCoursHandler}
          onCancel={arretEditionHandler}
        />
      )}
    </div>
  );
};

export default NouvelleCours;
