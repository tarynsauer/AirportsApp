const BASE_URL = 'http://localhost:3000'
export const AUTH_URL = `${BASE_URL}/auth/login`
export const AUTH_POST_OPTIONS = {
  method: 'POST',
  mode: 'cors',
  body: JSON.stringify({
    email: 'admin@skygod.com',
    password: 'Binx2002!!!',
  }),
  headers: {
    'Content-Type': 'application/json'
  },
}
export const GET_AIRPORTS_URL = `${BASE_URL}/airports`
