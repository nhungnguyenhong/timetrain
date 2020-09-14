import bearer from '@websanova/vue-auth/drivers/auth/bearer'
import axios from '@websanova/vue-auth/drivers/http/axios.1.x'
import router from '@websanova/vue-auth/drivers/router/vue-router.2.x'
// Auth base configuration some of this options
// can be override in method calls
const config = {
    auth: bearer,
    http: axios,
    router: router,
    tokenDefaultName: 'timesheet-token',
    tokenStore: ['localStorage'],
    rolesVar: 'roles',
    loginData: {url: 'login', method: 'POST', redirect: '/', fetchUser: true},
    // logoutData: {url: 'api/logout', method: 'POST', redirect: '/', makeRequest: true},
    fetchData: {url: 'user', method: 'GET', enabled: true},
    refreshData: {url: 'auth/refresh', method: 'GET', enabled: false, interval: 30},
    notFoundRedirect: {name: 'not-found'}
}
export default config
