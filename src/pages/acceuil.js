import React from 'react';

const Accueil = () => {
return (
	<div
	style={{
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100vh'
	}}
	>
	<div mid>
	<img 
	style={{
		position: 'absolute',
		top: '100px',
		alignItems: 'center',
	}}
		src="https://cutt.ly/684fvlc" className="App-logo" alt="Logo du College Montmorency" />
	<h1>Fonctionalites du site du College Montmorency:</h1>
	<p
	style={{
		width: '750px',
		margin: 'auto',
		fontSize:'30px',
		fontStyle:'bold',
		indent: '50px',
		align: 'justify',
		spacing: '6px',
		border: '6px solid #B2C000',
	}}>Vous avez ici un chaleureux acceuil et en haut à droite: une rediction vers l'ancien site de Montmorency. À gauche, vous retrouverez une page sur la liste de professeurs et une autre vers la liste des cours, dans lesquels vous pourrez ajouter des cours et des étudiants que vous avez inscrit au préalable. </p>
	</div>
	</div>
);
};

export default Accueil;
