import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { deleteFavorites } from 'src/actions/animals';
import { useDispatch} from 'react-redux';

import './favoritesCards.scss';


function FavoritesCard({
  id,
  picture,
  name,
  age,
  description,
}) {
  const dispatch = useDispatch();

  return (
    <article className="favorite-card">
      <img className="favorite-card-img" src={`./resource/${picture}`} alt={name} />
      <div className="favorite-card-content">
        <h2 className="favorite-card-title">{name}</h2>
        <p className="favorite-card-age">Age : {age}</p>
        <p className="favorite-card-description">{description}</p>
      </div>
        <p className="favorite-card-link-p"><Link to={`/animal/${id}`} className="favorite-card-link">Voir le profil</Link></p>
        <button
        type="button"
        className="favorite-delete-button"
        onClick={() => dispatch(deleteFavorites(id))}>
          Supprimer des favoris
        </button>
    </article>
  );
}

FavoritesCard.propTypes = {
  id: PropTypes.number.isRequired,
  picture: PropTypes.string,
  name: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FavoritesCard;
