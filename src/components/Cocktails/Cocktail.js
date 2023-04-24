import React, { useState, useEffect } from "react";
import { CocktailCard } from "./CocktailCard";

import {  CocktailContainer } from './styles';

export const Cocktail = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCocktail, setSelectedCocktail] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      if(searchTerm){
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
        );
        const result = await response.json();
        setCocktails(result.drinks);
        setLoading(false);
      } else {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink`
        );
        const result = await response.json();
        console.log(result);
        setCocktails(result.drinks);
        setLoading(false);
      }
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
    <CocktailContainer>
      <div className="cocktails__search">
        <input className="search" type="text" value={searchTerm} onChange={handleChange} placeholder="Search cocktails" />
        <button className="random__btn" onClick={handleRandomCocktail}>Random Cocktail</button>
      </div>
      <div className="random__cocktail">
        {selectedCocktail && (<CocktailCard cocktail={selectedCocktail} />)}
      </div>
      <h1 className="cocktails__title">Cocktails</h1>
      <div className="coctails">
        {loading || cocktails == null ? ( 
          <div class="loader">
          <div class="loader-square"></div>
          <div class="loader-square"></div>
          <div class="loader-square"></div>
          <div class="loader-square"></div>
          <div class="loader-square"></div>
          <div class="loader-square"></div>
          <div class="loader-square"></div>
          </div>
         ) : 
        (
          cocktails.map((cocktail) => (
            <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
          ))
        )}
      </div>
    </CocktailContainer>
  );
};
