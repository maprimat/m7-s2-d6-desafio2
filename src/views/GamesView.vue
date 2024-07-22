<!-- TEMPLATE -->
<template>
    <main class="container py-3">
        <h1>Lista de juegos</h1>
        <hr>
        <section>
            <CompTable />
        </section>
    </main>
</template>

<!-- SCRIPT -->
<script>
import CompTable from "@/components/CompTable.vue"

export default {
    name: 'GamesView',
    components: {
        CompTable
    },
    methods: {
        // created() {
        //   document.title = "Lista Juegos - Tienda 32 Bits"
        // }
    }
}
</script>

<!-- STYLE -->
<style scoped></style>