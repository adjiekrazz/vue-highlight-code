<template>
    <div id="app">
        {{ messages }}
        <transition name="page" mode="out-in">
            <component :is="layout" v-if="layout" />
        </transition>
    </div>
</template>
<script>
import defaultLayout from '~/layouts/default'

export default {
    el: '#app',
    components: {

    },
    data: () => ({
        layout: defaultLayout,
        messages: 'Hello App.vue'
    })
}
</script>

