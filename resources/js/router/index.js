/**
 * External dependencies.
 */
import VueRouter from 'vue-router';

/**
 * Internal dependencies.
 */
import client from '@/client';
import Login from '@/pages/Login';
import Dashboard from '@/pages/Dashboard';
import getCurrentUser from '@/features/authentication/queries/getCurrentUser.graphql';

const routes = [
    {
        name: 'dashboard',
        path: '/',
        component: Dashboard,
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
    const { data: { user } } = await client.query({
        query: getCurrentUser,
    });

    if (to.name === 'login' && user) {
        return next({
            name: 'dashboard',
        });
    }

    if (to.name !== 'login' && !user) {
        return next({
            name: 'login',
        });
    }

    return next();
});

export default router;
