import axios from 'axios';

const { REACT_APP_API_GATEWAY_URL } = process.env;
export default async () => axios.get(`${REACT_APP_API_GATEWAY_URL}/clients`, {
  headers: { scope: 'read:clients' },
});

export const listLanguages = async (
  key, isPreferred,
) => axios.get(`${REACT_APP_API_GATEWAY_URL}/languages`, {
  params: {
    isPreferred,
  },
  headers: { scope: '' },
});

export const getCourseLanguages = async (id) => axios.get(`${REACT_APP_API_GATEWAY_URL}/courses/${id}/languages`, {
  headers: { scope: '' },
});
