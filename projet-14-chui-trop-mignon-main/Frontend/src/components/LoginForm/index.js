import PropTypes from 'prop-types';

import Field from './Field';

import './loginForm.scss';

function LoginForm({
  email,
  password,
  changeField,
  handleLogin,
  isLogged,
  loggedMessage,
}) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  // const wrongEmailOrPassword = () => {
  //   {!isLogged && (navigate('/loginsignUp'))};
  // };

  return (
    <div className="login-form">
      {!isLogged && (
      <>
      <div className='login-form-intro'>
        <p className='login-form-intro-text'>Bienvenue !</p>
        <p className='login-form-intro-text'>Connectez vous :</p>
      </div>
        <form autoComplete="off" className="login-form-element" onSubmit={ handleSubmit}>
          <Field
            name="email"
            placeholder="Adresse Email"
            onChange={changeField}
            value={email}
          />
          <Field
            name="password"
            type="password"
            placeholder="Mot de passe"
            onChange={changeField}
            value={password}
          />
          <button
            type="submit"
            className="login-form-button">
            Connexion
          </button>
         
        </form>
      </>
      )}
    </div>
  );
}

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  isLogged: PropTypes.bool,
  loggedMessage: PropTypes.string,
};

LoginForm.defaultProps = {
  isLogged: false,
  loggedMessage: 'Connecté',
};

export default LoginForm;
