<template>
    <div class="container-fluid mt-3">
        <div class="row">
            <div class="loading" v-if="loading">Loading...</div>
            <div v-if="error" class="error">{{ error }}</div>

            <div v-if="post" class="col-12">
                <img class="d-flex mr-3" src="http://placehold.it/150x150" alt="Generic placeholder image">
                <h2>{{post.title}}</h2>
                <p>{{post.description}}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" rel="stylesheet/scss">
    @import "src/scss/bootstrap";
</style>
<script type="text/javascript">

    export default {
        data() {
            return {
                loading: false,
                post: {
                    title: null,
                    description: null
                },
                error: null
            }
        },
        created () {
            this.fetchData()
        },
        watch: {
            '$route': 'fetchData'
        },
        methods: {
            fetchData () {
                this.error = null;
                this.post = null;
                this.loading = true;
                var vm = this;
                fetch('http://192.168.12.150/test/vue.js/e01/api/post.php?id=' + vm.$route.params.id)
                .then(  
                    (response) => {  
                        if (response.status !== 200) {  
                            console.log('Looks like there was a problem. Status Code: ' +  response.status);  
                            return;  
                        }
                        response.json().then((data) => {  
                            vm.post = data;
                            vm.loading = false;
                        });  
                    })
                .catch((err) => {  
                    console.log('Fetch Error :-S', err);  
                });
            }
        }
    }
</script>