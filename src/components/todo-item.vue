<template>
    <li class="todo list-item">
        <router-link class='nav-item nav-link' :to="{ name:'post.item', params:{id: todo.id} }">
            {{todo.title}}
        </router-link>
        <button @click="edit(todo.id)" class="btn btn-primary btn-sm">i</button>
        <button @click="remove(todo.id)" class="btn btn-secondary btn-sm">x</button>
    </li>
</template>

<script>
    export default {
        props: ['todo'],

        methods: {
            edit(id){
                this.$emit('showUpdate', id);
            },
            remove(id){
                this.$emit('removeTodo', id);
            }
        }
    }
</script>