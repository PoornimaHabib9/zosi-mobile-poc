import axios from 'axios';

const {
  REACT_APP_API_GATEWAY_URL,
} = process.env;

const customerListPagination = async (
  key,
  q,
  pageNo,
  pageSize,
  sColumn,
  sOrder,
) => axios.get(`${REACT_APP_API_GATEWAY_URL}/users`, {
  params: {
    q,
    pageNo,
    pageSize,
    sColumn,
    sOrder,
  },
  headers: { scope: 'read:zosi_users' },
});

export const customerUserDetail = async (id) => axios.get(`${REACT_APP_API_GATEWAY_URL}/users/${id}`, {
  headers: { scope: 'read:zosi_users' },
});

export const customerDetailOrderList = async (
  key,
  q,
  pageNo,
  pageSize,
  sModel,
  sColumn,
  sOrder,
  id,
) => axios.get(`${REACT_APP_API_GATEWAY_URL}/customers/${id}/orders`, {
  params: {
    q,
    pageNo,
    pageSize,
    sModel,
    sColumn,
    sOrder,
  },
  headers: { scope: 'read:zosi_users' },
});

export const customerOrderListPagination = async (
  key,
  q,
  pageNo,
  pageSize,
  sModel,
  sColumn,
  sOrder,
) => axios.get(`${REACT_APP_API_GATEWAY_URL}/customers/orders`, {
  params: {
    q,
    pageNo,
    pageSize,
    sModel,
    sColumn,
    sOrder,
  },
  headers: { scope: 'read:zosi_orders' },
});

export const getCustomerOrderInvoice = async ({ id }) => axios.get(`${REACT_APP_API_GATEWAY_URL}/orders/${id}/invoice`, {
  headers: { scope: '' },
});

export const getCustomerOrderDetail = async (id) => axios.get(`${REACT_APP_API_GATEWAY_URL}/customers/orders/${id}`, {
  headers: { scope: 'read:zosi_orders' },
});

export const getOrderDetailCourses = async (id) => axios.get(`${REACT_APP_API_GATEWAY_URL}/orders/${id}/courses`, {
  headers: { scope: 'read:zosi_users' },
});

export const getCreditMemo = async ({ id }) => axios.get(`${REACT_APP_API_GATEWAY_URL}/subscriptions/${id}/memo`, {
  headers: { scope: '' },
});

export const orderRefund = async ({ data }) => axios.post(`${process.env.REACT_APP_API_GATEWAY_URL}/orders/refund`, data, {
  headers: { scope: '' },
});

export const productList = async (
  key,
  q,
  pageNo,
  pageSize,
  id,
) => axios.get(`${REACT_APP_API_GATEWAY_URL}/products/${id}`, {
  params: {
    q,
    pageNo,
    pageSize,
  },
  headers: { scope: 'read:user_products' },
});

export default customerListPagination;

export const userActivityLog = async ({ data }) => axios.post(`${process.env.REACT_APP_API_GATEWAY_URL}/activity-logs`, data, {
  headers: { scope: 'create:activity_logs' },
});

export const updateCustomer = async ({ id, data }) => axios.put(`${process.env.REACT_APP_API_GATEWAY_URL}/users/${id}`, data, {
  headers: { scope: 'update:zosi_users' },
});
