import { logOut, submitLogin, changeLoginField,  submitSignUp } from 'src/actions/user';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Header from 'src/components/Header';
import NavBar from 'src/components/NavBar';
import Footer from 'src/components/Footer';
import LoginForm from 'src/components/LoginForm';
import SignUpForm from 'src/components/SignUpForm';
import LogOut from 'src/components/LogOut';

import './loginSignUp.scss';

function LoginSignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isShown, setIsShown] = useState("true");
  const handleClick = event => {
    // 👇️ toggle shown state
    setIsShown(current => !current);
  };

  if (isLogged) {
    setIsShown(current => !current)
  }

  const {
    email, password, isLogged, nickname, confirmPassword, firstName, lastName, address, phoneNumber,
  } = useSelector((state) => state.user);


  return (
    <>
      <Header />
      <NavBar />
      <div className="body">
      {!isLogged && (
        <div className="button-container">
          {isShown ? (
            <button className="custom-btn" onClick={handleClick} type="button">S'inscrire</button>
          ) : (
            <button className="custom-btn" onClick={handleClick} type="button">Se connecter</button>
          )}
        </div>
        )}

      {isLogged && (
        <LogOut
        handleLogout={() => {
          // quand je me déco, je dispatche mon action logout...
            dispatch(logOut());
            localStorage.removeItem('token');
            // ... et je reviens sur la page d'accueil
            navigate('/');
          }}
          isLogged={isLogged}
        />
      )}

      {isShown ? (
        <div className="loginForm">
          <LoginForm
            email={email}
            password={password}
            changeField={(newValue, fieldName) => {
              dispatch(changeLoginField(newValue, fieldName));
            }}
            handleLogin={() => {  dispatch(submitLogin())
                                  navigate('/')}}
            handleLogout={() => {
            // quand je me déco, je dispatche mon action logout...
              dispatch(logOut());
              localStorage.removeItem('token');
              // ... et je reviens sur la page d'accueil
              navigate('/');
            }}
            isLogged={isLogged}
            loggedMessage={nickname}
          />
      </div>
      ) : (
        <div className="signUp">
          <SignUpForm
          email={email}
          password={password}
          confirmPassword={confirmPassword}
          firstName={firstName}
          lastName={lastName}
          address={address}
          phoneNumber={phoneNumber}
          changeField={(newValue, fieldName) => {
            dispatch(changeLoginField(newValue, fieldName));
          }}
          handleSignUp={() => dispatch(submitSignUp())}  
          />
        </div>)}
      </div>
      <Footer />
    </>
  );
}

export default LoginSignUp;
