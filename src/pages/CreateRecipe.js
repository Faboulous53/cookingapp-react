import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Recipe = () => {
    return (
        <div>
            <Logo/>
            <Navigation/>
            <h2 className='title'> Créer une recette</h2>
        </div>
    );
};

export default Recipe;