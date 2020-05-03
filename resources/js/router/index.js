/**
 * External dependencies.
 */
import VueRouter from 'vue-router';

/**
 * Internal dependencies.
 */
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Dashboard from '@/pages/Dashboard';
import { getCurrentUser } from '@/graphql/types/authentication/queries';

const routes = [
    {
        name: 'dashboard',
        path: '/',
        component: Dashboard,
    },
    {
        name: 'register',
        path: '/register',
        component: Register,
    },
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

router.beforeEach(async (to, from, next) => {
    const { data: { user } } = await getCurrentUser();

    if (to.name === 'login' && user) {
        return next({
            name: 'dashboard',
        });
    }

    if ((to.name !== 'login' && to.name !== 'register') && !user) {
        return next({
            name: 'login',
        });
    }

    return next();
});

export default router;
