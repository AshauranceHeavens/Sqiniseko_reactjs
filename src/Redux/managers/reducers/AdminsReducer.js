import {FETCH_ADMINS} from './../actions/types/';

const initialState = {
  admins: '',
  adminResults: '',
};

const AdminsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ADMINS:
      return {...state, admins: action.payload, adminResults: action.payload};
      break;
    default:
      return state;
  }
};

export default AdminsReducer;
