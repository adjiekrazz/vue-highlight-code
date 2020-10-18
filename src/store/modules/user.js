import { URL_API } from '../../constants'
import { sendData } from '../../utils'

export const state = {
    userId: null,
    userName: null
}

export const getters = {
    userId: state => state.userId,
    userName: state => state.userName
}

export const mutations = {
    setUserData(state, { userId, userName }) {
        state.userId = userId
        state.userName = userName
    },
    resetUserData(state) {
        state.userId
        state.userName
    }
}

export const actions = {
    async login({ commit, dispatch }, { userName }) {
        try {
            dispatch('loading/showLoading', null, { root: true })
            const url = `${URL_API}/user/login`
            const response = await sendData(url, {
                name: userName
            })
            
            if (response.success && !response.error) {
                commit('setUserData', {
                    userId: response.data.id,
                    userName: response.data.name
                })
                const notificationData = {
                    isShow: true,
                    message: 'Login Success'
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
    async register({ commit, dispatch }, { userName }) {
        try {
            dispatch('loading/showLoading', null, { root: true })
            const url = `${URL_API}/user/register`

            const response = await sendData(url, {
                name: userName
            })

            if (response.success & !response.error) {
                commit('setUserData', {
                    userId: response.data.id,
                    userName: response.data.name
                })
                const notificationData = {
                    isShow: true,
                    message: 'Register success'
                }

                await dispatch('notification/showNotification', notificationData, { root: true })
            } else {
                throw new Error(response.message)
            }
        } catch (error) {
            const errorNotificationData = {
                isShow: false,
                message: error.message
            }
            dispatch('notification/showNotification', errorNotificationData, { root: true })
            console.log(error)
        } finally {
            dispatch('loading/hideLoading', null, { root: true })
        }
    },
    logout({ commit, dispatch }) {
        commit('resetUserData')
        commit('code/resetCodes', null, { root: true })
        const notificationData = {
            isShow: true,
            message: 'Berhasil Logout'
        }
        dispatch('notification/showNotification', notificationData, { root: true})
    }
}