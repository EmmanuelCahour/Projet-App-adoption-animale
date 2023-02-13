import PropTypes from 'prop-types';

import Field from 'src/components/LoginForm/Field';

import './signUpForm.scss';

function SignUpForm({
  email,
  password,
  confirmPassword,
  firstName,
  lastName,
  address,
  phoneNumber,
  changeField,
  isLogged,
  loggedMessage,
  handleSignUp,
}) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSignUp();
  };

  return (
    <div className="signUp-form">
      {isLogged && (
        <div className="signUp-form-logged">
          <p className="signUp-form-message">
            {loggedMessage}
          </p>
          
        </div>
      )}
      {!isLogged && (
      <div className='signUp-form-container'>
        <div className='signUp-form-intro'>
          <p className='signUp-form-intro-text'>Bienvenue !</p>
          <p className='signUp-form-intro-text'>Rejoignez nous :</p>
        </div>

        <form autoComplete="off" className="signUp-form-element" onSubmit={handleSubmit}>
          <Field
            name="email"
            className='input_change'
            placeholder="Adresse Email"
            onChange={changeField}
            value={email}
          />
          <Field
            name="password"
            className='input_change'
            type="password"
            placeholder="Mot de passe"
            onChange={changeField}
            value={password}
          />
          <Field
            name="confirmPassword"
            className='input_change'
            type="password"
            placeholder="Confirmez le mot de passe"
            onChange={changeField}
            value={confirmPassword}
          />
          <Field
            name="firstName"
            className='input_change'
            placeholder="Prénom"
            onChange={changeField}
            value={firstName}
          />
          <Field
            name="lastName"
            className='input_change'
            placeholder="Nom de famille"
            onChange={changeField}
            value={lastName}
          />
          <Field
            name="address"
            className='input_change'
            placeholder="Adresse"
            onChange={changeField}
            value={address}
          />
          <Field
            name="phoneNumber"
            className='input_change'
            placeholder="Téléphone"
            onChange={changeField}
            value={phoneNumber}
          />
          <button
            type="submit"
            className="signUp-form-button"
          >
            Créer le compte
          </button>
        </form>
      </div>
      )}
    </div>
  );
}

SignUpForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  isLogged: PropTypes.bool,
  loggedMessage: PropTypes.string,
};

SignUpForm.defaultProps = {
  isLogged: false,
  loggedMessage: 'Connecté',
};

export default SignUpForm;
