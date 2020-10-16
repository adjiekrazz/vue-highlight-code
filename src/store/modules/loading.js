export const state = {
    isShow: false
}

export const getters = {
    isShow: state => state.isShow
}

export const mutations = {
    setLoading(state, { isShow }) {
        state.isShow = isShow
    }
}

export const actions = {
    showLoading({ commit }) {
        commit('setLoading', {
            isShow: true
        })
    },
    hideLoading({ commit }) {
        commit('setLoading', {
            isShow: false
        })
    }
}