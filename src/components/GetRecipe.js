import React, { useEffect, useState } from 'react';
import axios from 'axios';


const GetRecipe = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get('https://www.themealdb.com/api/json/v1/1/search.php?s=tomato')
            .then((res) => setData(res.data));
            
            
    }, []);
    
    return (
        <div className="recipe">
            <h1>les recettes</h1>
            <ul>
                {data.meals.map((recipe) => (
                <li>{recipe.strMeal}
                <img src={recipe.strMealThumb} alt="" /></li>
                                               
                ))}
            </ul>
        </div>
    );
      
        
        
    
};

export default GetRecipe;
