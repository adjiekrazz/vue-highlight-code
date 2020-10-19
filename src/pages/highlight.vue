<template>
    <div class="">
        <b-card>
            <b-form @submit.stop.prevent ref="form">
                <b-row>
                    <b-col md="3">
                        <b-form-group label="Pilih Bahasa :">
                            <b-form-select
                                v-model="form.lang"
                                :options="langOptions"
                                size="md"
                                required
                            ></b-form-select>
                        </b-form-group>
                    </b-col>
                    <b-col md="3">
                        <b-form-group label="Nama file :">
                            <b-form-input
                                v-model="form.fileName"
                                required
                            ></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col md="3" v-if="form.lang == 'typescript' || form.lang == 'json'">
                        <b-form-group label="Opsi :">
                            <b-form-select
                                v-model="form.twoslash"
                                :options="tsOptions"
                                size="md"
                            ></b-form-select>
                        </b-form-group>
                    </b-col>
                    <b-col md="3">
                        <b-form-group label="Pilih baris : ">
                            <b-form-input
                                v-model="form.highlight"
                                required
                            ></b-form-input>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="12">
                        <b-form-group label="Masukkan Kode :">
                            <b-form-textarea
                                v-model="form.code"
                                rows="4"
                                max-rows="8"
                            ></b-form-textarea>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row v-if="responseHighlight">
                    <b-col>
                        <b-button @click="saveCode" variant="primary" block>Simpan</b-button>
                    </b-col>
                </b-row>
            </b-form>
        </b-card>
        <b-row class="mt-3">
            <b-col>
                <span v-html="responseHighlight"></span>
            </b-col>
        </b-row>
    </div>
</template>
<script>
import debounce from 'debounce'
import cleanDeep from 'clean-deep'
import { urlBuilder, sendData } from '../utils'
import { URL_API } from '../constants'
import { mapGetters } from 'vuex'

export default {
    data: () => ({
        form: {
            lang: '',
            fileName: '',
            highlight: '',
            twoslash: 'twoslash',
            code: ''
        },
        langOptions: [],
        tsOptions: ['twoslash', 'tsconfig'],
        responseHighlight: ''
    }),
    computed: mapGetters({
        user: 'user/userId'
    }),
    watch: {
        form: {
            handler: debounce(function() {
                this.responseHighlight = ''
                this.formSubmit(this.$refs.form)
            }, 500 ),
            deep: true            
        }
    },
    mounted () {
        this.getLanguages()
    },
    methods: {
        async getLanguages() {
            const result = await this.$http.get(URL_API + '/options')
            this.langOptions = result.data.data.languages
        },
        async formSubmit() {
            try {
                this.$store.dispatch('loading/showLoading', null)
                const response = await sendData(urlBuilder(URL_API, {
                    lang : this.form.lang,
                    fileName : this.form.fileName,
                    highlight : this.form.highlight,
                    twoslash : this.form.twoslash
                }), { code: this.form.code })

                if (response.success && !response.error) {
                    this.responseHighlight = response.data
                } else {
                    throw new Error(response.message)
                }
            } catch (error) {
                const errorNotificationData = {
                    isShow: true,
                    message: error.message || 'Bahasa, nama file, dan baris sorot harus diisi'
                }
                this.$store.dispatch('notification/showNotification', errorNotificationData)
                console.log(error)
            } finally{
                this.$store.dispatch('loading/hideLoading', null)
            }            
        },
        async saveCode() {
            try {
                const content = cleanDeep({
                    code: this.form.code,
                    lang: this.form.lang,
                    highlight: this.form.highlight,
                    fileName: this.form.fileName,
                    twoslash: this.form.twoslash
                })
                await this.$store.dispatch('code/saveCode', {
                    userId: this.user,
                    content: content
                })
                const notificationData = {
                    isShow: true,
                    message: 'Berhasil simpan'
                }

                await this.$store.dispatch('notification/showNotification', notificationData)
            } catch(error) {
                const errorNotificationData = {
                    isShow: true,
                    message: error.message
                }
                await this.$store.dispatch('notification/showNotification', errorNotificationData)
                console.log(error)
            }
        }
    }
}
</script>