<template>
    <div class="">
        <b-card>
            <b-form @submit="formSubmit" @reset="formReset" v-if="formShow">
                <b-row>
                    <b-col cols="12" lg="6">
                        <b-form-group label="Pilih Bahasa Pemrograman :">
                            <b-form-select
                                v-model="form.lang"
                                :options="langOptions"
                                size="md"
                                required
                            ></b-form-select>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="12" lg="6">
                        <b-form-group label="Nama file :">
                            <b-form-input
                                v-model="form.fileName"
                                placeholder="contoh : index.ts"
                                required
                            ></b-form-input>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row v-if="form.lang == 'typescript' || form.lang == 'json'">
                    <b-col cols="12" lg="6">
                        <b-form-group label="Opsi :">
                            <b-form-select
                                v-model="form.twoslash"
                                :options="tsOptions"
                                size="md"
                            ></b-form-select>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="12" lg="6">
                        <b-form-group label="Baris yang disorot : ">
                            <b-form-input
                                v-model="form.highlight"
                                placeholder="misal : 1, atau 2-4"
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
                                rows="3"
                                max-rows="3"
                                placeholder="example : console.log('@adjiekrazz')"
                            ></b-form-textarea>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="12" lg="6">
                        <b-button type="submit" block variant="primary">
                            Proses
                        </b-button>
                    </b-col>
                </b-row>
            </b-form>
        </b-card>
        <b-card bg-variant="light" class="mt-3" >
            <b-card-text>
                <span v-html="responseApi.data.data"></span>
                Gambar : <br>
                {{ responseApi }}
            </b-card-text>
        </b-card>
    </div>
</template>
<script>
export default {
    data: () => ({
        form: {
            lang: 'html',
            fileName: 'index.html',
            highlight: '2',
            twoslash: 'twoslash',
            code: ''
        },
        formShow: true,
        langOptions: [],
        tsOptions: ['twoslash', 'tsconfig'],
        responseApi: {
            status: '',
            data: ''
        },
    }),
    mounted () {
        this.getLanguages()
        console.log(this.urlBuilder('https://jefrycode.com/api/', {
            lang : this.form.lang,
            fileName : this.form.fileName,
            highlight : this.form.highlight,
            twoslash : this.form.twoslash,
        }))
    },
    methods: {
        urlBuilder: function(url, params) {
            var i = 1; var resultParams = ''; 

            if (url.substr(-1) == '/') {
                url = url.substr(0, url.length-1)
            }

            if (typeof params === 'object') {
                Object.keys(params).forEach(key => {
                    if (i == 1) {
                        resultParams += '?'
                    }

                    resultParams += key + '=' + params[key]
                    
                    if (i < Object.keys(params).length) {
                        resultParams += '&'
                    }
                    i++
                })
            }

            return url + resultParams;
        },
        async getLanguages() {
            const result = await this.$http.get('https://highlight-code-api.jefrydco.vercel.app/api/options')
            this.langOptions = result.data.data.languages
        },
        async formSubmit(evt) {
            evt.preventDefault()
            this.$http.post(this.urlBuilder('https://highlight-code-api.jefrydco.vercel.app/api/', {
                lang : this.form.lang,
                fileName : this.form.fileName,
                highlight : this.form.highlight,
                twoslash : this.form.twoslash
            }), {
                code: this.form.code
            }).then((response) => {
                this.responseApi = response
            })
            
        },
        formReset(evt) {
            evt.preventDefault()
            this.formShow = false

            this.form.lang = ''
            this.form.fileName = ''
            this.form.highlight = ''
            this.form.twoslash = ''
            this.form.code = ''

            this.$nextTick(() => {
                this.formShow = true
            })
        }
    }
}
</script>