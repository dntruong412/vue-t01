<template>
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <a class="navbar-brand" href="#">Navbar</a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-3">
                <router-link class="nav-item" tag="li" to="/" exact>
                    <a class='nav-link'>Home</a>
                </router-link>
                <router-link class="nav-item" tag="li" to="/posts">
                    <a class='nav-link'>Post</a>
                </router-link>

            </ul>

            <search-form></search-form>
        </div>
    </nav>
</template>

<script type="text/javascript">
    import SearchForm from './search-form.vue';

    export default {
        components: {
            'search-form': SearchForm
        }
    }
</script>