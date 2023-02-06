import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { RecipesContext } from '../../context/RecipesContext';
import './Carousel.css';

function RecommendationDrinkCard(receitas) {
  const { receitas: { strDrink, strDrinkThumb, idDrink }, index } = receitas;
  const { pegaDrinkId } = useContext(RecipesContext);

  const handleClick = () => {
    pegaDrinkId(idDrink);
  };

  return (
    <Link
      to={ `/drinks/${idDrink}` }
      onClick={ handleClick }
      className="link-div"
    >
      <div data-testid={ `${index}-recommendation-card` } className="card">
        <h1
          data-testid={ `${index}-recommendation-title` }
        >
          { strDrink }
        </h1>
        <img
          src={ strDrinkThumb }
          alt={ strDrink }
          data-testid={ `${index}-card-img` }
          // height="200"
          className="card-img-top"
          // width="10"
        />
      </div>
    </Link>
  );
}

export default RecommendationDrinkCard;
