import { createStore } from 'vuex'

export default createStore({
    state: {
        gamesList: [],
    },
    getters: {
        // getGameById: (state) => (codigo) => {
        //   return state.gamesList.find(game => game.codigo == codigo)
        // },
    },
    mutations: {
        SET_GAMES(state, gamesList) {
            state.gamesList = gamesList
        },
        ADD_STOCK(state, index) {
            state.gamesList[index].stock++
        },
        DEL_STOCK(state, index) {
            // if (state.gamesList[index].stock > 1) {
            state.gamesList[index].stock--
            // } else {
            //   alert("No se puede reducir stock de un producto sin stock.")
            // }

        }
    },
    actions: {
        async loadGames({ commit }) {
            try {
                console.log(location)
                let domain = location.origin
                let project = "/"
                let url = `${domain}${project}games.json`
                console.log(url)
                let response = await fetch(url);
                let games = await response.json();
                // console.log(juegos);
                // let juegos = data;
                commit("SET_GAMES", games)
                return games;
            } catch (error) {
                alert("No se ha podido obtener el listado de juegos")
            }
        },
        stockAdd(context, code) {
            let index = context.state.gamesList.findIndex(
                (game) => game.code == code)
            console.log(code)
            context.commit('ADD_STOCK', index)
        },
        stockDel(context, code) {
            let index = context.state.gamesList.findIndex(
                (game) => game.code == code)
            console.log(code)
            context.commit('DEL_STOCK', index)
        }
    },
    modules: {
    }
})
