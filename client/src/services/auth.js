import api from './api-config';

export const loginSeller = async (loginData) => {
  const resp = await api.post('/auth/login', { authentication: loginData })
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.seller
}

export const registerSeller = async (registerData) => {
  const resp = await api.post('/sellers/', { seller: registerData })
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.seller
}

export const verifySeller = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/auth/verify');
    return resp.data
  }
  return null
}

export const removeToken = () => {
  api.defaults.headers.common.authorization = null
}