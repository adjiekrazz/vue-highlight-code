<template>
    <div>
        Masuk sebagai : {{ username }} <b-button variant="danger" @click="logout">Keluar</b-button>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    computed: mapGetters({
        username: 'user/userName'
    }),
    methods: {
        async logout() {
            await this.$store.dispatch('user/logout')
        }
    }
}
</script>