import React, { useState } from 'react';

import './FormulaireProfesseur.css';

const Formulaireprofesseur = (props) => {
  const [saisieTitre, setSaisieTitre] = useState('');
  const [saisieMontant, setSaisieMontant] = useState('');
  const [saisieDate, setSaisieDate] = useState('');


  const changementTitreHandler = (event) => {
    setSaisieTitre(event.target.value);
  };

  const changementMontantHandler = (event) => {
    setSaisieMontant(event.target.value);
  };

  const changementDateHandler = (event) => {
    setSaisieDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const donneesprofesseur = {
      titre: saisieTitre,
      montant: saisieMontant,
      date: new Date(saisieDate),
    };

    props.onSaveExpenseData(donneesprofesseur);
    setSaisieTitre('');
    setSaisieMontant('');
    setSaisieDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Titre</label>
          <input
            type='text'
            value={saisieTitre}
            onChange={changementTitreHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Montant</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={saisieMontant}
            onChange={changementMontantHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={saisieDate}
            onChange={changementDateHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type="button" onClick={props.onCancel}>Annuler</button>
        <button type='submit'>Ajouter professeur</button>
      </div>
    </form>
  );
};

export default Formulaireprofesseur;
