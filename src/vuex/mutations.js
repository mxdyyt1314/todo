import * as CType from './type.js';

export default {
    [CType.INIT_TODOS] (state, todos) {
        console.log(todos.todos);
        state.todos = todos.todos;
    },
    [CType.ADD_TODO] (state, deplay) {
        let index = state.todos.push({ name: deplay.todo.name, done: deplay.todo.done });
        return index;
    },
    [CType.REMOVE_FAILURE_TODO] (state) {
        state.todos.forEach(function (todo, index, arr) {
            if (todo.id === -1) {
                arr.splice(index, 1);
            }
        });
    }
};