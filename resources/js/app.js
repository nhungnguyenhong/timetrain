import './bootstrap';
import Vue from 'vue';
import VueRouter from 'vue-router';
import RouterPrefetch from 'vue-router-prefetch';
import router from "./router/index";
import BlackDashboard from "./plugins/blackDashboard";
import i18n from "./i18n";
import App from "./App";
import auth from './auth';
import VueAuth from '@websanova/vue-auth';
import VueAxios from 'vue-axios';

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/login.vue -> <example-component></example-component>
 */

Vue.use(BlackDashboard);
Vue.use(VueAxios, axios);
Vue.use(VueRouter);
Vue.router = router;
Vue.use(RouterPrefetch);
Vue.use(VueAuth, auth);

axios.defaults.baseURL = 'api';

const app = new Vue({
    el: '#app',
    router: router,
    i18n,
    render: h => h(App)
});
