<template>
    <div class="col-12">
        <hello-component :msg="helloText"></hello-component>
        <update-form :todos.sync="claimList"></update-form>
        <todo-list :todos="claimList"></todo-list>
    </div>
</template>

<script type="text/javascript">
    import HelloComponent    from '../components/hello.vue';
    import TodoListComponent from '../components/todo-list.vue';
    import UpdateForm        from '../components/form.vue';
    import Todo              from '../Todo';

    export default {
        data() {
            return {
                helloText: 'This is a hello text',

                claimList: [
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
        }
    }
</script>