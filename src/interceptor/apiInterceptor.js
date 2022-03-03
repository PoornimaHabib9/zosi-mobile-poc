import axios from 'axios';
import { CLIENT_ID, AS_USER_ID } from '../constants/appConstants';

const { REACT_APP_AUTH0_AUDIENCE, REACT_APP_API_GATEWAY_URL } = process.env;

export const requestInterceptor = async (req, getAccessTokenSilently, isAuthenticated, logout) => {
  // doing 'as user' is allowed for GET method and available when
  // the id is set in local storage.
  // when both conditions are met we will add the required scope in
  // the jwt token and add the as_user_id parameter to the request below
  const asUserId = req.method === 'get' && localStorage.getItem(AS_USER_ID);

  if (req.url.includes(REACT_APP_API_GATEWAY_URL)
      && 'scope' in req.headers && isAuthenticated) {
    try {
      const token = await getAccessTokenSilently({
        audience: REACT_APP_AUTH0_AUDIENCE,
        scope: `${req?.headers?.scope}${asUserId ? ' admin:learners' : ''}`,
      });
      req.headers.Authorization = `Bearer ${token}`;
    } catch (error) {
      logout({ returnTo: window.location.origin });
    }
  }

  req.params = {
    ...req.params,
    clientId: JSON.parse(localStorage.getItem(CLIENT_ID))?.id,
    ...(asUserId ? { [AS_USER_ID]: asUserId } : {}),
  };
  delete req?.headers?.scope;
  return Promise.resolve(req);
};

const apiInterceptor = async (getAccessTokenSilently, isAuthenticated, logout) => {
  axios.interceptors.request.use(async (req) => (
    requestInterceptor(req, getAccessTokenSilently, isAuthenticated, logout)
  ));
};
export default apiInterceptor;
