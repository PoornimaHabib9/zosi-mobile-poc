import axios from 'axios';
import { GET_LIBRARY_DETAILS } from '../constants/apiConstants';

const {
  REACT_APP_API_GATEWAY_URL,
} = process.env;

const getLibraryDetails = async (libraryId) => axios.get(
  `${REACT_APP_API_GATEWAY_URL}${GET_LIBRARY_DETAILS}/${libraryId}/courses-registrations`,
  { headers: { scope: 'read:client_libraries' } },
);

export default getLibraryDetails;
