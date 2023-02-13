import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function LogOut ({
  handleLogout,
  isLogged,
  loggedMessage, 
}) {

  return (
    <div className="logOut">
    {isLogged && (
      <div className="logOut-logged">
        <p className="logOut-message">
          {loggedMessage}
        </p>
        <p className="logOut-redirection"><Link to="/">
          <button type>Reprenez votre navigation</button></Link>
        </p>
        <p className="logOut-redirection"><Link to="/profil">
          <button type>Accédez à votre espace membre</button></Link>
        </p>
        <button
          type="button"
          className="login-form-button"
          onClick={handleLogout}
        >
          Déconnexion
        </button>
      </div>
    )}
    </div>
  )
}

LogOut.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  isLogged: PropTypes.bool,
  loggedMessage: PropTypes.string,
};

LogOut.defaultProps = {
  isLogged: false,
  loggedMessage: 'Connecté',
};

export default LogOut;

