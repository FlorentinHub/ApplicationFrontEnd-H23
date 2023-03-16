import React from "react";
import { NavLink } from "react-router-dom";


function NavLinks() {

    return (
        <ul>
            <li>
                <NavLink to="/home">Accueil</NavLink>
            </li>
            <li>
                <NavLink to="/teachers/home">Professeurs</NavLink>
            </li>
            <li>
                <NavLink to="/courses/home">Cours</NavLink>
            </li>
        </ul>
    );
}



export default NavLinks;