import {LOG_OUT, LOG_IN} from './../actions/types/sharedActionTypes';

const LoggedIn = {
  loggedIn: false,
  email: '',
  id: '',
  account_type: '',
  message: '',
};

const LogInReducer = (state = LoggedIn, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        loggedIn: action.payload.loggedIn,
        email: action.payload.email,
        id: action.payload.id,
        account_type: action.payload.account_type,
        account_type: action.payload.message,
      };

    case LOG_OUT:
      return {
        ...state,
        loggedIn: action.payload.loggedIn,
        email: action.payload.email,
        id: action.payload.id,
        account_type: action.payload.account_type,
      };
    default:
      return state;
  }
};

export default LogInReducer;
