import * as CType from './type.js';

export default {
    [CType.INIT_TODOS] (state, todos) {
        console.log(todos.todos);
        state.todos = todos.todos;
    }
};