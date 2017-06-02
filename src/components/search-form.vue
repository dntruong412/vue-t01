<template>
    <form class="form-inline">
        <input class="form-control mr-sm-2" type="text" placeholder="Search" v-model='searchKey'>
        <button class="btn btn-primary my-2 my-sm-0" @click="doSearch">Search</button>
    </form>
</template>

<script type="text/javascript">
    export default {
        data() {
            return {
                searchKey: null,
                loading: false,
                error: null
            }
        },
        methods: {
            doSearch() {
                if (true) {
                    this.$bus.$emit('searchSubmit', this.searchKey);
                }
                this.$router.push({name: 'post.list', query: {
                    action: 'search',
                    s: this.searchKey
                }});
            }
        }
    }
</script>