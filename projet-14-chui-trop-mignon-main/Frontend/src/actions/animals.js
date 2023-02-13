export const GET_ANIMALS = 'GET_ANIMALS';
export const GET_ANIMALS_SUCCESS = 'GET_ANIMALS_SUCCESS';
export const GET_FAVORITES = 'GET_FAVORITES';
export const GET_FAVORITES_SUCCESS = 'GET_FAVORITES_SUCCESS';
export const ADD_FAVORITES = 'ADD_FAVORITES';
export const DELETE_FAVORITES = 'DELETE_FAVORITES';

export const getAnimals = () => ({
  type: GET_ANIMALS,
});

export const getAnimalsSucess = (animals) => ({
  type: GET_ANIMALS_SUCCESS,
  animals,
});

export const getFavorites = () => ({
  type: GET_FAVORITES,
});

export const getFavoritesSuccess = (favorites) => ({
  type: GET_FAVORITES_SUCCESS,
  favorites,
});

export const addFavorites = (favoriteId) => ({
  type: ADD_FAVORITES,
  favoriteId
})

export const deleteFavorites = (favoriteId) => ({
  type: DELETE_FAVORITES,
  favoriteId
})
