import axios from 'axios';
import {
  GET_USER_INFO,
  getUserInfoSuccess,
  ACCOUNT_SAVE,
  accountSaveSuccess
} from 'src/actions/user';


  const profilMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
      case GET_USER_INFO: {
        const state = store.getState();
        // console.log(state, 'state');
        const config = {
          method: 'get',
          url: 'https://meugnons.herokuapp.com/api/v1/profile',
          headers: {
            Authorization: `Bearer ${state.user.token}`,
          },
        };
    // console.log(config.headers.Authorization, 'hehehe');

      axios(config)
        .then((response) => {
          store.dispatch(getUserInfoSuccess(response.data));
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
      next(action);
      break;
    }
      case ACCOUNT_SAVE: {
        const state = store.getState();
        axios.patch('https://meugnons.herokuapp.com/api/v1/profile',
        {email: state.profil.Account.emails,
          password: state.profil.password,},
          {
            headers: {
              Authorization: `Bearer ${state.user.token}`,
            },
          }


        )
        .then((response) => {
          next(accountSaveSuccess(response.data));
        })
        
      }

    default:
      next(action);
    }
  
};

export default profilMiddleware;
