/**
 * External dependencies.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueApollo from 'vue-apollo';

/**
 * Internal dependencies.
 */
import './bootstrap';
import App from '@/components/App';
import router from '@/router';
import client from '@/graphql/client';

Vue.use(VueRouter);
Vue.use(VueApollo);

const apolloProvider = new VueApollo({
    defaultClient: client,
});

new Vue({
    router,
    render: h => h(App),
    apolloProvider,
}).$mount('#app');
