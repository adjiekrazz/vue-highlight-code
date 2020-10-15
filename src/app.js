import Vue from 'vue';
import App from '~/components/App';
import router from '~/router';

import '~/plugins';
import '~/assets';

/**
 * Vue Instance.
 */
const app = new Vue({
    router,
    ...App
});