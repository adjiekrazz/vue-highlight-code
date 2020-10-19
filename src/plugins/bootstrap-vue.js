import Vue from 'vue'
import { 
    BootstrapVue, IconsPlugin
} from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

[
    BootstrapVue, IconsPlugin
].forEach(Component => {
    Vue.use(Component)
})