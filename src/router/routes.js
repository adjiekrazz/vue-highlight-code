function page (name) {
    return () => import(`~/pages/${name}`)
}

export default [
    { path: '/', name: 'home', component: page('home')}
]