import axios from 'axios';

const {
  REACT_APP_API_GATEWAY_URL,
} = process.env;

export const myLearningListPagination = async (
  key,
  q,
  pageNo,
  pageSize,
  sModel,
  sColumn,
  sOrder,
) => axios.get(`${REACT_APP_API_GATEWAY_URL}/course-seats`, {
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

export const unAssignedCoursesPagination = async (
  key,
  q,
  pageNo,
  pageSize,
  sModel,
  sColumn,
  sOrder,
) => axios.get(`${REACT_APP_API_GATEWAY_URL}/subscriptions`, {
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

export const getResourceList = async () => axios.get(`${REACT_APP_API_GATEWAY_URL}/course-seats`, {
  params: {
    type: 'resource',
  },
  headers: { scope: '' },
});

export const downloadResourceFile = async ({ id, transcriptId }) => axios.get(`${REACT_APP_API_GATEWAY_URL}/contents/${id}/download`, {
  params: {
    transcriptId,
  },
  headers: { scope: '' },
});

export const fetchAllTabProducts = async ({ pageParam = 1, limit = 10 }) => {
  const response = axios.get(`${REACT_APP_API_GATEWAY_URL}/v2/course-seats/products`, {
    params: {
      pageNo: pageParam,
      pageSize: limit,
      type: 'course',
    },
    headers: { scope: '' },
  });
  const { data: { rows, pageCount, count } = {} } = await response;
  return {
    rows,
    count,
    nextPage: pageParam + 1,
    totalPages: pageCount,
  };
};
