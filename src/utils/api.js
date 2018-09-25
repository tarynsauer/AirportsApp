export const AUTH_URL = `${process.env.REACT_APP_BASE_URL}/auth/login`
export const GET_AIRPORTS_URL = `${process.env.REACT_APP_BASE_URL}/airports`
export const GET_BUSINESSES_URL = `${process.env.REACT_APP_BASE_URL}/businesses/search`
export const GET_AUTOCOMPLETE_URL = `${process.env.REACT_APP_BASE_URL}/airports/auto_complete`

export const AUTH_POST_OPTIONS = {
  method: 'POST',
  mode: 'cors',
  body: JSON.stringify({
    email: process.env.REACT_APP_EMAIL,
    password: process.env.REACT_APP_PASSWORD,
  }),
  headers: {
    'Content-Type': 'application/json'
  },
}

export function getOptions(token) {
  const options = {
    method: 'GET',
    mode: 'cors',
    withCredentials: true,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    }
  }
  return options
}
