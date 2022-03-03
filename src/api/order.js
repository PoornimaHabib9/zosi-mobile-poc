import axios from 'axios';

const {
  REACT_APP_API_GATEWAY_URL,
} = process.env;

export const orderListPagination = async (
  key,
  q,
  pageNo,
  pageSize,
  sModel,
  sColumn,
  sOrder,
) => axios.get(`${REACT_APP_API_GATEWAY_URL}/orders`, {
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

export const getSubscriptionDetail = async (id, courseId) => axios.get(`${process.env.REACT_APP_API_GATEWAY_URL}/subscriptions/${id}/courses/${courseId}`, {
  headers: { scope: '' },
});

export const enrolLearner = async ({ email, id, courseId }) => {
  const newLearner = {
    email,
  };
  return axios.put(
      `${process.env.REACT_APP_API_GATEWAY_URL}/subscription/${id}/courses/${courseId}/course-seats`,
      newLearner,
      { headers: { scope: '' } },

  );
};

export const startCourse = async (data) => axios.put(`${REACT_APP_API_GATEWAY_URL}/transcripts`, data, {
  headers: { scope: '' },
});

export const getOrderInvoice = async ({ id }) => axios.get(`${REACT_APP_API_GATEWAY_URL}/orders/${id}/invoice`, {
  headers: { scope: '' },
});

export const userLicensesListPagination = async (
  key,
  q,
  pageNo,
  pageSize,
  sModel,
  sColumn,
  sOrder,
  id,
  courseId,
) => axios.get(`${REACT_APP_API_GATEWAY_URL}/subscriptions/${id}/courses/${courseId}/course-seats`, {
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

export const unenrollLearner = async ({ id, courseSeatIds, courseId }) => {
  const data = {
    courseSeatIds,
  };
  return axios.put(
      `${process.env.REACT_APP_API_GATEWAY_URL}/subscriptions/${id}/courses/${courseId}/course-seats`,
      data,
      { headers: { scope: '' } },
  );
};

export const changeLanguage = async ({
  id, languageId, courseId,
}) => {
  const data = {
    languageId,
    courseId,
  };
  return axios.put(
      `${REACT_APP_API_GATEWAY_URL}/transcripts/${id}`,
      data,
      { headers: { scope: '' } },

  );
};

export const getRefundNoteList = async (id) => axios.get(`${process.env.REACT_APP_API_GATEWAY_URL}/notes/orders/${id}`, {
  headers: { scope: '' },
});
