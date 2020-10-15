export const state = {
    isShow: false,
    message: null
}

export const mutations = {
    setNotification(state, { isShow, message }) {
        state.isShow = isShow
        state.message = message
    },
    resetNotification(state) {
        state.isShow = false
        state.message = null
    }
}

export const actions = {
    showNotification({ commit }, { isShow, message }) {
        commit('setNotification', {
            isShow,
            message
        })
        setTimeout(() => {
            commit('resetNotification')
        }, 3000)
    }
}
