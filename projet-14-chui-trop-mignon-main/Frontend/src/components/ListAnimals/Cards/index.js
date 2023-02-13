import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { addFavorites } from 'src/actions/animals';

import './cards.scss';

import { useDispatch, useSelector } from 'react-redux';

function Card({
  id,
  picture,
  name,
  age,
  description,
  ...rest
}) {
  const dispatch = useDispatch();

  const { isLogged } = useSelector((state) => state.user);

  const isFavorited = useSelector(
    (state) => {
      return state.animals.favorites.some(
        favoriteAnimal => favoriteAnimal.id === id
      )
    }
  );


  const addToFavorite = (id) => {
    dispatch(addFavorites(id))
  };

  const navigate = useNavigate();


  let FavoriteButton = (
    <button
      type="button"
      className="card-favorite-button"
      onClick={() => navigate('/loginsignUp')}
    >
        Connectez vous pour ajouter aux favoris
    </button>
  )

  if(isLogged) {
    if(isFavorited) {
      FavoriteButton = <span>Dans les favs</span>
    } else{
      FavoriteButton = (
          <button
            type="button"
            className="card-favorite-button"
            onClick={() => addToFavorite(id)}
          >
            Ajouter aux favoris
          </button>
      )
    }
  }


  return (
    <article className="card">
      <img className="card-img" src={`./resource/${picture}`} alt={name} />
      <div className="card-content">
        <h2 className="card-title">{name}</h2>
        <p className="card-age">Age : {age}</p>
        <p className="card-description">{description}</p>
        <p className="card-link-p"><Link to={`/animal/${id}`} className="card-link">Voir le profil</Link></p>
      </div>
        {FavoriteButton}
    </article>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  thumbnail: PropTypes.string,
  name: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
