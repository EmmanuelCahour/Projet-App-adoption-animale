import { CHANGE_LOGIN_FIELD, LOG_OUT, SUBMIT_LOGIN_SUCCESS, SUBMIT_SIGNUP } from 'src/actions/user';

export const initialState = {
  // notre état initial (user pas connecté, pas d'infos)
  isLogged: false,
  email: '',
  password: '',
  confirmPassword: '',
  nickname: null,
  token: null,
  firstName: '',
  lastName: '',
  address: '',
  phoneNumber: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_LOGIN_FIELD:
      return {
        // je recupère toujours mon state initial
        ...state,
        [action.fieldName]: action.newValue,
      };
    case SUBMIT_LOGIN_SUCCESS:
      return {
        ...state,
        // je viens de me connecter
        isLogged: true,
        // je vide mes champs
        email: '',
        password: '',
        // je sauvegarde mon pseudo et mon token
        nickname: action.pseudo,
        token: action.token,
      };
    case LOG_OUT:
      return {
        ...state,
        // on clear tout en cas de log out
        email: '',
        password: '',
        isLogged: false,
        nickname: null,
        token: null,
      };

      case SUBMIT_SIGNUP:
        return {
          isLogged: false,
        }
    default:
      return state;
  }

};

export default reducer;
