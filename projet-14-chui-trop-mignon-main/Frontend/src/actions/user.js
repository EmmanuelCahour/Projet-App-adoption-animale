export const CHANGE_LOGIN_FIELD = 'CHANGE_LOGIN_FIELD';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SUBMIT_LOGIN_SUCCESS = 'SUBMIT_LOGIN_SUCCESS';
export const LOG_OUT = 'LOG_OUT';
export const SUBMIT_SIGNUP = 'SUBMIT_SIGNUP';
export const GET_USER_INFO = 'GET_USER_INFO';
export const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS';

export const CHANGE_EMAIL_INPUT_ACCOUNT = 'CHANGE_EMAIL_INPUT_ACCOUNT';
export const CHANGE_EMAIL_INPUT_ACCOUNT_SUCCESS = 'CHANGE_EMAIL_INPUT_ACCOUNT';
export const CHANGE_PASSWORD_INPUT_ACCOUNT = 'CHANGE_PASSWORD_INPUT_ACCOUNT';
export const CHANGE_PASSWORD_INPUT_ACCOUNT_SUCCESS = 'CHANGE_PASSWORD_INPUT_ACCOUNT';
export const CHANGE_PASSWORDCONFIRM_INPUT_ACCOUNT =
  'CHANGE_PASSWORDCONFIRM_INPUT_ACCOUNT';
export const UPDATE_ACCOUNT_SUCCESS = 'UPDATE_ACCOUNT_SUCCESS';
export const UPDATE_ACCOUNT = 'UPDATE_ACCOUNT';
export const ACCOUNT_SAVE = 'ACCOUNT_SAVE';

// export const UPDATE_ACCOUNT_ERROR = 'UPDATE_ACCOUNT_ERROR';


export const changeLoginField = (newValue, fieldName) => ({
  type: CHANGE_LOGIN_FIELD,
  newValue,
  fieldName,
});

export const submitLoginSuccess = (apiResponse) => ({
  type: SUBMIT_LOGIN_SUCCESS,
  ...apiResponse,
});

export const logOut = () => ({
  type: LOG_OUT,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const submitSignUp = () => ({
  type: SUBMIT_SIGNUP,
});

// Account

export const getUserInfo = () => ({
  type: GET_USER_INFO,
});

export const getUserInfoSuccess = (profile) => ({
  type: GET_USER_INFO_SUCCESS,
  profile,
})

export const changeInputEmailAccount = (newValue) => ({
  type: CHANGE_EMAIL_INPUT_ACCOUNT,
  newValue,
});
export const changeInputPhoneAccount = (newValue) => ({
  type: CHANGE_PHONE_INPUT_ACCOUNT,
  newValue,
});

export const changeInputPasswordAccount = (newValue) => ({
  type: CHANGE_PASSWORD_INPUT_ACCOUNT,
  newValue,
});

export const changeInputConfirmPasswordAccount = (newValue) => ({
  type: CHANGE_PASSWORDCONFIRM_INPUT_ACCOUNT,
  newValue,
});

export const accountSaveSuccess = () => ({
  type: ACCOUNT_SAVE,

});


export const accountSaveError = (errorsList) => ({
  type: UPDATE_ACCOUNT_ERROR,
  errorsList,
});


