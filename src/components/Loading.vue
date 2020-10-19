<template>
    <div class="d-flex align-items-center" v-if="isShow">
        <strong>Menghubungi server ..</strong>
        <b-spinner class="ml-auto"></b-spinner>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    computed: mapGetters({
        isShow: 'loading/isShow'
    })
}
</script>