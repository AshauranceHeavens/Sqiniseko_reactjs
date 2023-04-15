import {FETCH_PAYMENTS, SEARCH_PAYMENT} from './../actions/types/';

const initialState = {
  payments: '',
  paymentResults: '',
};

const PaymentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PAYMENTS:
      return {
        ...state,
        payments: action.payload,
        paymentResults: action.payload,
      };
    case SEARCH_PAYMENT:
      return {...state, paymentResults: action.payload};
    default:
      return state;
  }
};

export default PaymentsReducer;
