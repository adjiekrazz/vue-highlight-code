<template>
    <div class="">
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
                <b-col cols="12" md="6">
                    <b-form-group label="Upload file :">
                        <b-form-file
                            v-model="userInput.fileName"
                            placeholder="contoh : index.ts"
                        ></b-form-file>
                    </b-form-group>
                </b-col>
            </b-row>
        </b-card>
    </div>
</template>
<script>
export default {
    data: () => ({
        userInput: {
            selectedLanguage: '',
            fileName: null,
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