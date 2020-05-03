/**
 * External dependencies.
 */
import VueRouter from 'vue-router';
import gql from 'graphql-tag';

/**
 * Internal dependencies.
 */
import Login from '@/pages/login';
import client from '@/client';

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

router.beforeEach(async (from, to, next) => {
    const { data: { user } } = client.query({
        query: '',
    });

    if (from.name !== 'login' && !localStorage.getItem('laravel_api_token')) {
        return next({
            name: 'login',
        });
    }

    return next();
});

export default router;
