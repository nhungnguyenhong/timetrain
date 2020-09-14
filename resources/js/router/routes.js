import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";
import Login from "../pages/Login";

// Admin pages
const Dashboard = () => import(/* webpackChunkName: "dashboard" */"@/pages/Dashboard.vue");

const routes = [
    {
        path: "/login",
        name: 'login',
        component: Login
    },
    {
        path: "/admin",
        component: DashboardLayout,
        redirect: {
            name: "admin-dashboard"
        },
        meta: {
            auth: {roles: 'Admin', redirect: {name: 'login'}, forbiddenRedirect: '/403'}
        },
        children: [
            {
                path: "dashboard",
                name: "admin-dashboard",
                component: Dashboard
            }
        ]
    },
    {
        path: "/",
        component: DashboardLayout,
        redirect: {
            name: "dashboard"
        },
        meta: {
            auth: {roles: ['Employee', 'Leader'], redirect: {name: 'login'}, forbiddenRedirect: '/403'}
        },
        children: [
            {
                path: "dashboard",
                name: "dashboard",
                component: Dashboard
            }
        ]
    },
    {
        path: "*",
        name: 'not-found',
        component: NotFound}
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
 function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
