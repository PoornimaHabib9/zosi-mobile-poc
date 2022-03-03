import axios from 'axios';

const {
  REACT_APP_API_GATEWAY_URL,
} = process.env;

export const certificateListPagination = async (
  key,
  q,
  pageNo,
  pageSize,
  sModel,
  sColumn,
  sOrder,
) => axios.get(`${REACT_APP_API_GATEWAY_URL}/certificates`, {
  params: {
    q,
    pageNo,
    pageSize,
    sModel,
    sColumn,
    sOrder,
  },
  headers: { scope: '' },
});

export const getCertificate = async ({ id }) => axios.get(`${REACT_APP_API_GATEWAY_URL}/certificates/${id}`, {
  headers: { scope: 'read:certificate_url' },
});

export const generateCertificate = async ({ id }) => axios.post(`${REACT_APP_API_GATEWAY_URL}/certificate/${id}/pdf`, {}, {
  headers: { scope: 'regenerate:certificates' },
});
export const createCertificate = async ({ transcriptId }) => axios.post(`${REACT_APP_API_GATEWAY_URL}/certificates/create`, { transcriptId }, {
  headers: { scope: 'create:certificates' },
});
export const deleteCertificate = async ({ id }) => axios.delete(`${REACT_APP_API_GATEWAY_URL}/certificate/${id}/pdf`, {
  headers: { scope: 'delete:certificates' },
});
export const verifyCertificate = async ({ data }) => axios.post(`${REACT_APP_API_GATEWAY_URL}/certificate/verify`, data, {
  headers: { scope: '' },
});
