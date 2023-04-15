import {combineReducers} from 'redux';
import GetAccommodationReducer from './getAccommodationReducer';
import LogInReducer from './logInReducer';
import {SignupReducer} from './signupReducer';

// NOTE: manager reducers
import GetProfileReducer from './../../managers/reducers/GetProfileReducer';
import TenantsReducer from './../../managers/reducers/TenantsReducer';
import AdminsReducer from './../../managers/reducers/AdminsReducer';
import PaymentsReducer from './../../managers/reducers/PaymentsReducer';

const rootReducer = combineReducers({
  accommodations: GetAccommodationReducer,
  isLoggedIn: LogInReducer,
  manager: GetProfileReducer,
  tenants: TenantsReducer,
  admins: AdminsReducer,
  payments: PaymentsReducer,
  signup: SignupReducer,
});

export default rootReducer;
