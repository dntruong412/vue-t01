<template>
    <ol class="todos">
        <transition-group name="list-complete" tag="li">
            <todo-item v-for="todo in todos" :todo="todo" :key="todo.id" @showUpdate="showUpdate" @removeTodo="removeTodo"></todo-item>
        </transition-group>
    </ol>
</template>

<style type="text/css">
    .list-enter-active, .list-leave-active {
        transition: all 0.5s;
    }
    .list-enter, .list-leave-to /* .list-leave-active for <2.1.8 */ {
        opacity: 0;
        transform: translateY(30px);
    }
</style>

<script>
    import TodoItemComponent from './todo-item.vue';

    export default {
        props: ['todos'],

        components: {
            'todo-item': TodoItemComponent
        },

        methods: {
            showUpdate(id) {
                this.$emit('showUpdate', id);
            },

            removeTodo(id) {
                console.log(id);
                let i = -1;
                this.todos.find((td, index) => {
                    if (td.id == id) {
                        i = index;
                        return; 
                    }
                });
                if(i < 0) return;
                this.todos.splice(i, 1);
            }
        }
    }
</script>
