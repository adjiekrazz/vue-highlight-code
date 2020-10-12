<template>
    <div class="default-layout">
        <navbar />

        <div class="container mt-4">
            <b-row>
                <b-col cols="12">
                    <b-card>
                        <h1>Vue Highlight Code</h1>
                        <p>Adalah sebuah aplikasi untuk menyorot suatu baris kode dan dapat 
                            di unduh berupa gambar (jpg).
                        </p>
                    </b-card>
                </b-col>
            </b-row>
            <b-row class="mt-3">
                <b-col cols="4" lg="3">
                    <menus />
                </b-col>
                <b-col cols="8" lg="9">
                    <child />
                </b-col>
            </b-row>
        </div>
    </div>
</template>
<script>
import Child from '~/components/Child.vue'
import Navbar from '~/components/Navbar.vue'
import Menus from '~/components/Menus.vue'

export default {
    name: 'default',
    components: {
        Child, Navbar, Menus
    },
    data: () => ({
        
    })
}
</script>