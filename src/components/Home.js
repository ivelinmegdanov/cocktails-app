import React, { useState, useEffect } from "react";
import { CocktailCard } from "./CocktailCard";

export const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCocktail, setSelectedCocktail] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      const result = await response.json();
      setCocktails(result.drinks);
      setLoading(false);
    };

    fetchData();
  }, [searchTerm]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleRandomCocktail = async () => {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/random.php`
    );
    const result = await response.json();
    setSelectedCocktail(result.drinks[0]);
  };

  return (
    <div>
      <div className="cocktails__search">
        <input className="search" type="text" value={searchTerm} onChange={handleChange} placeholder="Search cocktails" />
        <button className="random__btn" onClick={handleRandomCocktail}>Random Cocktail</button>
      </div>
      <div className="random__cocktail">
        {selectedCocktail && (<CocktailCard cocktail={selectedCocktail} />)}
      </div>
      <h1 className="cocktails__title">Cocktails</h1>
      <div className="coctails">
        {loading || cocktails == null ? ( <p>No elements</p> ) : 
        (
          cocktails.map((cocktail) => (
            <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
          ))
        )}
      </div>
    </div>
  );
};
