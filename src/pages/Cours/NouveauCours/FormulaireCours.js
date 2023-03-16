import React, { useState } from 'react';

import './FormulaireCours.css';

const FormulaireCours = (props) => {
  const [saisieTitre, setSaisieTitre] = useState('');
  const [saisieDiscipline, setSaisieDiscipline] = useState('');
  const [saisienbEtudiant, setSaisienbEtudiant] = useState('');
  const [saisieDateStart, setSaisieDateStart] = useState('');
  const [saisieDateFin, setSaisieDateFin] = useState('');
  

  const changementDisciplineHandler =(event)=>{
    setSaisieDiscipline(event.target.value);
  }
  const changementTitreHandler = (event) => {
    setSaisieTitre(event.target.value);
  };

  const changementnbEtudiantHandler = (event) => {
    setSaisienbEtudiant(event.target.value);
  };

  const changementDateStartHandler = (event) => {
    setSaisieDateStart(event.target.value);
  };
  const changementDateFinHandler = (event) => {
    setSaisieDateFin(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const donneesCours = {
      titre: saisieTitre,
      discipline: saisieDiscipline,
      nbEtudiant: saisienbEtudiant,
      dateStart: new Date(saisieDateStart),
      dateFin: new Date(saisieDateFin),
    };

    props.onSaveExpenseData(donneesCours);
    setSaisieTitre('');
    setSaisieDiscipline('');
    setSaisienbEtudiant('');
    setSaisieDateStart('');
    setSaisieDateFin('');
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
          <label>Discipline</label>
          <input
            type='discipline'
            value={saisieDiscipline}
            onChange={changementDisciplineHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Nombre maximal d’etudiants</label>
          <input
            type='number'
            min='1'
            step='1'
            value={saisienbEtudiant}
            onChange={changementnbEtudiantHandler}
          />
        </div>
        <div className='new-expense__controlVide'>
          <label>Nombre maximal d’etudiants</label>
        
        </div>
        <div className='new-expense__control'>
          <label>Date de Début</label>
          <input
            type='date'
            min='2019-01-01'
            max='2025-12-30'
            value={saisieDateStart}
            onChange={changementDateStartHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date de Fin</label>
          <input
            type='date'
            min='2019-01-01'
            max='2025-12-31'
            value={saisieDateFin}
            onChange={changementDateFinHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type="button" onClick={props.onCancel}>Annuler</button>
        <button type='submit'>Ajouter Cours</button>
      </div>
    </form>
  );
};

export default FormulaireCours;
