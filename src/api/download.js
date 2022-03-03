import axios from 'axios';

const { REACT_APP_API_GATEWAY_URL } = process.env;

const options = {
  headers: {
    Accept: 'application/zip',
    'Content-Type': 'application/zip',
  },
  responseType: 'blob',
};

const downloadZip = async ({ data: { url } }) => axios.get(url, options);

const downloadFile = async (data, s3Key) => {
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(new Blob([data]));
  link.setAttribute('download', s3Key);
  document.body.appendChild(link);
  link.click();
  link.remove();
};

const getLibrariesForClient = async (
  key,
  q,
  pageNo,
  pageSize,
) => axios.get(`${REACT_APP_API_GATEWAY_URL}/libraries`, {
  params: {
    q,
    pageNo,
    pageSize,
  },
  headers: { scope: 'read:client_libraries' },
});

const getCourses = async (
  key,
  q,
  pageNo,
  pageSize,
) => axios.get(`${REACT_APP_API_GATEWAY_URL}/courses`, {
  params: {
    q,
    pageNo,
    pageSize,
  },
  headers: { scope: 'read:client_courses' },
});

const downloadDispatches = async ({ id, label }) => axios.get(
  `${REACT_APP_API_GATEWAY_URL}/${label}/${id}/zip`,
  {
    headers: { scope: 'read:client_dispatches' },
  },
);

export {
  getCourses,
  getLibrariesForClient,
  downloadDispatches,
  downloadFile,
  downloadZip,
};
