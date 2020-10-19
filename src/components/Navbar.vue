<template>
    <b-navbar type="light" variant="light" toggleable="lg" class="navbar-style">
        <div class="container">
            <b-navbar-brand href="/">
                Vue Highlight Code
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown>
                        <template v-slot:button-content>
                            <em>{{ userName }}</em>
                        </template>
                        <b-dropdown-item href="#" v-on:click="logout()">Keluar</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item href="https://github.com/adjiekrazz/vue-highlight-code" target="_blank">Github</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </div>
    </b-navbar>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Navbar',
    computed: mapGetters({
        userName: 'user/userName'
    }),
    methods: {
        async logout() {
            await this.$store.dispatch('user/logout')
        }
    }
}
</script>