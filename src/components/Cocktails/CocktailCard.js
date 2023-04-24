import React, { useState } from "react";
import { Link } from 'react-router-dom';

import { CocktailCardContainer } from './styles';

export const CocktailCard = ({cocktail, handleRemove}) => {
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("favorites")) || []);

  const handleAddToFavorites = () => {
    let favoritesList = JSON.parse(localStorage.getItem("favorites")) || [];
    const isFavorite = favoritesList.some((item) => item.idDrink === cocktail.idDrink);
  
    if (isFavorite) {
      favoritesList = favoritesList.filter((item) => item.idDrink !== cocktail.idDrink);
      if(handleRemove){
        handleRemove(cocktail.idDrink);
      }
    } else {
      const currentDate = new Date();
      const cocktailWithDate = { ...cocktail, dateFavorited: currentDate };
      favoritesList.push(cocktailWithDate);
    }
  
    localStorage.setItem("favorites", JSON.stringify(favoritesList));
    setFavorites(favoritesList);
  };

  return (
    <CocktailCardContainer>
      <div className="card__img">
        {new Date(cocktail.dateModified).getTime() > new Date(cocktail.dateFavorited).getTime() ? <h1 className="card__label">This cocktail has been modified since you favorited it</h1> : <></>}
        <img className="card__img" src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      </div>
      <div className="card__props">
        <h3 className="card__title">{cocktail.strDrink}</h3>
        <p className="card__desc">{cocktail.strInstructions}</p>
        <div className="card__buttons">
          <Link to={`/cocktails/${cocktail.idDrink}`} className="card__button">Details</Link>
          <button className="card__button" onClick={handleAddToFavorites}>
            {favorites && favorites.some((item) => item.idDrink === cocktail.idDrink) ? "★" : "☆"}
          </button>
        </div>
      </div>
    </CocktailCardContainer>
  );
};