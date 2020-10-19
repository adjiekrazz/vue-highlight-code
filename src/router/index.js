import Vue from 'vue'
import routes from './routes'
import Router from 'vue-router'

Vue.use(Router)

const router = createRouter()

export default router

function createRouter() {
    const router = new Router({
        scrollBehavior,
        mode: 'history',
        routes
    })

    return router
}

function scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
        return savedPosition
    }

    if (to.hash) {
        return { selector: to.hash }
    }

    const [component] = router.getMatchedComponents({ ...to }).slice(-1)

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ x: 0, y: 0})
        }, 190)
    })
}