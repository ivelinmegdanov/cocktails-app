import React, { useState } from "react";
import { CocktailCard } from "../Cocktails/CocktailCard";

import { FavoritesContainer } from './styles';

export const Favorites = () => {
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("favorites")) || []);

  const handleRemove = (id) => {
    const newFavorites = favorites.filter((cocktail) => cocktail.idDrink !== id);
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  return (
    <FavoritesContainer>
      <h2 className="favorites__title">Favorites</h2>
      <div className="coctails">
          {favorites.length === 0 ? ( <p className="empty">No elements</p> ) : 
          (
            favorites.map((cocktail) => (
              <CocktailCard key={cocktail.idDrink} cocktail={cocktail} handleRemove={handleRemove} />
            ))
          )}
      </div>
    </FavoritesContainer>
  );
};
