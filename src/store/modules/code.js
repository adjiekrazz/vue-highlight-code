import { urlBuilder, sendData } from '../../utils'
import { URL_API } from '../../constants'

export const state = {
    codes: []
}

export const getters = {
    codes: state => state.codes
}

export const mutations = {
    setCodes(state, { codes }) {
        state.codes = codes
    },
    resetCodes(state) {
        state.codes = []
    }
}

export const actions = {
    async getAllCode({ commit, dispatch }, { userId, filter }) {
        try {
            dispatch('loading/showLoading', null , { root: true })
            const url = urlBuilder(URL_API+'/code/list', {
                page: filter.page,
                limit: filter.limit,
                sortBy: filter.sortBy,
                sort: filter.sort,
                highlighted: filter.highlighted
            })
            const response = await sendData(url, {
                user: userId
            })
            if (response.success && !response.error) {
                commit('setCodes', {
                    codes: response.data
                })
            } else {
                throw new Error(response.message)
            }
        } catch (error) {
            commit('resetCodes')
            const errorNotificationData = {
                isShow: true,
                message: error.message
            }
            dispatch('notification/showNotification', errorNotificationData, { root: true })
            console.log(error)
        } finally {
            dispatch('loading/hideLoading', null, { root: true })
        }
    },
    async saveCode({ dispatch }, { userId, content }) {
        try {
            dispatch('loading/showLoading', null, { root: true })
            const url = `${URL_API}/code/store`
            const response = await sendData(url, {
                user: userId,
                content: {
                    code: content.code,
                    lang: content.lang,
                    highlight: content.highlight,
                    fileName: content.fileName,
                    twoslash: content.twoslash
                }
            })
            if (response.success && !response.error) {
                const notificationData = {
                    isShow: true,
                    message: 'Kode Berhasil Disimpan'
                }
                await dispatch('notification/showNotification', notificationData, { root: true })
            } else {
                throw new Error(response.message)
            }
        } catch (error) {
            const errorNotificationData = {
                isShow: true,
                message: error.message
            }
            dispatch('notification/showNotification', errorNotificationData, { root: true })
            console.log(error)
        } finally {
            dispatch('loading/hideLoading', null, { root: true })
        }
    },
    async deleteCode({ dispatch }, { userId, codeId }) {
        try {
            dispatch('loading/showLoading', null, { root: true })
            const url = `${URL_API}/code/delete`
            const response = await sendData(url, {
                id: codeId,
                user: userId
            })
            if (response.success && !response.error) {
                const notificationData = {
                    isShow: true,
                    message: 'Kode berhasil dihapus'
                }
                await dispatch('notification/showNotification', notificationData, { root: true })
            } else {
                throw new Error(response.message)
            }
        } catch(error) {
            const errorNotificationData = {
                isShow: true,
                message: error.message || 'Silahkan masuk terlebih dahulu'
            }
            dispatch('notification/showNotificationData', errorNotificationData, { root: true })
            console.log(error)
        } finally {
            dispatch('loading/hideLoading', null, { root: true })
        }
    }
}