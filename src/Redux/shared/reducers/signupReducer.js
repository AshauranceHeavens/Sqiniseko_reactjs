import {SIGNUP} from '../actions/types/sharedActionTypes';

const initialState = {
  message: '',
};

export const SignupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      return {...state, message: action.payload};
    default:
      return state;
  }
};
