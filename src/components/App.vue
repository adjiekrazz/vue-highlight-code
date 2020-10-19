<template>
    <div id="app">
        <transition name="page" mode="out-in">
            <component :is="layout" v-if="layout"/>
        </transition>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import defaultLayout from '~/layouts/default'
import landingLayout from '~/layouts/landing'

export default {
    el: '#app',
    components: {

    },
    computed: mapGetters({
        user: 'user/userId'
    }),
    watch: {
        user: function() {
            if (this.user) {
                this.layout = defaultLayout
            } else {
                this.layout = landingLayout
            }
        }
    },
    data: () => ({
        layout: landingLayout,
    })
}
</script>

