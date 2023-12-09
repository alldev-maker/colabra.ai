// `Cookies` is loaded from `https://cdn.jsdelivr.net/npm/js-cookie@3.0.1/dist/js.cookie.min.js`
// eslint-disable-next-line no-undef
const loggedIn = Cookies.get('isLoggedIn') === 'true'
const isHome = window.location.pathname === '/'
if (loggedIn && isHome) window.location.replace('https://lab.colabra.ai')
