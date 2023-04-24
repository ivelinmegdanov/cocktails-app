import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { CocktailDetailsContainer } from './styles';

export const CocktailDetails = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState(null);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(response => response.json())
      .then(data => setCocktail(data.drinks[0]))
      .catch(error => console.error(error));
  }, [id]);

  useEffect(() => {
    if (cocktail) {
      const newIngredients = [];
      for (let i = 1; i <= 15; i++) {
        const ingredient = cocktail[`strIngredient${i}`];
        if (ingredient) {
          newIngredients.push(ingredient);
        }
      }
      setIngredients(newIngredients);
    }
  }, [cocktail]);

  if (!cocktail) {
    return <div>Loading...</div>;
  }

  console.log(cocktail)

  return (
    <CocktailDetailsContainer>
      <div className="details__img">
        <img className="card__img" src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      </div>
      <div className="details__props">
        <h1 className="details__title">{cocktail.strDrink}</h1>
        <p className="details__desc"><b>Alcoholic:</b> {cocktail.strAlcoholic}</p>
        <p className="details__desc"><b>Category:</b> {cocktail.strCategory}</p>
        <p className="details__desc"><b>Glass:</b> {cocktail.strGlass}</p>
        <p className="details__desc"><b>Ingredients:</b>
          <ul>
            {ingredients.map(ingredient => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </p>
        <p className="details__desc"><b>Instructions:</b><br></br>{cocktail.strInstructions}</p>
      </div>
    </CocktailDetailsContainer>
  );
};