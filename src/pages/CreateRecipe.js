import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Recipe = () => {
    return (
        <div>
            <Logo/>
            <Navigation/>
            <h2 className='title'> Créer une recette</h2>
            <div className="center">
            <p>Cette page est en cours d'élaboration, revenez prochainement!</p>
            </div>
        </div>
    );
};

export default Recipe;