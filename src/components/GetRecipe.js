import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';


const GetRecipe = () => {
    const [data, setData] = useState([]);
    const [searchRecipe, setSearchRecipe] = useState("");

    useEffect(() => {
        axios
            .get('https://www.themealdb.com/api/json/v1/1/search.php?s='+ searchRecipe)
            .then((res) => setData(res.data.meals));           
            
    },[searchRecipe]);
    
    
    
    return (
        
        <div className="recipe">
            
            <input type="text" placeholder='Recherche en anglais' onChange={(e)=> setSearchRecipe(e.target.value)}/>
            <ul>                
                {                    
                 data?
                 data 
                .slice(0, 24)              
                .map((recipe, index) => (                    
                <Card key={index} recipe={recipe}/>              
                                               
                ))
                :<p className='no-recipe'>Aucune recette disponible</p>
                }
            </ul>
        </div>
    );
      
        
        
    
};

export default GetRecipe;
