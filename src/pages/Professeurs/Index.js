import Card from '../../components/Card'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

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

const professeurProfiles = [
  {
    name: 'Jane Doe',
    cours: 'Mathématiques',
  },
  {
    name: 'John Doe',
    cours: 'Developpeur frontend',
  },
  {
    name: 'Jeanne Biche',
    cours: 'Développeuse Fullstack',
  },
]

function professeurs() {
  return (
    <div>
      <PageTitle>Collège Montmorency</PageTitle>
      <PageSubtitle>
        Les meilleurs professeurs, pour vous.
      </PageSubtitle>
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
  )
}

export default professeurs
