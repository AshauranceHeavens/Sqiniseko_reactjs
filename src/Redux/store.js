import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './shared/reducers';

const state = {
  // accommodations:[],
  // loggedIn:{
  //   loggedIn:true,
  //   email:'',
  //   id:''
  // },
  // account_type: "",
  // manager:{
  //   // id:2,
  //   // email:"email@example.com",
  //   // name:"name",
  //   // second_name:"second name",
  //   // surname:'surname',
  //   // number:"123456789",
  //   // rent_single:"700",
  //   // rent_double:"500",
  //   // wifi:"available/not available",
  //   // transport:"available/not available",
  //   // compound_name:"compound_name",
  //   // tenants:[{}],
  //   // admins:[{}],
  //   // payments:[{}]
  // },
};
const middleware = [thunk];

export const store = createStore(
  rootReducer,
  state,
  compose(
    applyMiddleware(...middleware),
    //   applyMiddleware(thunk),
    //   // window.__REDUX_DEVTOOLS_EXTENSION__ &&
    //   //   window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);
