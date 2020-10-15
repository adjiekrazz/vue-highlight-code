import { urlBuilder, sendData } from '../../utils'
import { URL_API } from '../../constants'

function state() {
    return {
        codes: []
    }
}

const mutations = {
    setCodes(state, { codes }) {
        state.codes = codes
    },
    resetCodes(state) {
        state.codes = []
    }
}

const actions = {
    
}