<template>
    <div class="default-layout">
        <navbar />

        <b-container class="mt-4">
            <b-row class="mt-2">
                <b-col>
                    <menus />
                </b-col>
            </b-row>
            <b-row class="mt-2">
                <b-col>
                    <notification />
                </b-col>
            </b-row>
            <b-row class="mt-2">
                <b-col>
                    <child />
                </b-col>
            </b-row>
            <b-row class="mt-2">
                <b-col>
                    <loading />
                </b-col>
            </b-row>
        </b-container>
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
        Child, Navbar, Menus, Notification, Loading, Userinfo
    },
    computed: mapGetters({
        userId: 'user/userId',
        userName: 'user/userName'
    })
}
</script>