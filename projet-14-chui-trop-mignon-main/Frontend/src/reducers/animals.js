import { GET_ANIMALS, GET_ANIMALS_SUCCESS, GET_FAVORITES_SUCCESS, ADD_FAVORITES, DELETE_FAVORITES } from "src/actions/animals";
import { LOG_OUT } from 'src/actions/user';

export const initialState = {
  list: [],
  favorites: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_ANIMALS:
      return {
        ...state,
      };
    case GET_ANIMALS_SUCCESS:
      return {
        ...state,
        list: action.animals,
      };
    case GET_FAVORITES_SUCCESS:
      return {
        ...state,
        favorites: action.favorites,
      };
    case LOG_OUT:
      return {
        ...state,
        favorites: [],
        token: null,
      };
    case ADD_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.favoriteId],
      };
    case DELETE_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites.filter(favorite => favorite.id !== action.favoriteId)]
      }
    default:
      return state;
  }
};

export default reducer;
