import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import("../pages/HomePage.vue")
    },
    {
        path: '/search',
        name: 'search',
        props: true,
        component: () => import("../pages/SearchPage.vue")
    },
    {
        path: '/:id',
        name: 'details',
        component: () => import("../pages/DetailPage.vue")
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;