import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';
import '../style/Header.css';
// import blackHeartIcon from '../images/blackHeartIcon.svg';

function Header() {
  const favoritePath = '/favorite-recipes';
  const history = useHistory();
  const { pathname } = history.location;
  const [inputSearch, setInputSearch] = useState(false);

  const handleClickProfile = () => {
    history.push('/profile');
  };

  const handleClickSearch = () => {
    setInputSearch(!inputSearch);
  };

  return (
    <div>
      { pathname === '/drinks' && (
        <div className="div-pai-header">
          <div className="title-favorites">
            <h1 data-testid="page-title">Drinks</h1>
          </div>
          <div className="buttons-S-P">
            <button
              type="button"
              onClick={ handleClickSearch }
              className="btn btn-outline-dark"
            >
              <img
                src={ searchIcon }
                alt="imagem de pesquisa"
                data-testid="search-top-btn"
              />
            </button>
            <button
              type="button"
              onClick={ handleClickProfile }
              className="btn btn-outline-dark"
            >
              <img
                src={ profileIcon }
                alt="imagem de perfil"
                data-testid="profile-top-btn"
              />
            </button>
          </div>
          {inputSearch && (
            <SearchBar />
          )}
        </div>
      ) }

      { pathname === '/meals' && (
        <div className="div-pai-header">
          <div className="title-favorites">
            <h1 data-testid="page-title">Meals</h1>
          </div>
          <div className="buttons-S-P">
            <button
              type="button"
              onClick={ handleClickSearch }
              className="btn btn-outline-dark"
            >
              <img
                src={ searchIcon }
                alt="imagem de pesquisa"
                data-testid="search-top-btn"
              />
            </button>
            <button
              type="button"
              onClick={ handleClickProfile }
              className="btn btn-outline-dark"
            >
              <img
                src={ profileIcon }
                alt="imagem de perfil"
                data-testid="profile-top-btn"
              />
            </button>
          </div>
          {inputSearch && (
            <SearchBar />
          )}
        </div>
      ) }

      { pathname === '/profile' && (
        <div className="profile-page">
          <h1 data-testid="page-title">Profile</h1>
          <button
            type="button"
            onClick={ handleClickProfile }
            className="btn btn-outline-dark"
          >
            <img
              src={ profileIcon }
              alt="imagem de perfil"
              data-testid="profile-top-btn"
            />
          </button>
        </div>
      ) }

      { pathname === '/done-recipes' && (
        <div className="profile-page">
          <h1 data-testid="page-title">Done Recipes</h1>
          <button
            type="button"
            className="btn btn-outline-dark"
            onClick={ handleClickProfile }
          >
            <img
              src={ profileIcon }
              alt="imagem de perfil"
              data-testid="profile-top-btn"
            />
          </button>
        </div>
      ) }

      { pathname === favoritePath && (
        <div className="profile-page">
          <h1 data-testid="page-title">Favorite Recipes</h1>
          <button
            type="button"
            className="btn btn-outline-dark"
            onClick={ handleClickProfile }
          >
            <img
              src={ profileIcon }
              alt="imagem de perfil"
              data-testid="profile-top-btn"
            />
          </button>
        </div>
      ) }
      {/* <button
        type="button"
        onClick={ () => history.push(favoritePath) }
      >
        Favorites
      </button> */}
    </div>
  );
}

export default Header;
