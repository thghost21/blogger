// _env.js_
export const dev = window.location.origin.includes('localhost')
export const baseURL = dev ? 'https://sandbox.codeworksacademy.com' : ''

export const domain = 'codeworksclassroom.auth0.com'
export const clientId = 'pOXw2OGv1LsYi7LEBmDF04RLkXQvldml'
export const audience = 'https://codeworksclassroom.com'

export const useSockets = false