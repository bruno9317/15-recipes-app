import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { RecipesContext } from '../context/RecipesContext';
import '../style/MealCard.css';

function DrinksCard(receitas) {
  const { receitas: { strDrink, strDrinkThumb, idDrink }, index } = receitas;
  const { pegaDrinkId } = useContext(RecipesContext);

  const handleClick = () => {
    pegaDrinkId(idDrink);
  };

  return (
    <Link
      to={ `/drinks/${idDrink}` }
      onClick={ handleClick }
      className="LinkCard"
    >
      <div data-testid={ `${index}-recipe-card` } className="card cardPrincipal">
        <img
          src={ strDrinkThumb }
          alt={ strDrink }
          data-testid={ `${index}-card-img` }
          // height="200"
          // width="10"
          className="card-img-top"
        />
        <div className="card-body">
          <h1
            data-testid={ `${index}-card-name` }
            className="card-title"
          >
            { strDrink }
          </h1>
        </div>
      </div>
    </Link>
  );
}

export default DrinksCard;
