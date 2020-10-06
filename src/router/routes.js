function page (name) {
    return () => import(`~/pages/${name}`)
}

export default [
    { path: '/upload', name: 'upload', component: page('upload') },
    { path: '/paste', name: 'paste', component: page('paste') }
]