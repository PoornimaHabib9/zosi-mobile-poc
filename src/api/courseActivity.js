import axios from 'axios';

const { REACT_APP_API_GATEWAY_URL } = process.env;

export const getCourseActivityDetails = async (userId, productId) => axios.get(`${REACT_APP_API_GATEWAY_URL}/users/${userId}/products/${productId}/course-activities`, {
  headers: { scope: 'read:course_activities' },
});

export const getCourseActivityDetailsV2 = async (userId, productId) => axios.get(`${REACT_APP_API_GATEWAY_URL}/v2/users/${userId}/products/${productId}/course-activities`, {
  headers: { scope: 'read:course_activities' },
});

export const setCourseActivity = async ({ productId, contentId, status }) => axios.put(`${REACT_APP_API_GATEWAY_URL}/products/${productId}/course-activities`, {
  contentId,
  status,
},
{ headers: { scope: 'update:course_activities' } });
