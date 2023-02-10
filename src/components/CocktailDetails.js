import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const CocktailDetails = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(response => response.json())
      .then(data => setCocktail(data.drinks[0]))
      .catch(error => console.error(error));
  }, [id]);

  if (!cocktail) {
    return <div>Loading...</div>;
  }

  console.log(cocktail)
  return (
    <div className="cocktail__details">
      <div className="details__img">
        <img className="card__img" src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      </div>
      <div className="details__props">
        <h1 className="details__title">{cocktail.strDrink}</h1>
        <p className="details__desc">Alcoholic: {cocktail.strAlcoholic}</p>
        <p className="details__desc">Category: {cocktail.strCategory}</p>
        <p className="details__desc">Glass: {cocktail.strGlass}</p>
        <p className="details__desc">Instructions: {cocktail.strInstructions}</p>
      </div>
    </div>
  );
};