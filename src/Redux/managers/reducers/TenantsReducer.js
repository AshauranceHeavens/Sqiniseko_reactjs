import {FETCH_TENANTS, SEARCH_TENANT, UPDATE_TENANT} from './../actions/types';

const initialState = [(tenants = []), (tenantResults = [])];

const TenantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TENANTS:
      myTenants = action.payload.map(tenant => {
        return tenant;
      });

      return {...state, tenants: myTenants, tenantResults: myTenants};
    case SEARCH_TENANT:
      return {...state, tenantResults: action.payload};
    case UPDATE_TENANT:
      /*update a single tenant in the state*/
      return state;
    default:
      return state;
  }
};

export default TenantsReducer;
