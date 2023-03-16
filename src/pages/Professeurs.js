 import React from 'react';
 //import Card from '../components/Card'
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
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`

// const professeurProfiles = [
//   {
//     name: 'Jane Doe',
//     cours: 'Mathématiques',
//   },
//   {
//     name: 'John Doe',
//     cours: 'Developpeur frontend',
//   },
//   {
//     name: 'Jeanne Biche',
//     cours: 'Développeuse Fullstack',
//   },
// ]

// const Professeurs = () => {
//   return (
//     <div>
//       <PageTitle>Trouvez votre prestataire</PageTitle>
//       <PageSubtitle>
//         Chez Shiny nous réunissons les meilleurs profils pour vous.
//       </PageSubtitle>
//       <CardsContainer>
//         {professeurProfiles.map((profile, index) => (
//           <Card
//             key={`${profile.name}-${index}`}
//             label={profile.cours}
//             title={profile.name}
//           />
//         ))}
//       </CardsContainer>
//     </div>
//   )
// }

// export default Professeurs


const Professeurs = () => {
return (
	<div
	style={{
		display: 'flex',
		justifyContent: 'Right',
		alignItems: 'Right',
		height: '100vh'
	}}
	>
       <PageTitle>Trouvez votre prestataire</PageTitle>
       <PageSubtitle>
        Au Collège Montmorency, nous avons les meilleurs professeurs à vous offrir.
       </PageSubtitle>
	<h1>Welcome to GeeksforGeeks Events</h1>
	</div>
);
};

export default Professeurs;
