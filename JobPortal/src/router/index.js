import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import JobDetail from "../views/JobDetail.vue"
import Dashboard from "../views/Dashboard.vue";
import JobRecomend from "../views/JobRecomend.vue";

const routes = [
    {
        path: '/',
        component: Dashboard
    },
    {
        path: '/job-dashboard',
        component: Dashboard
    },
    {
        path: '/job-detail',
        component: JobDetail
    },
    {
        path: '/job-recommendation', component: JobRecomend
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

export default router