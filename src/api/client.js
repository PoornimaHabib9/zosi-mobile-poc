import axios from 'axios';

const { REACT_APP_API_GATEWAY_URL } = process.env;

export default async () => axios.get(`${REACT_APP_API_GATEWAY_URL}/client`, {
  headers: { scope: 'read:client_clients' },
});

export const updateClient = async ({ id, data }) => axios.put(`${process.env.REACT_APP_API_GATEWAY_URL}/clients/${id}`, data, {
  headers: { scope: 'update:client_clients' },
});
