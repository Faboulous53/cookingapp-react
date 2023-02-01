import React from 'react';

const Card = ({ recipe }) => {
  
    return (
        <li className="card">
            <h2>{recipe.strMeal}</h2>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <div className="infos">
                <p>{recipe.strInstructions.slice(0, 100)}...</p>
            </div>
            <div className="link">
                <button>
                    {' '}
                    <a href={recipe.strSource}>Source</a>
                </button>
                <button>
                    {' '}
                    <a href={recipe.strYoutube}>Vidéo</a>
                </button>
            </div>
        </li>
    );
};

export default Card;
