import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div>
            <Logo/>
            <Navigation/>
            <h2 className='title'>Rechercher une recette</h2>
            
        </div>
    );
};

export default Home;