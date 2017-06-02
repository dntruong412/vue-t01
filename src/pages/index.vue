<template>
    <div class="container-fluid mt-3">
        <div class="row">
            <div class="col-12">
                <hello-component :msg="helloText"></hello-component>
                <update-form :todos="todoList" ref="updateForm"></update-form>
                <todo-list :todos="todoList" @showUpdate="showUpdate"></todo-list>
            </div>
        </div>
    </div>
</template>

<style lang="scss" rel="stylesheet/scss">
    @import "src/scss/bootstrap";
</style>

<script type="text/javascript">
    import HelloComponent    from '../components/hello.vue';
    import TodoListComponent from '../components/todo-list.vue';
    import UpdateForm        from '../components/form.vue';
    import Todo              from '../Todo';

    export default {
        data() {
            return {
                helloText: 'This is a home',

                todoList: [
                new Todo(1,'Vegetables', 'aaaaaaaa'),
                new Todo(2,'Cheese', 'bbbbbbb'),
                new Todo(3,'Tomato', 'dddd'),
                new Todo(4,'Egg', 'eeee')
                ]
            }
        },
        components: {
            'hello-component': HelloComponent,
            'todo-list': TodoListComponent,
            'update-form': UpdateForm
        },
        methods: {
            showUpdate(id) {
                this.$refs.updateForm.preUpdate(Todo.find(this.todoList, id));
            }
        }
    }
</script>