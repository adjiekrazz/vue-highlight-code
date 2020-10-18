<template>
    <b-card>
        <b-row>
            <b-col 
                v-for="code in codes"
                :key="code.id"
            >
                <div>
                    <span v-html="code.code"></span>
                    <b-button @click="deleteCode(code.id)" variant="danger">Hapus</b-button>
                </div>
            </b-col>
        </b-row>
    </b-card>
</template>
<script>
import { urlBuilder, sendData } from '../utils'
import { URL_API } from '../constants'
import { mapGetters } from 'vuex'

export default {
    data: () => {
        return {
            filter: {
                page: 1,
                limit: 6,
                sortBy: 'createdAt',
                sort: 'DESC',
                highlighted: 1
            }
        }
    },
    computed: mapGetters({
        codes: 'code/codes',
        userId: 'user/userId'
    }),
    mounted () {
        this.getCodes()
    },
    methods: {
        async getCodes() {
            await this.$store.dispatch('code/getAllCode', {
                userId: this.userId,
                filter: {
                    page: this.filter.page,
                    limit: this.filter.limit,
                    sortBy: this.filter.sortBy,
                    sort: this.filter.sort,
                    highlighted: this.filter.highlighted
                }
            })
        },
        async deleteCode(id) {
            const confirmation = confirm('Apakah Anda yakin ?')
            if (confirmation) {
                await this.$store.dispatch('code/deleteCode', {
                    userId: this.userId,
                    codeId: id
                })
            }
            this.getCodes()
        }
    }
}
</script>