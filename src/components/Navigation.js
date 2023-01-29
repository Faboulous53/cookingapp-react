import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
        <ul>
            <NavLink to="/" className="nav">
                <li>Accueil</li>
            </NavLink>
            <NavLink to="/recipe" className="nav">
                <li>Recettes</li>
            </NavLink>
        </ul>
    </div>
    );
};

export default Navigation;