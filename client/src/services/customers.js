import api from './api-config';

export const getAllCustomers = async () => {
  const resp = await api.get('/customers');
  return resp.data;
}

export const getOneCustomer = async (id) => {
  const resp = await api.get(`/customers/${id}`);
  return resp.data;
}