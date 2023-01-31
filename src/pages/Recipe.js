import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Recipe = () => {
    return (
        <div>
            <Logo/>
            <Navigation/>
            <h2 className='title'>Les recettes</h2>
        </div>
    );
};

export default Recipe;