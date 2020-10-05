<template>
    <transition name="page" mode="out-in">
        {{ messages }}
        <slot>
            <router-view />
        </slot>
    </transition>
</template>
<script>
export default {
    name: 'Child',
    data: () => ({
        messages: 'Hello from Child.vue'
    })
}
</script>