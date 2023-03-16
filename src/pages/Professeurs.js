 import React from 'react';
 import Card from '../components/Card/index'
 import styled from 'styled-components'
 import colors from '../style/colors'
 import NouveauProfesseur from "./Professeurs/NouveauProfesseur/NouveauProfesseur";

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`

const PageTitle = styled.h1`
  font-size: 30px;
  color: black;
  text-align: center;
  padding-bottom: 30px;
`

const PageSubtitle = styled.h2`
  font-size: 28px;
  font-decoration: bold;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`

const professeurProfiles = [
  {
    name: 'Joe Dessins',
    cours: 'Mathématiques',
	  image: '../pages/Professeurs/pictures/76.png'
  },
  {
    name: 'Johnny Test',
    cours: 'Web et bases de données',
	image: '../pages/Professeurs/pictures/75.png'
  },
  {
    name: ' Felicia Durocher',
    cours: 'Analyse et conception de modèle',
  },
]

// const Prof = () => {
// 	const [Prof, setProf] = useState(PROF);

// 	const ajoutProfHandler = (cours) => {
// 	  setProf((anciensProf) => {
// 		return [prof, ...anciensProf];
// 	  });
// 	};
const Professeurs = () => {
return (
	<div
	style={{
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: 'display'
	}}
	>
    {/* <NouveauProfesseur onAjoutProfesseur={ajoutProfHandler} /> */}
        <CardsContainer>
        {professeurProfiles.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            label={profile.cours}
            title={profile.name}
          />
        ))}
      </CardsContainer>
	</div>
);
};

export default Professeurs;
