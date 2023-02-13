import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { addFavorites } from 'src/actions/animals';

import './cardProfile.scss';

import { useDispatch, useSelector } from 'react-redux';

function CardProfile({
  id,
  picture,
  sex,
  name,
  age,
  color,
  species,
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
        Connectez vous pour ajouter en favoris
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

    <article className="card-profile">
      <img className="card-profile-img" src={`./../resource/${picture}`} alt={name} />
      <div className="card-profile-content">
        <h2 className="card-profile-title">{name}</h2>
        <p className="card-profile-age">Age : {age}</p>
        <p className="card-profile-info">Sexe : {sex}</p>
        <p className="card-profile-info">Couleur : {color}</p>
        <p className="card-profile-info">Espèce : {species}</p>
        <p className="card-profile-description">{description}</p>
        <p className="card-link-p"><Link to={`/listanimals`} className="card-link">Retournez à la liste</Link></p>
      </div>
        {FavoriteButton}
    </article>
  );
}

CardProfile.propTypes = {
  id: PropTypes.number.isRequired,
  thumbnail: PropTypes.string,
  name: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CardProfile;
