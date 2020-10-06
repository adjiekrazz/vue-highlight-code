<template>
    <b-card title="Menu">
        <ul class="nav flex-column nav-pills">
            <li v-for="menu in menus" :key="menu.route" class="nav-item">
                <router-link :to="{ name: menu.route }" class="nav-link" active-class="active">
                    <b-icon :icon="menu.icon"></b-icon> {{ menu.name }}
                </router-link>
            </li>
        </ul>
    </b-card>
</template>
<script>
export default {
    computed: {
        menus () {
            return [
                {
                    icon: 'upload',
                    name: 'Unggah Kode',
                    route: 'upload'
                },
                {
                    icon: 'clipboard',
                    name: 'Tempel Kode',
                    route: 'paste'
                }
            ]
        }
    },
}
</script>