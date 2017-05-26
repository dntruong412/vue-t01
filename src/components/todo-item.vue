<template>
    <li class="todo">
        {{todo.title}} 
        <small class="text-muted text-italic">{{todo.description}}</small>
        <button @click="edit(todo.id)" class="btn btn-primary btn-sm">i</button>
        <button @click="remove(todo.id)" class="btn btn-secondary btn-sm">x</button>
    </li>
</template>

<script>
    export default {
        props: ['todo'],

        methods: {
            edit: function(id){
                this.$emit('anUpdate', id);
            },

            remove: function(id){
                let i = -1;
                this.$parent.todos.find((td, index) => {
                    if (td.id == id) {
                        i = index;
                        return; 
                    }
                });
                if(i < 0) return;
                this.$parent.todos.splice(i, 1);
            }
        }
    }
</script>