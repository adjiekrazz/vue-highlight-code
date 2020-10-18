<template>
    <b-card no-body>
        <b-row>
            <b-col>
                <ul class="nav nav-pills fluid">
                   <li v-for="menu in menus" :key="menu.route" class="nav-item">
                        <router-link :to="{ name: menu.route }" class="nav-link" active-class="active">
                            <b-icon :icon="menu.icon"></b-icon> {{ menu.name }}
                        </router-link>
                    </li>
                </ul>
            </b-col>
        </b-row>
    </b-card>
    <!--
    <b-card title="Menu">
        <ul class="nav flex-column nav-pills">
            <li v-for="menu in menus" :key="menu.route" class="nav-item">
                <router-link :to="{ name: menu.route }" class="nav-link" active-class="active">
                    <b-icon :icon="menu.icon"></b-icon> {{ menu.name }}
                </router-link>
            </li>
        </ul>
    </b-card>
    -->
</template>
<script>
export default {
    computed: {
        menus () {
            return [
                {
                    icon: 'star',
                    name: 'Sorot Kode',
                    route: 'highlight'
                },
                {
                    icon: 'file-earmark-code',
                    name: 'Kode Tersimpan',
                    route: 'listcode'
                }
            ]
        }
    },
}
</script>