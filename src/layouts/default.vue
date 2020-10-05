<template>
    <div class="default-layout">
        {{ messages }}
        <child />
    </div>
</template>
<script>
import Child from '~/components/Child.vue'

export default {
    name: 'default',
    components: {
        Child
    },
    data: () => ({
        messages: 'Hello from default layout!'
    })
}
</script>
<style lang="scss">
.default-layout {
    color: #636b6f;
    height: 100vh;
    font-weight: 100;
    position: relative;

    .links > a {
        color: #636b6f;
        height: 100vh;
        font-weight: 600;
        letter-spacing: .1rem;
        text-decoration: none;
        text-transform: uppercase;
    }
}
</style>