/**
 * External dependencies.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

/**
 * Internal dependencies.
 */
import './bootstrap';
import App from '@/components/App';
import router from '@/router';

Vue.use(VueRouter);

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
