<template>
    <form class="form-inline">
        <input v-focus v-model="initTodo.title" class="form-control mr-sm-2" type="text" name="tex1" placeholder="Text 1">
        <button class="btn btn-primary my-2 my-sm-0" @click="submit">Submit</button>
    </form>
</template>

<script type="text/javascript">
    import Todo from '../Todo';

    export default {
        props: ['todos'],

        data() {
            let item = new Todo();
            return {
                initTodo: item
            }
        },
        directives: {
            focus: {
                inserted: function (el) {
                    el.focus()
                }
            }
        },
        methods: {
            submit(event) {
                event.preventDefault();
                if (this.initTodo.id == null) {
                    this.todos.push(new Todo(this.todos.length + 1, this.initTodo.title, 'vckndfvkn'));
                } else {
                    let td = Todo.find(this.todos, this.curTodo.id);
                    if (td !== null) {
                        td.title = this.initTodo.title;  
                    }
                }
                this.initTodo = new Todo();
            },
            preUpdate(todo) {
                this.curTodo = todo;
                this.initTodo = Object.assign({}, todo);
            }
        }
    }
</script>