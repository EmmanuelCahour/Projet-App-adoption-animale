import { 
  GET_USER_INFO,
  GET_USER_INFO_SUCCESS,
  CHANGE_EMAIL_INPUT_ACCOUNT,
  CHANGE_PASSWORD_INPUT_ACCOUNT,
  CHANGE_PASSWORDCONFIRM_INPUT_ACCOUNT,
  UPDATE_ACCOUNT_SUCCESS,
} from 'src/actions/user';

export const initialState = {
  emails: "",
  password: "",
  confirmPasswordAccount: "",
  updateSuccess: false,
  isLogged: false,
  profil: {},
  emailAccount: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_INFO:
      return {
        ...state,

        isLogged: true,
      };
    case GET_USER_INFO_SUCCESS:
      return {
        ...state,
        profil: action.profile

      };

    case CHANGE_EMAIL_INPUT_ACCOUNT:
      return {
        ...state,
        Account: {
          ...state.Account,
          emails: action.newValue,
        },
      };

    case CHANGE_PASSWORD_INPUT_ACCOUNT:
      return {
        ...state,
      
          password: action.newValue,
          updateSuccess: false,
        
      };

    case CHANGE_PASSWORDCONFIRM_INPUT_ACCOUNT:
      return {
        ...state,
        Account: {
          ...state.Account,
          confirmPasswordAccount: action.newValue,
          updateSuccess: false,
        },
      };

      case UPDATE_ACCOUNT_SUCCESS:
        return {
          ...state,
          
            ...state.profil.Account,
          
          alertSuccess: true,
          isSet: true,
        };
      default:
        return state;
      }

};

export default reducer;

