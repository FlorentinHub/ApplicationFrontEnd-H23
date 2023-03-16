/* eslint-disable no-unused-vars */
import React from 'react';
import Card from '../components/Card/index'
import styled from 'styled-components'
import colors from '../style/colors'

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
   name: 'Jane Doe',
   cours: 'Mathématiques',
   image: '../pages/Professeurs/pictures/76.png'
 },
 {
   name: 'John Doe',
   cours: 'Web et bases de données',
   image: '../pages/Professeurs/pictures/75.png'
 },
 {
   name: 'Jeanne Biche',
   cours: 'Analyse et conception de modèle',
   image: '../pages/Professeurs/pictures/77.png'
 },
]


const Professeurs = () => {
return (
   <div
   style={{
       display: 'flex',
       justifyContent: 'center',
       alignItems: '',
       height: 'display'
   }}
   >
     <PageSubtitle>
       Les meilleurs professeurs, pour vous.
     </PageSubtitle>
     <a></a>
     <CardsContainer>
       {professeurProfiles.map((profile, index) => (
         <Card
         />
       ))}
     </CardsContainer>
   </div>
);
};

export default Professeurs;
