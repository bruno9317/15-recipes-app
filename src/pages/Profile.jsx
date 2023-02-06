import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../style/Profile.css';

function Profile() {
  const history = useHistory();

  const userEmail = JSON.parse(localStorage.getItem('user')) || '';

  function redirectDoneRecipes() {
    history.push('/done-recipes');
  }

  function redirectFavorite() {
    history.push('/favorite-recipes');
  }

  function redirectLogin() {
    history.push('/');
    localStorage.clear('profile-email');
  }

  return (
    <div>
      <Header />
      <div className="email-div">
        <h1 data-testid="profile-email">{ userEmail.email}</h1>
      </div>

      <button
        type="button"
        data-testid="profile-done-btn"
        className="btn btn-dark"
        onClick={ redirectDoneRecipes }
      >
        Done Recipes
      </button>

      <button
        type="button"
        data-testid="profile-favorite-btn"
        className="btn btn-dark"
        onClick={ redirectFavorite }
      >
        Favorite Recipes
      </button>

      <button
        type="button"
        data-testid="profile-logout-btn"
        className="btn btn-dark"
        onClick={ redirectLogin }
      >
        Logout
      </button>
      <Footer />

    </div>
  );
}

export default Profile;
