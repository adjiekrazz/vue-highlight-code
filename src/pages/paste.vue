<template>
    <b-card>
        <b-row>
            <b-col cols="12" lg="6">
                <b-form-group label="Pilih Bahasa Pemrograman :">
                    <b-form-select
                        v-model="userInput.lang"
                        :options="langOptions"
                        size="md"
                    ></b-form-select>
                </b-form-group>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="12">
                <b-form-group label="Masukkan Kode :">
                    <b-form-textarea
                        rows="3"
                        max-rows="3"
                        placeholder="example : console.log('@adjiekrazz')"
                    ></b-form-textarea>
                </b-form-group>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="12" lg="6">
                <b-button block variant="primary">
                    Proses
                </b-button>
            </b-col>
        </b-row>
    </b-card>
</template>
<script>
export default {
    data: () => ({
        userInput: {
            lang: '',
            fileName: '',
            highlight: '',
            twoslash: '',
            download: 0,
            code: ''
        },
        langOptions: [],
        tsOptions: ['twoslash', 'tsconfig']
    }),
    mounted () {
        this.getLanguages()
    },
    methods: {
        async getLanguages() {
            const result = await this.$http.get('https://highlight-code-api.jefrydco.vercel.app/api/options')
            this.langOptions = result.data.data.languages
        }
    }
}
</script>