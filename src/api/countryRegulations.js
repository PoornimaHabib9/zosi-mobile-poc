import axios from 'axios';

export const { REACT_APP_API_GATEWAY_URL } = process.env;
export const countryRegulations = async () => axios.get(`${REACT_APP_API_GATEWAY_URL}/country-regulations`, {
  headers: { scope: 'read:client_country_regulations' },
});
