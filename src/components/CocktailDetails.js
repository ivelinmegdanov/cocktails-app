import React, { useState, useEffect } from "react";
import {Route, Link, Routes, useParams} from 'react-router-dom';

export const CocktailDetails = () => {
    const cocktailId = useParams();
    const [cocktail, setCocktail] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`);
          const result = await response.json();
          setCocktail(result.drinks);
        };
    
        fetchData();
      }, [cocktailId]);
    
      if (!cocktail) {
        return <div>Loading...</div>;
      }
    
      return (
        <div>
          <h2>{cocktail.strDrink}</h2>
          <p>Category: {cocktail.strCategory}</p>
          <p>Glass: {cocktail.strGlass}</p>
          <p>Instructions: {cocktail.strInstructions}</p>
          <h3>Ingredients:</h3>
          <ul>
            {Object.keys(cocktail)
              .filter(key => key.startsWith("strIngredient"))
              .map((key, index) => {
                if (!cocktail[key]) {
                  return null;
                }
                return (
                  <li key={index}>
                    {cocktail[key]} ({cocktail[`strMeasure${index + 1}`]})
                  </li>
                );
              })}
          </ul>
        </div>
      );
    };