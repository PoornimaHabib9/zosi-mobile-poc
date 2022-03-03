import axios from 'axios';

export const { REACT_APP_API_GATEWAY_URL } = process.env;
const languagesList = async (isPreferred) => axios.get(`${REACT_APP_API_GATEWAY_URL}/languages`, {
  params: { isPreferred },
  headers: { scope: '' },
});

export default languagesList;
