import {FETCH_PROFILE, UPDATE_PROFILE} from './../actions/types';

const initialState = {
  id: 2,
  email: '',
  name: '',
  second_name: '',
  surname: '',
  number: '',
  rooms: '',
  single_room: '',
  double_room: '',
  wifi: '',
  transport: '',
  compound_name: '',
  tenants: [{}],
  admins: [{}],
  payments: [{}],
};

const GetProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROFILE:
      return {
        ...state,
        id: action.payload.id,
        email: action.payload.email,
        name: action.payload.name,
        second_name: action.payload.middle_name,
        surname: action.payload.surname,
        number: action.payload.number,
        rooms: action.payload.rooms,
        single_room: action.payload.single_room,
        double_room: action.payload.double_room,
        wifi: action.payload.wifi,
        transport: action.payload.transport,
        compound_name: action.payload.compound_name,
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        name: action.payload.name,
        second_name: action.payload.second_name,
        surname: action.payload.surname,
        number: action.payload.number,
        rooms: action.payload.rooms,
        single_room: action.payload.single,
        double_room: action.payload.double,
        wifi: action.payload.wifi,
        transport: action.payload.transport,
        compound_name: action.payload.compound_name,
      };
    default:
      return state;
  }
};

export default GetProfileReducer;
