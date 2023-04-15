import {
  GET_ACCOMMODATION,
  GET_ACCOMMODATION_ERROR,
  SEARCH_ACCOMMODATION,
} from './../actions/types/sharedActionTypes';
import {useSelector} from 'react-redux';

var initialState = {
  accommodations: [],
  accommodationSearchResults: [],
  accommodationErrors: '',
};

const GetAccommodationReducer = (state = initialState, action) => {
  // const accommodations = useSelector(
  //   state => state.accommodations.accommodations,
  // );

  switch (action.type) {
    case GET_ACCOMMODATION:
      return {
        ...state,
        accommodations: action.payload,
        accommodationSearchResults: action.payload,
      };
    case SEARCH_ACCOMMODATION:
      return {
        ...state,
        accommodationSearchResults: action.payload,
      };
    case GET_ACCOMMODATION_ERROR:
      return {
        ...state,
        accommodationErrors: action.payload,
      };
    default:
      return state;
  }
};

export default GetAccommodationReducer;
