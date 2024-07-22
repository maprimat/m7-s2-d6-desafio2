<!-- TEMPLATE -->
<template>
    <div id="#app">
        <CompNavBar />
        <router-view />
    </div>
</template>

<!-- SCRIPT -->
<script>
import CompNavBar from "@/components/CompNavBar.vue"

export default {
    name: 'App',
    components: {
        CompNavBar
    }
}
</script>

<!-- STYLE -->
<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}

nav {
    padding: 30px !important;

    a {
        /* font-weight: bold; */
        color: #2c3e50 !important;

        &.router-link-exact-active {
            color: #42b983 !important;
        }
    }
}

h1 {
    text-transform: uppercase;
    text-decoration: underline;
    font-weight: bold;
    text-decoration: none;
}
</style>
