import { LoaderOptionsPlugin } from 'webpack'
import { URL_API } from '../../constants'
import { sendData } from '../../utils'

export const state = {
    userId: null,
    userName: null
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

                await Notification.actions.showNotifications(notificationData)
            } else {
                throw new Error(response.message)
            }
        } catch (error) {
            const notificationData = {
                isShow: true,
                message: error.message
            }

            Notification.actions.showNotifications(notificationData)
            console.log(error)
        }
    },
    async register({ commit, dispatch }, { userName }) {
        try {
            const url = `${URL_API}/user/register`

            const response = await sendData(url, {
                name: userName
            })

            if (response.success & !response.error) {
                commit('setUserData', {
                    userId = response.data.id,
                    userName = response.data.name
                })
                const notificationData = {
                    isShow: true,
                    message: 'Register success'
                }

                await Notification.actions.showNotifications(notificationData)
            } else {
                throw new Error(response.message)
            }
        } catch (error) {
            const notificationData = {
                isShow: false,
                message: error.message
            }
            Notification.actions.showNotifications(notificationData)
            console.log(error)
        }
    }
}