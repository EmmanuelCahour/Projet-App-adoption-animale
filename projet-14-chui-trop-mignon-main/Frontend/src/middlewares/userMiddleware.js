import axios from 'axios';
import { SUBMIT_LOGIN, SUBMIT_SIGNUP, submitLoginSuccess } from 'src/actions/user';
import { getFavorites } from '../actions/animals';
import setAuthToken from 'src/methods/setAuthToken';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN: {
      const { user } = store.getState();

      const config = {
        method: 'post',
        url: 'https://meugnons.herokuapp.com/api/v1/login',
        headers: { 'Content-Type': 'application/json' },
        data: { email: user.email, password: user.password },
      };

      axios(config)
        .then((response) => {
          // je viens de me connecter, je stocke mon token dans le state...
          const token = response.data.token;


          store.dispatch(submitLoginSuccess(response.data));
          localStorage.setItem('token', token);
          setAuthToken(token);

          store.dispatch(getFavorites());

          // et je déclenche la récupération de mes favoris :)
          // store.dispatch({ type: 'GET_FAVORITES' });
        })
        .catch((error) => {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
          }
          else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
          }
          else {
            // Something happened in setting up the request that triggered an Error
          }
        });

      // si je veux gérer un état de loading, je peux nexter aussi
      // SUBMIT_LOGIN
      next(action);
      break;
    }
    case SUBMIT_SIGNUP: {
      const { user } = store.getState();

      const config = {
        method: 'post',
        url: 'https://meugnons.herokuapp.com/api/v1/register',
        headers: { 'Content-Type': 'application/json' },
        data: {
          email: user.email,
          password: user.password,
          firstname: user.firstName,
          lastname: user.lastName,
          address: user.address,
          phone_number: user.phoneNumber,
        },
      };

      axios(config)
        .then((response) => {
        });

      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default userMiddleware;
