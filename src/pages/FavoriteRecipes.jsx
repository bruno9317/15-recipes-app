import React, { useEffect, useState } from 'react';
import FavoritesCard from '../Components/FavoritesCard';
import Header from '../Components/Header';

function FavoriteRecipes() {
  const [favoriteStorage, setFavoriteStorage] = useState(null);
  useEffect(() => {
    const favoritesRecipesStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
    setFavoriteStorage(favoritesRecipesStorage);
  }, []);

  const filterMealsButton = () => {
    const storage = JSON.parse(localStorage.getItem('favoriteRecipes'));
    setFavoriteStorage(storage.filter((recipe) => recipe.type === 'meal'));
  };
  const filterDrinkButton = () => {
    const storage = JSON.parse(localStorage.getItem('favoriteRecipes'));
    setFavoriteStorage(storage.filter((recipe) => recipe.type === 'drink'));
  };
  const filterAllButton = () => {
    setFavoriteStorage(JSON.parse(localStorage.getItem('favoriteRecipes')));
  };
  return (
    <div>
      <Header />
      <div className="buttons-filtro">
        <div
          className="btn-group btn-group-sm"
          role="group"
          aria-label="Small button group"
        >
          <button
            onClick={ filterAllButton }
            type="button"
            data-testid="filter-by-all-btn"
            className="btn btn-outline-dark"
          >
            All
          </button>
          <button
            onClick={ filterMealsButton }
            type="button"
            className="btn btn-outline-dark"
            data-testid="filter-by-meal-btn"
          >
            Meals
          </button>
          <button
            onClick={ filterDrinkButton }
            type="button"
            className="btn btn-outline-dark"
            data-testid="filter-by-drink-btn"
          >
            Drinks
          </button>
        </div>
      </div>
      {favoriteStorage !== null
      && (
        <div>
          {favoriteStorage
            .map((p, index) => (
              <FavoritesCard info1={ p } key={ index } index={ index } />))}
        </div>)}
    </div>
  );
}

export default FavoriteRecipes;
