import React, { useState } from "react";
import { CocktailCard } from "./CocktailCard";

export const Favorites = () => {
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("favorites")) || []);

  return (
    <div className="favorites">
      <h2 className="favorites__title">Favorites</h2>
      <div className="coctails">
          {!favorites ? ( <p>No elements</p> ) : 
          (
            favorites.map((cocktail) => (
              <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
            ))
          )}
      </div>
    </div>
  );
};
