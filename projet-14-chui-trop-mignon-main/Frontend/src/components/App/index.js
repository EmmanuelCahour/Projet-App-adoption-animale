/* eslint-disable import/no-extraneous-dependencies */
import { Routes, Route, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import setAuthToken from 'src/methods/setAuthToken';
import { getAnimals } from 'src/actions/animals';

import './styles.css';

import Home from 'src/components/Home';
import LoginSignUp from '../LoginSignUp';
import Profil from '../Profil';
import Contact from '../Contact';
import Faq from '../Faq';
import ListAnimals from '../ListAnimals';
import ProfileAnimal from '../ProfileAnimal';
import Favorites from '../Favorites';
import Error from '../Error';
import Admin from '../Admin';

function App() {
  // On check le JWT
  const token = localStorage.getItem('token');
  if (token) {
    setAuthToken(token);
  }

  const dispatch = useDispatch();

  // tableau de dep vide => exécuté uniquement au premier rendu.
  useEffect(() => {
    dispatch(getAnimals());
  }, []);

  // useLocation me permet de récuperer des infos sur l'url en cours
  const location = useLocation();

  // un effet qui sera joué a chaque changement de l'url
  useEffect(() => {
    // je remonte ma page en haut
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    document.title = 'Chui trop meugnon';
  });

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loginsignUp" element={<LoginSignUp />} />
        <Route path="/listanimals" element={<ListAnimals />} />
        <Route path="*" element={<Error />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/animal/:id" element={<ProfileAnimal />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/*" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
