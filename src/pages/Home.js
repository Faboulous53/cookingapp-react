import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import GetRecipe from '../components/GetRecipe';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Logo/>
            <Navigation/>
            <h2 className='title'>Rechercher une recette</h2> 
            <GetRecipe/>   
            <Footer/>        
            
        </div>
    );
};

export default Home;