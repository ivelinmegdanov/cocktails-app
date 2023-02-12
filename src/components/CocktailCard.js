import React, { useState } from "react";
import { Link } from 'react-router-dom';

export const CocktailCard = (cocktail) => {
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("favorites")) || []);

  const handleAddToFavorites = () => {
    let favoritesList = JSON.parse(localStorage.getItem("favorites")) || [];
    const isFavorite = favoritesList.some((item) => item.idDrink === cocktail.cocktail.idDrink);
  
    if (isFavorite) {
      favoritesList = favoritesList.filter((item) => item.idDrink !== cocktail.cocktail.idDrink);
    } else {
      const currentDate = new Date();
      const cocktailWithDate = { ...cocktail.cocktail, dateFavorited: currentDate };
      favoritesList.push(cocktailWithDate);
    }
  
    localStorage.setItem("favorites", JSON.stringify(favoritesList));
    setFavorites(favoritesList);
  };

  return (
    <div className="cocktail__card">
      <div className="card__img">
        <img className="card__img" src={cocktail.cocktail.strDrinkThumb} alt={cocktail.cocktail.strDrink} />
      </div>
      <div className="card__props">
        <h3 className="card__title">{cocktail.cocktail.strDrink}</h3>
        <p className="card__desc">{cocktail.cocktail.strInstructions}</p>
        <div className="card__buttons">
          <Link to={`/cocktails/${cocktail.cocktail.idDrink}`} className="card__button">Details</Link>
          <button className="card__button" onClick={handleAddToFavorites}>
            {favorites && favorites.some((item) => item.idDrink === cocktail.cocktail.idDrink) ? "★" : "☆"}
          </button>
        </div>
      </div>
    </div>
  );
};