<template>
    <div class="">
        {{ messages }}
        {{ info }}
    </div>
</template>
<script>
export default {
    data: () => ({
        messages: 'Hello from Home.vue',
        info: ''
    }),
    mounted () {
        this.$http
            .get('https://highlight-code-api.jefrydco.vercel.app/api/options')
            .then(response => (this.info = response))
    }
}
</script>