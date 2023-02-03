import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../index.css';
import '../celular.css';

function Login() {
  const [login, setLogin] = useState({ email: '', password: '' });
  const history = useHistory();

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };
  const magic6 = 6;
  const isValidEmail = (email) => { const regex = /^[a-z0-9._]+@[a-z0-9_]+\.[a-z]+(\.[a-z]+)?$/i; return regex.test(email); };
  const isTrue = isValidEmail(login.email) && login.password.length > magic6;

  const handleClick = () => {
    localStorage.setItem('user', JSON.stringify({ email: login.email }));
    history.push('/meals');
  };
  return (
    <form className="form-login">
      <div className="row mb-3">
        <label htmlFor="email" className="col-sm-2 col-form-label">
          Email
          <div className="col-sm-10">
            <input
              type="text"
              id="email"
              name="email"
              value={ login.email }
              onChange={ handleChange }
              data-testid="email-input"
              className="form-control"
            />
          </div>
        </label>
      </div>
      <div className="row mb-3">
        <label htmlFor="password" className="col-sm-2 col-form-label">
          Senha
          <div className="col-sm-10">
            <input
              type="password"
              id="password"
              name="password"
              value={ login.password }
              onChange={ handleChange }
              className="form-control"
              data-testid="password-input"
            />
          </div>
        </label>
      </div>
      <button
        type="button"
        disabled={ !isTrue }
        onClick={ handleClick }
        data-testid="login-submit-btn"
        className="btn btn-success"
      >
        Entrar
      </button>
    </form>
  );
}

export default Login;
