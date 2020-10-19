import Vue from 'vue'
import store from '~/store'
import App from '~/components/App'
import router from '~/router'

import '~/plugins'
import '~/assets'

/**
 * Vue Instance.
 */
new Vue({
    store,
    router,
    ...App
})