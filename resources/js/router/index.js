/**
 * External dependencies.
 */
import VueRouter from 'vue-router';

/**
 * Internal dependencies.
 */
import Login from '@/pages/login';

const routes = [
    {
        name: 'login',
        path: '/login',
        component: Login,
    },
];

const router = new VueRouter({
    routes,
    mode: 'history',
});

export default router;
