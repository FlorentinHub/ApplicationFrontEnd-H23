import { useState } from "react";
import CoursObjet from "./Cours/CoursObjet";
import Card from "../components/shared/Card";

import NouvelleCours from "../pages/Cours/NouveauCours/NouvelleCours";
import ListeCours from "./Cours/ListeCours";

const COURS = [
	{
	  id: '1',
	  titre: 'Maths',
	  discipline: 'Mathematiques',
	  nbEtudiant: 25,
	  dateStart: new Date(2020, 7, 14),
	  dateFin: new Date(2022, 2, 11),
	},
	{
		id: '2',
		titre: 'Judo',
		discipline: 'Sport',
		nbEtudiant: 33,
		dateStart: new Date(2021, 5, 27),
		dateFin: new Date(2022, 2, 11),
	  },
	  {
		id: '3',
		titre: 'Typographie',
		discipline: 'Traiter des elements',
		nbEtudiant: 21,
		dateStart: new Date(2021, 5, 27),
		dateFin: new Date(2022, 2, 11),
	  },
	  {
		id: '4',
		titre: 'Programmation',
		discipline: 'Informatique',
		nbEtudiant: 28,
		dateStart: new Date(2021, 5, 27),
		dateFin: new Date(2022, 2, 11),
	  },
  ];
  
 const Cours = () => {
	const [cours, setCours] = useState(COURS);

	const ajoutCoursHandler = (cours) => {
	  setCours((anciensCours) => {
		return [cours, ...anciensCours];
	  });
	};
return (        
		<Card>
            <div className="course-title">
                {cours.title}
				<NouvelleCours onAjoutCours={ajoutCoursHandler} />
				<ListeCours items={cours}/>
            </div>
        </Card>
);
};

export default Cours;
