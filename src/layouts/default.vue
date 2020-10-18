<template>
    <div class="default-layout">
        <navbar />

        <div class="container mt-4">
            <b-row class="mt-3">
                <menus />
            </b-row>
            <b-row class="mt-3">
                <b-col cols="4" lg="3">
                    <loading class="mt-2" />
                    <notification class="mt-2"/>
                </b-col>
                <b-col cols="8" lg="9">
                    <child />
                </b-col>
            </b-row>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Child from '~/components/Child.vue'
import Navbar from '~/components/Navbar.vue'
import Menus from '~/components/Menus.vue'
import Notification from '~/components/Notification.vue'
import Loading from '~/components/Loading.vue'

export default {
    name: 'default',
    components: {
        Child, Navbar, Menus, Notification, Loading
    },
    computed: mapGetters({
        user: 'user/userId'
    })
}
</script>