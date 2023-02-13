import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './profil.scss';

import Header from 'src/components/Header';
import NavBar from 'src/components/NavBar';
import Footer from 'src/components/Footer';

import { getUserInfo, 
  changeInputEmailAccount,
  changeInputPasswordAccount,
  changeInputConfirmPasswordAccount,
  accountSaveSuccess
} from '../../actions/user';

function Profil({ newValue, 
  email,
  password,
  confirmPassword,
  Account,
 }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [toogle, setToogle] = useState(false);

  const handleEmailChange= (event) => {
    dispatch(changeInputEmailAccount(event.target.value));
  };

  const handlePasswordChange= (event) => {
    dispatch(changeInputPasswordAccount(event.target.value));
  };
   const handleConfirmPasswordChange= (event) => {
    dispatch(changeInputConfirmPasswordAccount(event.target.value));
  };

  const handleSubmit= (event) => {
    event.preventDefault();
    dispatch(accountSaveSuccess());
    refresh();
  };

  const refresh = () => {
    navigate('/');
  }; 
  useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  const profil = useSelector((state) => state.profil.profil);
  const { isLogged } = useSelector((state) => state.user);

  useEffect(() => {
    if (!isLogged){
       return navigate("/");
    }
 },[isLogged]);

  return (

    <div className='profil-page'>
      <Header />
      <NavBar />

      <p className="admin-link"><Link className='nav-link' to="/admin">Panel Admin</Link></p>

        <p className="title">🐾🐾  Mon profil  🐾🐾 </p>
        <div className='body_border'>

          <div className="profil_item">
          <p>Nom: {profil.lastname}</p> 
          <p>Prenom: {profil.firstname}</p>
          <p>Adresse postale : {profil.address}</p>
          <p>Email : {profil.email}</p>
          <p>téléphone: {profil.phone_number}</p>
        </div>
        <button
          type="submit"
          className="btn"
          onClick={() => setToogle(!toogle)}
          >Modifier
        </button>
      
     

      { toogle && (
      <form className="setting">
        <p className="Formulaireinfos">Changer d'email</p>
        <div className="Formulaire_Change">
          <input
            className='input_change'
            id="outlined-input"
            label=""
            variant="outlined"
            placeholder="user@gmail.com"
            size="small"
            value={email}
            onChange={handleEmailChange}
          />
        </div>

        <div className="Formulaire_Change">
          <p className="Formulaireinfos">Saisissez votre nouveau mot de passe</p>

          <input
            className='input_change'
            id="outlined-password-input"
            label="Nouveau mot de passe"
            type="password"
            variant="outlined"
            size="small"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>

        <div className="Formulaire_Change">
          <p className="Formulaireinfos">Saisissez-le une nouvelle fois</p>
          <input
          className='input_change'
            id="outlined-password-input"
            label="Confirmation"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            size="small"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />

            <button
            type="submit"

            className="btn"
            onClick={handleSubmit}

            >Enregister
            </button>

        </div>

      </form>
        )}
      </div>
      <Footer />
    </div>

  );
}

export default Profil;

