<template>
    <ol class="todos">
        <todo-item v-for="todo in todos" :todo="todo" :key="todo.id"></todo-item>
    </ol>
</template>

<style lang="scss" rel="stylesheet/scss">
    @import "src/scss/bootstrap";
</style>

<script>
    import TodoItemComponent from './todo-item.vue';

    export default {
        props: ['todos'],

        components: {
            'todo-item': TodoItemComponent
        }
    }
</script>
