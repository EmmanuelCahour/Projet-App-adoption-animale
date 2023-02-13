import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './adminCards.scss';

import { useDispatch} from 'react-redux';

function AdminCards({
  id,
  picture,
  name,
  age,
  description,
}) {
  const dispatch = useDispatch();

  return (
    <article className="admin-card">
      <img className="admin-card-img" src={`./resource/${picture}`} alt={name} />
      <div className="admin-card-content">
        <h2 className="admin-card-title">{name}</h2>
        <p className="admin-card-age">Age : {age}</p>
        <p className="admin-card-description">{description}</p>
      </div>
        <p className="admin-card-link-p"><Link to={`/animal/${id}`} className="favorite-card-link">Voir le profil</Link></p>
        <button
        type="button"
        className="favorite-delete-button">
          Modifier
        </button>
        <button
        type="button"
        className="favorite-delete-button">
          Supprimer
        </button>
    </article>
  );
}

AdminCards.propTypes = {
  id: PropTypes.number.isRequired,
  picture: PropTypes.string,
  name: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default AdminCards;
