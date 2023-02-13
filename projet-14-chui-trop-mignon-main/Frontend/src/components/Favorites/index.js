import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getFavorites } from '../../actions/animals';
import { useNavigate } from 'react-router-dom';

import './favorites.scss';

import Header from 'src/components/Header';
import NavBar from 'src/components/NavBar';
import FavoritesCard from 'src/components/Favorites/FavoritesCards';
import Footer from 'src/components/Footer';

function Favorites() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    dispatch(getFavorites());
  }, []);

  const animals = useSelector((state) => state.animals.list);
  const favorites = useSelector((state) => state.animals.favorites);
  const { isLogged } = useSelector((state) => state.user);

  useEffect(() => {
    if (!isLogged){
       return navigate("/");
    }
 },[isLogged]);

  return (
    <div className="favorites-page">
      <Header />
      <NavBar />
      <section className="favorites-section">
        <h1 className="favorites-title">🐾🐾 Tes pipous favoris 🐾🐾</h1>
            {favorites ? (
            <div className="favorites-content">
              {favorites.map((animals) => (
                <FavoritesCard key={animals.id} {...animals} />
              ))}
            </div>
        ) : (
          <p>Pas encore de pipous favoris !</p>
        )}
    </section>
      <Footer />
    </div>
  );
}

export default Favorites;
