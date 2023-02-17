export const dev = window.location.origin.includes('localhost')
export const baseURL = dev ? 'http://localhost:3000' : ''
export const useSockets = false
export const domain = 'hawkes-k.us.auth0.com'
export const audience = 'https://cwhk-api.com'
export const clientId = 'E16Sh8x2ye2tLTvdiMHccd6Awzk5lodG'
