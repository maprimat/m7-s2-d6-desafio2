<!-- TEMPLATE -->
<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container">
                <a class="fw-bold navbar-brand" href="#">Tienda 32 Bits</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <router-link to="/" activeClass="active disabled" class="nav-link active">Inicio</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/games" activeClass="active disabled" class="nav-link">Juegos</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<!-- SCRIPT -->
<script>
export default {
    name: 'CompNavBar',
    props: {

    }
}
</script>

<!-- STYLE -->
<style scoped lang="scss"></style>