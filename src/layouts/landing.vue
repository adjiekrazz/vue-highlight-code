<template>
    <div class="landing-layout">
        <b-container>
            <b-row class="justify-content-md-center mt-5">
                <h1>Vue Highlight Code</h1>
            </b-row>
            <b-row class="justify-content-md-center mt-5">
                <b-col lg="6">
                    <div class="shiki">
                        <div class="shiki__meta">
                            <div class="shiki__language">Masuk</div>
                            <div class="shiki_filename">Daftar</div>
                        </div>
                        <div class="shiki__code">
                            <code>
                                <div class="dim">
                                    <span>Nama Pengguna :</span>
                                </div>
                                <div class="highlight">
                                    <span>
                                        <b-form-input
                                            v-model="form.userName"
                                            placeholder="adjiekrazz"
                                        ></b-form-input>
                                    </span>
                                </div>
                                <div class="dim">
                                    <b-button variant="primary" block @click="formSubmit">{{ formActive }}</b-button>
                                </div>
                                <div class="dim text-center">
                                    <span>{{ questionText }}</span>
                                </div>
                                <div class="dim">
                                    <b-button variant="outline-light" block @click="registerOrLogin">{{ secondButton }}</b-button>
                                </div>
                            </code>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>
import Child from '~/components/Child.vue'
import Navbar from '~/components/Navbar.vue'

export default {
    name: 'default',
    components: {
        Child, Navbar
    },
    data: () => {
        return {
            form: {
                userName: ''
            },
            formActive: 'Masuk',
            secondButton: 'Daftar',
            questionText: 'Belum Punya Akun ?'
        }
    },
    watch: {
        formActive: function() {
            if (this.formActive == 'Masuk') {
                this.secondButton = 'Daftar'
                this.questionText = 'Belum Punya Akun ?'
            } else {
                this.secondButton = 'Masuk'
                this.questionText = 'Sudah Punya Akun ?'
            }
        }
    },
    methods: {
        registerOrLogin() {
            if (this.formActive == 'Masuk') {
                this.formActive = 'Daftar'
            } else {
                this.formActive = 'Masuk'
            }
        },
        formSubmit() {
            this.$store.dispatch('user/login', {
                userName: this.form.userName
            })
        }
    }
}
</script>