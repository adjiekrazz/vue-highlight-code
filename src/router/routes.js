function page (name) {
    return () => import(`~/pages/${name}`)
}

export default [
    { path: '/highlight', name: 'highlight', component: page('highlight') },
    { path: '/listcode', name: 'listcode', component: page('listcode') },
    { path: '/login', name: 'login', component: page('login') }
]