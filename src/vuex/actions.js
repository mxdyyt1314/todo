import axios from 'axios'
import * as CType from './type.js';

/**
 *获取todos列表
 */
export const getTodos = ({ commit }) => {
    axios({
        url: '/api/task/query',
        method: 'get',
    }).then(res => {
        let todos = res.data.data;
        commit({ type: CType.INIT_TODOS, todos: todos });
    }).catch(res => {
        console.log(res);
    });
}

/**
 *添加新TODO
 */
export const AddNewTodo = ({ state, commit }, deplay) => {
    let now = Date.now();
    let todo = { id: -1, name: deplay.newtodo, done: false };
    //乐观添加
    commit({ type: CType.ADD_TODO, todo });
    //将当前添加todo的索引值保存起来
    let index = state.todos.length - 1;
    axios({
        url: '/api/task/add',
        method: 'post',
        data: {
            todo: todo
        }
    }).then(res => {
        state.todos.splice(index, 1, res.data.data);
    }).catch(err => {
        state.todos.splice(index, 1);
        console.log()
    });
}

/**
 * 删除TODO
 * @param {object} state,commit 
 * @param {object} deplay 
 */
export const RemoveTodo = ({ state, commit }, deplay) => {
    let index = deplay.index;
    let todo = state.todos[index];
    commit({ type: CType.REMOVE_TODO, index });
    axios({
        url: '/api/task/remove',
        method: 'post',
        data: {
            id: todo.id
        }
    }).then(res => {
        console.log('删除成功');
    }).catch(res => {
        state.todos.splice(index, 0, todo);
    });
};