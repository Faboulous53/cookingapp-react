import React from 'react';

const Card = ({recipe}) => {
    return (
        <li className="card">
        
        <div className="infos">
          <h2>{recipe.strMeal}</h2>
          <h4>{}</h4>
          <p>Pop. {}</p>
        </div>
      </li>
    );
};

export default Card;