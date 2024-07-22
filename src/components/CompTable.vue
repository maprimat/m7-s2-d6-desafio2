<!-- TEMPLATE -->
<template>
    <div class="hello">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Código</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(game, index) in games" :key="index" :class="{ 'text-danger': stockControl(game.stock) }">
                    <td>{{ game.code }}</td>
                    <td>{{ game.name }}</td>
                    <td>{{ game.stock }}</td>
                    <td>{{ game.price }}</td>
                    <td>
                        <div class="d-flex justify-content-center align-items-center">
                            <button class="btn btn-secondary mx-2" @click="addButton(game.code)">
                                <i class="fa-regular fa-square-plus"></i>
                            </button>
                            <button class="btn btn-secondary mx-2"  @click="delButton(game.code)" :disabled="stockControl(game.stock)">
                                <i class="fa-regular fa-square-minus"></i>
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<!-- SCRIPT -->
<script>
import { mapState, mapActions } from 'vuex'

export default {
    name: "CompTable",
    components: {
    },
    data() {
        return {
        }
    },
    async created() {
        await this.loadGames();
    },
    computed: {
        ...mapState(["gamesList"]),
        games() {
            return this.gamesList;
        },

    },
    methods: {
        ...mapActions(['loadGames']),
        addButton(index) {
            this.$store.dispatch('stockAdd', index)
        },
        delButton(index) {
            this.$store.dispatch('stockDel', index)
        },
        stockControl(stock) {
            console.log(stock)
            if (stock < 1) {
                return true
            } else {
                return false
            }
        }
    },
};
</script>

<!-- STYLE -->
<style scoped>
/* TEXTO ROJO CUANDO NO HAY STOCK */
.table>:not(caption)>*>* {
    color: inherit
}
</style>
