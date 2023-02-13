import axios from 'axios';

import {
  GET_ANIMALS,
  GET_FAVORITES,
  getAnimalsSucess,
  getFavoritesSuccess,
  ADD_FAVORITES,
  DELETE_FAVORITES,
} from 'src/actions/animals';

const animalsMiddleware = (store) => (next) => (action) => {
  setTimeout(0);
   
  next(action);

  switch (action.type) {
    case GET_ANIMALS: {
      axios.get('https://meugnons.herokuapp.com/api/v1/animals')
      // axios.get('http://meugnons.herokuapp.com/api/v1/animals')
      .then((response) => {
        store.dispatch(getAnimalsSucess(response.data));
      });
      next(action);
      break;
  }
    
    case GET_FAVORITES: {
      const state = store.getState();

      const config = {
        method: 'get',
        url: 'https://meugnons.herokuapp.com/api/v1/favorites',
        headers: {
          Authorization: `Bearer ${state.user.token}`,
        },
      };

      axios(config)
      .then((response) => {
        store.dispatch(getFavoritesSuccess(response.data));

      })
      .catch((error) => {
      });
      next(action);
      break;
    }

    case ADD_FAVORITES: {
      const state = store.getState();

      const config = {
        method: 'post',
        url: 'https://meugnons.herokuapp.com/api/v1/favorites',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${state.user.token}`
        },
        data: { animal_id: action.favoriteId },
      };

      axios(config)
        .then((response) => {
          next(action);
        })
        .catch((error) => {
        });  

      break;
    }

    case DELETE_FAVORITES: {
      const state = store.getState();

      const config = {
        method: 'delete',
        url: 'https://meugnons.herokuapp.com/api/v1/favorites',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${state.user.token}`
        },
        data: { animal_id: action.favoriteId },
      };

      axios(config)
        .then((response) => {
          next(action);
        })
        .catch((error) => {
        });  

      break;
    }

    default:
      next(action);
  }
};

export default animalsMiddleware;

