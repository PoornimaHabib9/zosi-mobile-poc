import axios from 'axios';

const { REACT_APP_API_GATEWAY_URL } = process.env;

export const getHistory = async (queryKey, q, pageNo, pageSize, sModel, sColumn, sOrder, id) => axios.get(`${REACT_APP_API_GATEWAY_URL}/history/${queryKey}/${id}`, {
  headers: { scope: 'read:history_logs' },
}).catch((err) => ({ error: err }));

export const resetPasswordHistoryLog = async (data) => axios.post(`${process.env.REACT_APP_API_GATEWAY_URL}/activity-logs`, data, {
  headers: { scope: 'create:activity_logs' },
});
