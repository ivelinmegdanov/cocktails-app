import React from "react";
import { Link } from 'react-router-dom';

export const CocktailCard = (cocktail) => {
    function addToFavorites() {
        console.log("added");
    }

  return (
    <div className="cocktail__card">
      <img className="card__img" src={cocktail.cocktail.strDrinkThumb} alt={cocktail.cocktail.strDrink} />
      <h3 className="card__title">{cocktail.cocktail.strDrink}</h3>
      <p className="card__desc">{cocktail.cocktail.strInstructions}</p>
      <div className="card__buttons">
        <Link to={`/cocktails/${cocktail.cocktail.idDrink}`} state={{ folder: "braids" }} className="card__button">Details</Link>
      </div>
    </div>
  );
};