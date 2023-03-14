import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />
		<NavMenu>
		<NavLink to='/acceuil' activeStyle>
			Accueil
		</NavLink>
		<NavLink to='/Professeurs' activeStyle>
			Professeurs
		</NavLink>
		<NavLink to='/cours' activeStyle>
			Cours
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink href="https://www.cmontmorency.qc.ca/" target="_blank">College Montmorency</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
