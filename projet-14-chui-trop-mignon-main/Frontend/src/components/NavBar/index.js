import { Link, useNavigate } from 'react-router-dom';
import { useSelector} from 'react-redux';
import { logOut } from 'src/actions/user';
import { useDispatch } from 'react-redux';


import './navBar.scss';

function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout =() => {
    // quand je me déco, je dispatche mon action logout...
      dispatch(logOut());
      localStorage.removeItem('token');
      // ... et je reviens sur la page d'accueil
      navigate('/');
    }

  const { isLogged } = useSelector((state) => state.user);

    return (
      <div className="NavBar">
        <p className="login">🐾 <Link className='nav-link' to="/">Home</Link> 🐾</p> 
        {!isLogged ? (
          <>
            <p className="login">🐾 <Link className='nav-link' to="/loginsignUp">Login</Link> 🐾</p>
          </>
          ) : (
            <>
              <p className="login"> 
               <button
                className='nav-link'
                onClick={handleLogout}>
                
                🐾 Deconnexion 🐾
                </button>
              </p>
              <p className="login">🐾 <Link className='nav-link' to="/profil">Profil</Link> 🐾</p>
              <p className="login">🐾 <Link className='nav-link' to="/favorites">Favoris</Link> 🐾</p>
            </>
          )}
            <p className="login">🐾 <Link className='nav-link' to="/faq">FAQ</Link> 🐾</p>
      </div>
    );
}

export default NavBar;
