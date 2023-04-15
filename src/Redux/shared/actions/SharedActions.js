import {Alert} from 'react-native';
import {
  GET_ACCOMMODATION,
  GET_ACCOMMODATION_ERROR,
  SEARCH_ACCOMMODATION,
  LOG_IN,
  LOG_OUT,
  SIGNUP,
  FORGOT_PWD,
} from './types/sharedActionTypes';
// import {useSelector} from 'react-redux';
import React, {useState} from 'react';
import {store} from './../../store';
import {CONSTANTS} from './../../../Components/constants/constants';

var myAccommodations = [];

export const GetAccommodation = (aSearch = 'all') => {
  return async dispatch => {
    const search = {
      search: aSearch,
    };
    var mydata = [];
    try {
      const res = await fetch(`${CONSTANTS.domain}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/json',
        },
        body: JSON.stringify(search),
      });
      const data = await res.json();
      var ResponseStatus = await res.status;
      // console.log(headers);
      mydata = data;
    } catch (err) {
      throw err;
    }

    /*const data = [
        {
          id: 1,
          img_link: null,
          compound_name: 'KwaZulu',
          number: '27766922451',
          wifi: 'available',
          rooms: 'not available',
          transport: 'not available',
          single_room: 700,
          double_room: 500,
        },
        {
          id: 2,
          img_link: null,
          compound_name: 'KwaMkhize',
          number: '27766922451',
          wifi: 'not available',
          rooms: 'available',
          transport: 'available',
          single_room: 700,
          double_room: 500,
        },
        {
          id: 3,
          img_link: null,
          compound_name: 'KwaNsibande',
          number: '27766922451',
          wifi: 'available',
          rooms: 'not available',
          transport: 'available',
          single_room: 700,
          double_room: 500,
        },
        {
          id: 4,
          img_link: null,
          compound_name: 'KwaMdletshe',
          number: '27766922451',
          wifi: 'available',
          rooms: 'not available',
          transport: 'available',
          single_room: 700,
          double_room: 500,
        },
        {
          id: 5,
          img_link: null,
          compound_name: 'KwaNgema',
          number: '27766922451',
          wifi: 'available',
          rooms: 'available',
          transport: 'available',
          single_room: 700,
          double_room: 500,
        },
        {
          id: 6,
          img_link: null,
          compound_name: 'KwaMthethwa',
          number: '27766922451',
          wifi: 'available',
          rooms: 'available',
          transport: 'available',
          single_room: 700,
          double_room: 500,
        },
      ];*/

    myAccommodations = data;

    const data = mydata;

    if (data.message !== undefined) {
      Alert.alert('Opps!', data.message, [{text: 'ok'}]);
    }

    dispatch({
      type: GET_ACCOMMODATION,
      payload: data,
    });
  };
};

// };

export const SearchAccommodation = aSearch => {
  return dispatch => {
    var search = {
      search: aSearch,
      // search: 'ngema',
    };
    /* const accommodations = [
      {
        id: 1,
        img_link: null,
        compound_name: 'KwaZulu',
        number: '27766922451',
        wifi: 'available',
        rooms: 'not available',
        transport: 'available',
        single_room: 700,
        double_room: 500,
      },
      {
        id: 2,
        img_link: null,
        compound_name: 'KwaMkhize',
        number: '27766922451',
        wifi: 'available',
        rooms: 'available',
        transport: 'available',
        single_room: 700,
        double_room: 500,
      },
      {
        id: 3,
        img_link: null,
        compound_name: 'KwaNsibande',
        number: '27766922451',
        wifi: 'available',
        rooms: 'not available',
        transport: 'available',
        single_room: 700,
        double_room: 500,
      },
      {
        id: 4,
        img_link: null,
        compound_name: 'KwaMdletshe',
        number: '27766922451',
        wifi: 'available',
        rooms: 'not available',
        transport: 'available',
        single_room: 700,
        double_room: 500,
      },
      {
        id: 5,
        img_link: null,
        compound_name: 'KwaNgema',
        number: '27766922451',
        wifi: 'available',
        rooms: 'available',
        transport: 'available',
        single_room: 700,
        double_room: 500,
      },
      {
        id: 6,
        img_link: null,
        compound_name: 'KwaMthethwa',
        number: '27766922451',
        wifi: 'available',
        rooms: 'available',
        transport: 'available',
        single_room: 700,
        double_room: 500,
      },
    ]; */

    var data = '';

    // console.log(search.search);

    myAccommodations = store.getState();
    accommodations = myAccommodations.accommodations.accommodations;

    data = accommodations.filter(accommodation => {
      return accommodation.compound_name.toLowerCase().includes(search.search);
    });

    dispatch({
      type: SEARCH_ACCOMMODATION,
      payload: data,
    });
  };
};

export const LogIn = userCredentials => {
  return async dispatch => {
    const user = {
      account_type: userCredentials.acc_type,
      email: userCredentials.email,
      password: userCredentials.password,
    };

    var myData = [];

    try {
      const res = await fetch(`${CONSTANTS.domain}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'Applicaiton/json',
        },
        body: JSON.stringify(user),
      });

      const data = await res.json();
      myData = data;
    } catch (error) {
      // console.log("This is what happend: " + error.message);
      throw error;
    }

    // const data = {
    //   loggedIn: 'True',
    //   email: 'example@gmail.com',
    //   acc_type: user.account_type,
    //   id: 2,
    // };
    if (myData.message !== undefined) {
      Alert.alert('Opps!', myData.message, [{text: 'ok'}]);
    }
    dispatch({
      type: LOG_IN,
      payload: myData,
    });
  };
};

export const LogOut = () => {
  return async dispatch => {
    const user = {
      loggedIn: false,
      email: '',
      acc_type: '',
      id: '',
    };

    var data = [];

    try {
      const res = await fetch(
        `${CONSTANTS.domain}/theoffcampus/Manager/logout`,
        {
          method: 'GET',
          header: {
            'Content-Type': 'Application/json',
          },
        },
      );

      const mydata = await res.json();
      data = mydata;
    } catch (error) {
      throw error;
    }

    dispatch({
      type: LOG_OUT,
      payload: data,
    });
  };
};

export const Signup = (account = {}) => {
  return async dispatch => {
    const User = {
      email: account.email,
      name: account.name,
      middle_name: account.middle_name,
      surname: account.surname,
      compoundName: account.compound_name,
      password: account.password,
      passwordRepeat: account.passwordRepeat,
      account_type: account.account_type,
    };

    try {
      const res = await fetch(`${CONSTANTS.domain}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/json',
        },
        body: JSON.stringify(User),
      });
      var data = await res.json();
    } catch (error) {
      throw error;
    }

    if (data.message !== undefined) {
      Alert.alert('Opps!', data.message, [{text: 'ok'}]);
    }

    dispatch({
      type: SIGNUP,
      payload: data,
    });
  };
};

export const ForgotPassword = (account = {}) => {
  return async dispatch => {
    const user = {
      email: account.email,
      account_type: account.account_type,
    };

    try {
      const res = await fetch(`${CONSTANTS.domain}/theoffcampus/forgotpwd`, {
        method: 'POST',
        headers: {
          'Content-type': 'Application/json',
        },
        body: JSON.stringify(user),
      });
      var data = await res.json();
    } catch (error) {
      throw error;
    }

    if (data.message !== undefined) {
      Alert.alert('Opps!', data.message, [{text: 'ok'}]);
    }

    dispatch({
      type: FORGOT_PWD,
      payload: data,
    });
  };
};
