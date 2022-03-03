import axios from 'axios';

import {
  AUTH0_ADMIN_RESET_USER_PASSWORD,
  CONECTION,
} from '../constants/apiConstants';

const {
  REACT_APP_AUTH0_CLIENT_ID,
  REACT_APP_AUTH0_DOMAIN,
  REACT_APP_API_GATEWAY_URL,
} = process.env;

export const changePassword = async (email) => {
  const options = {
    method: 'POST',
    url: `https://${REACT_APP_AUTH0_DOMAIN}${AUTH0_ADMIN_RESET_USER_PASSWORD}`,
    headers: { 'content-type': 'application/json' },
    data: {
      client_id: REACT_APP_AUTH0_CLIENT_ID,
      email,
      connection: CONECTION,
    },
  };
  return axios.request(options);
};

export const createUser = async ({ data }) => {
  const phoneNumber = data.phoneNumber && data.phoneNumber.length > 1 && data.phoneNumber;
  const newUser = {
    ...data,
    phoneNumber,
  };
  return axios.post(
      `${process.env.REACT_APP_API_GATEWAY_URL}/users`,
      newUser,
      { headers: { scope: 'create:client_users' } },
  );
};

export const clientUsersListPagination = async (
  key,
  q,
  pageNo,
  pageSize,
  sColumn,
  sOrder,
) => axios.get(`${REACT_APP_API_GATEWAY_URL}/company/users`, {
  params: {
    q,
    pageNo,
    pageSize,
    sColumn,
    sOrder,
  },
  headers: { scope: 'read:client_users' },
});

export const clientUserDetails = async (id) => axios.get(`${REACT_APP_API_GATEWAY_URL}/company/users/${id}`, {
  headers: { scope: '' },
});

export const resetUserPassword = async (payload) => {
  const { email } = payload;
  const options = {
    method: 'POST',
    url: `https://${REACT_APP_AUTH0_DOMAIN}${AUTH0_ADMIN_RESET_USER_PASSWORD}`,
    headers: { 'content-type': 'application/json' },
    data: {
      client_id: REACT_APP_AUTH0_CLIENT_ID,
      email,
      connection: CONECTION,
    },
  };
  return axios.request(options);
};

export const updateUser = async ({ id, data }) => axios.put(`${process.env.REACT_APP_API_GATEWAY_URL}/company/users/${id}`, data, {
  headers: { scope: 'update:client_users' },
});

export const updateOwnProfile = async ({ id, data }) => axios.put(`${process.env.REACT_APP_API_GATEWAY_URL}/user-profile/${id}`, data, {
  headers: { scope: '' },
});

export const getAuth0Users = async ({ q, id }) => axios.get(`${REACT_APP_API_GATEWAY_URL}/auth-users`, {
  params: {
    q,
    subscriptionId: id,
  },
  headers: { scope: '' },
});
