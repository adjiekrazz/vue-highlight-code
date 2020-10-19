<template>
    <div v-if="isShow">
        <b-alert show>
            {{ message }}
        </b-alert>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Notification',
    computed: mapGetters ({
        isShow: 'notification/isShow',
        message: 'notification/message'
    })
}
</script>