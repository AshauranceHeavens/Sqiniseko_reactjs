import {
  FETCH_PROFILE,
  UPDATE_PROFILE,
  FETCH_TENANTS,
  SEARCH_TENANT,
  FETCH_ADMINS,
  FETCH_PAYMENTS,
  SEARCH_PAYMENT,
  UPDATE_TENANT,
} from './types/index';
import {store} from './../../store';
import {CONSTANTS} from '../../../Components/constants/constants';
import {Alert} from 'react-native';

export const GetProfile = () => {
  return async dispatch => {
    const state = store.getState();

    const profile = {
      email: state.isLoggedIn.email,
      id: state.isLoggedIn.id,
    };

    /* NOTE: make sure the the action creator doesn't got online
    everytime when it needs the manager's profile even if the store has the profile
    check if useEffect in the manager profile page is executed everytime or once

    note useEffect is called once after logging in */

    var data = [];

    try {
      const res = await fetch(`${CONSTANTS.domain}/theoffcampus/Manager/`, {
        nethod: 'GET',
        headers: {
          'Content-type': 'application/json',
        },
        // body:JSON.stringify(profile)
      });
      const myData = await res.json();
      data = myData;
    } catch (error) {
      // console.log("what happened: " + error.message);
      throw error;
    }

    // const data = {
    //   name: 'Sqiniseko',
    //   surname: 'Zulu',
    //   compound_name: 'KwaZulu',
    //   number: '27766922451',
    //   email: 'SqinisekoZulu@gmail.com',

    //   double_room: 500,
    //   single_room: 700,
    //   wifi: 'Available',
    //   rooms: 'Available',
    //   transport: 'Available',
    // };

    dispatch({
      type: FETCH_PROFILE,
      payload: data,
    });
  };
};

export const UpdateProfile = (manager = {}) => {
  return async dispatch => {
    const profile = {
      email: manager.email,
      name: manager.name,
      second_name: manager.second_name,
      surname: manager.surname,
      number: manager.number,
      wifi: manager.wifi,
      single: manager.single_room,
      double: manager.double_room,
      rooms: manager.rooms,
      transport: manager.transport,
      compound_name: manager.compound_name,
    };

    const func = manager.func();

    try {
      const res = await fetch(`${CONSTANTS.domain}/theoffcampus/Manager/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/json',
        },
        body: JSON.stringify(profile),
      });
      var data = await res.json();
    } catch (error) {
      throw error;
      // console.log(error.message);
    }

    dispatch({
      type: UPDATE_PROFILE,
      payload: profile,
    });
  };
};

export const GetTenants = () => {
  return async dispatch => {
    // var data = [];
    try {
      const res = await fetch(
        `${CONSTANTS.domain}/theoffcampus/Manager/search`,
        {
          nethod: 'GET',
          headers: {
            'Content-type': 'application/json',
          },
        },
      );

      var data = await res.json();
      // data = mydata;
    } catch (error) {
      throw error;
    }

    /*  const data = [
      {
        id: 1,
        name: 'sanele',
        room: 65,
        second_name: 'Banele',
        surname: 'methethw',
        email: 'email@example.com',
        last_pay: '12/02/2022',

        emergencyName1: 'name',
        emergencySurname1: 'surname',
        emergencyRelationShip1: 'Mother',
        emergencyNumber1: '12345',
        emergencyEmail1: 'name',

        emergencyName2: 'name',
        emergencySurname2: 'surname',
        emergencyRelationShip2: 'Mother',
        emergencyNumber2: '22345',
        emergencyEmail2: 'name',
      },
      {
        id: 10,
        name: 'sanele',
        room: 65,
        second_name: 'Erdwin',
        surname: 'methethw',
        email: 'email@example.com',
        last_pay: '12/02/2022',
        emergencyName1: 'name',
        emergencySurname1: 'surname',
        emergencyRelationShip1: 'Mother',
        emergencyNumber1: '12345',
        emergencyEmail1: 'name',

        emergencyName2: 'name',
        emergencySurname2: 'surname',
        emergencyRelationShip2: 'Mother',
        emergencyNumber2: '22345',
        emergencyEmail2: 'name',
      },
      {
        id: 2,
        name: 'anele',
        room: 65,
        second_name: 'Erdwin',
        surname: 'methethwa',
        last_pay: '12/02/2022',

        email: 'email@example.com',
        emergencyName1: 'name',
        emergencySurname1: 'surname',
        emergencyRelationShip1: 'Mother',
        emergencyNumber1: '12345',
        emergencyEmail1: 'name',

        emergencyName2: 'name',
        emergencySurname2: 'surname',
        emergencyRelationShip2: 'Mother',
        emergencyNumber2: '22345',
        emergencyEmail2: 'name',
      },
      {
        id: 3,
        name: 'zanele',
        room: 65,
        second_name: 'Erdwin',
        surname: 'Mkhonza',
        email: 'email@example.com',
        last_pay: '12/02/2022',

        emergencyName1: 'name',
        emergencySurname1: 'surname',
        emergencyRelationShip1: 'Mother',
        emergencyNumber1: '12345',
        emergencyEmail1: 'name',

        emergencyName2: 'name',
        emergencySurname2: 'surname',
        emergencyRelationShip2: 'Mother',
        emergencyNumber2: '22345',
        emergencyEmail2: 'name',
      },
      {
        id: 4,
        name: 'zanele',
        room: 14,
        second_name: 'Erdwin',
        surname: 'Mkhonza',
        email: 'email@example.com',
        last_pay: '12/02/2022',

        emergencyName1: 'name',
        emergencySurname1: 'surname',
        emergencyRelationShip1: 'Mother',
        emergencyNumber1: '12345',
        emergencyEmail1: 'name',

        emergencyName2: 'name',
        emergencySurname2: 'surname',
        emergencyRelationShip2: 'Mother',
        emergencyNumber2: '22345',
        emergencyEmail2: 'name',
      },
      {
        id: 5,
        name: 'zanele',
        room: 14,
        second_name: 'Erdwin',
        surname: 'Mkhonza',
        last_pay: '12/02/2022',

        emergencyName1: 'name',
        emergencySurname1: 'surname',
        emergencyRelationShip1: 'Mother',
        emergencyNumber1: '12345',
        emergencyEmail1: 'name',

        emergencyName2: 'name',
        emergencySurname2: 'surname',
        emergencyRelationShip2: 'Mother',
        emergencyNumber2: '22345',
        emergencyEmail2: 'name',
      },
      {
        id: 6,
        name: 'zanele',
        room: 14,
        second_name: 'Erdwin',
        surname: 'Mkhonza',
        email: 'email@example.com',
        last_pay: '12/02/2022',

        emergencyName1: 'name',
        emergencySurname1: 'surname',
        emergencyRelationShip1: 'Mother',
        emergencyNumber1: '12345',
        emergencyEmail1: 'name',

        emergencyName2: 'name',
        emergencySurname2: 'surname',
        emergencyRelationShip2: 'Mother',
        emergencyNumber2: '22345',
        emergencyEmail2: 'name',
      },
      {
        id: 7,
        name: 'zanele',
        room: 14,
        second_name: 'Erdwin',
        surname: 'Mkhonza',
        email: 'email@example.com',
        last_pay: '12/02/2022',

        emergencyName1: 'name',
        emergencySurname1: 'surname',
        emergencyRelationShip1: 'Mother',
        emergencyNumber1: '12345',
        emergencyEmail1: 'name',

        emergencyName2: 'name',
        emergencySurname2: 'surname',
        emergencyRelationShip2: 'Mother',
        emergencyNumber2: '22345',
        emergencyEmail2: 'name',
      },
      {
        id: 8,
        name: 'zanele',
        room: 14,
        second_name: 'Erdwin',
        surname: 'Mkhonza',
        email: 'email@example.com',
        last_pay: '12/02/2022',

        emergencyName1: 'name',
        emergencySurname1: 'surname',
        emergencyRelationShip1: 'Mother',
        emergencyNumber1: '12345',
        emergencyEmail1: 'name',

        emergencyName2: 'name',
        emergencySurname2: 'surname',
        emergencyRelationShip2: 'Mother',
        emergencyNumber2: '22345',
        emergencyEmail2: 'name',
      },
    ]; */

    dispatch({
      type: FETCH_TENANTS,
      payload: data,
    });
  };
};

export const SearchTenant = name => {
  return dispatch => {
    const state = store.getState();
    const tenants = state.tenants.tenants.filter(tenant => {
      return (
        tenant.name.toLowerCase().includes(name) ||
        tenant.second_name.toLowerCase().includes(name)
      );
    });
    dispatch({
      type: SEARCH_TENANT,
      payload: tenants,
    });
  };
};

export const UpdateTenant = (myTenant = {}) => {
  return async dispatch => {
    const tenant_ = {
      id: myTenant.id,
      request: myTenant.request, //whether you wish to delete/update the tenant
    };

    try {
      const res = await fetch(`${CONSTANTS.domain}/theoffcampus/search`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(tenant_),
      });
      var data = await res.json();
    } catch (error) {
      throw error;
    }

    // const state = store.getState();
    // const tenants = state.tenants.tenants;
    // var tenant = tenants.filter(tenant => {
    //   return tenant.id == myTenant.id;
    // });

    // tenant.name = myTenant.name;
    // tenant.second_name = myTenant.second_name;
    // tenant.surname = myTenant.surname;
    // tenant.number = myTenant.number;
    if (data.message !== undefined) {
      Alert.alert('Oops!', data.message, [{text: 'sorry'}]);
    }

    dispatch({
      type: UPDATE_TENANT,
      payload: data,
    });
  };
};

export const DeleteTenant = id => {
  return dispatch => {
    const state = store.getState();
    const tenants = state.tenants.tenants.filter(tenant => {
      return tenant.id != id;
    });

    dispatch({
      type: FETCH_TENANTS,
      payload: tenants,
    });
  };
};

export const GetAdmins = () => {
  return async dispatch => {
    try {
      const res = await fetch(
        `${CONSTANTS.domain}/theoffcampus/Manager/admins`,
        {
          nethod: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          // body: JSON.stringify(profile),
        },
      );

      var data = await res.json();
    } catch (error) {
      throw error;
    }

    /*    const data = [
      {
        name: 'Anele',
        surname: 'Gumede',
        email: 'Anele@gmail.com',
        number: '2775412365',
        id: 1,
      },
      {
        name: 'Thandeka',
        surname: 'Mdletshe',
        email: 'Thandeka@gmail.com',
        number: '2775412365',
        id: 2,
      },
    ]; */

    dispatch({
      type: FETCH_ADMINS,
      payload: data,
    });
  };
};

export const AddNewAdmin = (admin = {}) => {
  return async dispatch => {
    const newAdmin = {
      email: admin.email,
      name: admin.name,
      second_name: admin.middleName,
      surname: admin.surname,
    };

    try {
      const res = await fetch(
        `${CONSTANTS.domain}/theoffcampus/Manager/admin`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'Application/json',
          },
        },
      );
      var data = await res.json();
    } catch (error) {
      throw error;
    }

    if (data.message !== undefined) {
      Alert.alert('Alert', data.message);
    }

    //try to dispatch something if there is an error
  };
};

export const DeleteAdmin = (admin = {}) => {
  return async dispatch => {
    const newAdmin = {
      id: admin.id,
      acc_id: manager.id, // state = store.getState() => state.manager.id
      email: admin.email,
      name: admin.name,
      second_name: admin.middleName,
      surname: admin.surname,
    };

    try {
      const res = await fetch(
        `${CONSTANTS.domain}/theoffcampus/Manager/deleteAdmin`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'Application/json',
          },
          body: json.stringify(newAdmin),
        },
      );

      var data = await res.json();
    } catch (error) {
      throw error;
    }

    if (data.message !== undefined) {
      Alert.alert('Alert', data.message);
    }

    //try to dispatch something if there is an error
  };
};

export const GetPayments = () => {
  return async dispatch => {
    try {
      const res = await fetch(
        `${CONSTANTS.domain}/theoffcampus/Manager/payments`,
        {
          nethod: 'GET',
          headers: {
            'Content-type': 'application/json',
          },
        },
      );

      var data = await res.json();
      // data = mydata;
    } catch (error) {
      throw error;
    }

    /* const data = [
      {
        email: 'example@gmail.com',
        name: 'Thabile',
        middle_name: 'Thabile',
        room: 5,
        reference: 'reference',
        id: 1,
        date: '02/05/2022',
        ref_email: 'ref_email@gmail.com',
      },
      {
        email: 'example@gmail.com',
        name: 'Zandile',
        middle_name: 'Anele',
        room: 5,
        reference: 'reference',
        id: 2,
        date: '02/05/2022',
        ref_email: 'ref_email@gmail.com',
      },
      {
        email: 'example@gmail.com',
        name: 'Kwanele',
        middle_name: 'Anele',
        room: 5,
        reference: 'reference',
        id: 3,
        date: '02/05/2022',
        ref_email: 'ref_email@gmail.com',
      },
      {
        email: 'example@gmail.com',
        name: 'Samke',
        middle_name: 'Anele',
        room: 5,
        reference: 'reference',
        id: 4,
        date: '02/05/2022',
        ref_email: 'ref_email@gmail.com',
      },
      {
        email: 'example@gmail.com',
        name: 'Sphe',
        middle_name: 'Anele',
        room: 5,
        reference: 'reference',
        id: 5,
        date: '02/05/2022',
        ref_email: 'ref_email@gmail.com',
      },
      {
        email: 'example@gmail.com',
        name: 'Lwandle',
        middle_name: 'Anele',
        room: 5,
        reference: 'reference',
        id: 6,
        date: '02/05/2022',
        ref_email: 'ref_email@gmail.com',
      },
      {
        email: 'example@gmail.com',
        name: 'Thami',
        middle_name: 'Anele',
        room: 5,
        reference: 'reference',
        id: 7,
        date: '02/05/2022',
        ref_email: 'ref_email@gmail.com',
      },
      {
        email: 'example@gmail.com',
        name: 'Senzo',
        middle_name: 'Anele',
        room: 5,
        reference: 'reference',
        id: 8,
        date: '02/05/2022',
        ref_email: 'ref_email@gmail.com',
      },
      {
        email: 'example@gmail.com',
        name: 'Lwazi',
        middle_name: 'Anele',
        room: 5,
        reference: 'reference',
        id: 9,
        date: '02/05/2022',
        ref_email: 'ref_email@gmail.com',
      },
    ]; */

    dispatch({
      type: FETCH_PAYMENTS,
      payload: data,
    });
  };
};

export const SearchPayments = name => {
  return dispatch => {
    const state = store.getState();
    const payments = state.payments.payments;

    const paymentResults = payments.filter(payment => {
      return payment.name.toLowerCase().includes(name);
    });

    dispatch({type: SEARCH_PAYMENT, payload: paymentResults});
  };
};
