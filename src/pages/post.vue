<template>
    <div class="container-fluid mt-3">
        <div class="row">
            <div class="col-12">
                <div class="loading" v-if="loading">Loading...</div>
                <div v-if="error" class="error">{{ error }}</div>
                <post-item v-for="post in posts" :post="post" :key="post.id"></post-item>
            </div>
        </div>
    </div>
</template>

<style lang="scss" rel="stylesheet/scss">
    @import "src/scss/bootstrap";
</style>
<script type="text/javascript">
    import PostItem from '../components/post-item.vue';

    export default {
        data() {
            return {
                loading: false,
                posts: null,
                error: null,
                searchKey: null
            }
        },
        components: {
            'post-item': PostItem
        },
        created () {
            if(!!this.$route.query.s){
                this.search(this.$route.query.s);
            } else {
                this.index();
            }
        },
        methods: {
            _fetch(vm, req = {}) {
                vm.error = null;
                vm.posts = null;
                vm.loading = true;

                fetch('http://192.168.12.150/test/vue.js/e01/api/post.php', req)
                .then((response) => {  
                    if (response.status !== 200) {  
                        console.log('Looks like there was a problem. Status Code: ' +  response.status);  
                        return;  
                    }
                    response.json().then((data) => {
                        vm.posts = data;
                        vm.loading = false;
                    });
                })
                .catch((err) => console.log('Fetch Error :-S', err));
            },

            index () {
                console.log('index');
                this._fetch(this);
            },

            search(key) {
                console.log('search');
                this.searchKey = key;
                let data = new FormData();
                data.set('action', 'search');
                data.set('s', this.searchKey);
                this._fetch(this, {
                    method: 'post',
                    body: data
                });
            }
        }
    }
</script>