<template>
    <form action="#" class="form-inline">
        <div class="form-group">
            <label>
                Text 1: 
                <input v-model="title" type="text" class="form-control border-right-0" name="tex1"/>
            </label>
        </div>
        <button class="btn btn-secondary" @click="add">Add</button>
    </form>
</template>

<script type="text/javascript">
    import Todo from '../Todo';

    export default {
        props: ['todos'],

        data() {
            return {
                title: ''    
            }
        },
        methods: {
            add: function(event) {
                event.preventDefault();
                let item = new Todo(this.todos.length + 1, this.title, 'eeee');
                this.todos.push(item);
            },

            preUpdate: function(id) {
                console.log(id);
            }
        }
    }
</script>