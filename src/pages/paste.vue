<template>
    <b-card>
        <b-row>
            <b-col cols="12" md="6">
                <b-form-group label="Pilih Bahasa Pemrograman :">
                    <b-form-select
                        v-model="userInput.selectedLanguage"
                        :options="languages"
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
    </b-card>
</template>
<script>
export default {
    data: () => ({
        userInput: {
            selectedLanguage: '',

        },
        languages: []
    }),
    mounted () {
        this.getLanguages()
    },
    methods: {
        async getLanguages() {
            const result = await this.$http.get('https://highlight-code-api.jefrydco.vercel.app/api/options')
            this.languages = result.data.data.languages
        }
    }
}
</script>