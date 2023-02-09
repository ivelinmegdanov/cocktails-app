import React, { useState, useEffect } from "react";
import { CocktailCard } from "./CoctailCard";

export const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(false);

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

  return (
    <div>
      <h1>Cocktails</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search cocktails"
      />
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
