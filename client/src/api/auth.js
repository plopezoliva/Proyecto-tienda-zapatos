import axios from 'axios'
axios.defaults.withCredentials = false

export async function onRegistration(registrationData) {
  return await axios.post(
    'https://zapatero-60py.onrender.com/api/register',
    registrationData
  )
}

export async function onLogin(loginData) {
  return await axios.post('https://zapatero-60py.onrender.com/api/login', loginData)
}

export async function onLogout() {
  return await axios.get('https://zapatero-60py.onrender.com/api/logout')
}

export async function fetchProtectedInfo() {
  return await axios.get('https://zapatero-60py.onrender.com/api/protected')
}
export async function fetchRoles(email) {
  return await axios.post('https://zapatero-60py.onrender.com/api/prueba',email)
}

