<template>
    <b-card>
        <b-row>
            <b-col cols="12" lg="6">
                    <b-form-group label="Nama Pengguna : ">
                        <b-form-input
                            v-model="userName"
                            required
                        ></b-form-input>
                    </b-form-group>
                </b-col>
        </b-row>
        <b-row>
            <b-col cols="12" lg="6">
                <b-button block variant="primary" @click="login">
                    Masuk
                </b-button>
            </b-col>
        </b-row>
    </b-card>
</template>
<script>
export default {
    data: () => {
        return {
            userName: 'jefrydco',
        }
    },
    methods: {
        login() {
            this.$store.dispatch('user/login', {
                userName: this.userName
            })
        }
    }
}
</script>