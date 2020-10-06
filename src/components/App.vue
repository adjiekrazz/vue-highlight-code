<template>
    <div id="app">
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
    })
}
</script>

