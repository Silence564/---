import {createRouter, createWebHashHistory} from "vue-router";

import Home from './views/Home.vue';
import Club from './views/Club.vue';

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/page_club', name: 'Club', component: Club}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router