import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { RecipesContext } from '../context/RecipesContext';
import '../style/MealCard.css';

function MealsCard(receitas) {
  const { receitas: { strMeal, strMealThumb, idMeal }, index } = receitas;
  const { pegaMealId } = useContext(RecipesContext);

  const handleClick = () => {
    pegaMealId(idMeal);
  };

  return (
    <Link
      to={ `/meals/${idMeal}` }
      onClick={ handleClick }
      className="LinkCard"
    >
      <div data-testid={ `${index}-recipe-card` } className="card cardPrincipal">
        <img
          src={ strMealThumb }
          alt={ strMeal }
          data-testid={ `${index}-card-img` }
          // height="100"
          // width="18 rem"
          className="card-img-top"
        />
        <div className="card-body">
          <h1 data-testid={ `${index}-card-name` } className="card-title">{ strMeal }</h1>
        </div>
      </div>
    </Link>
  );
}

export default MealsCard;
