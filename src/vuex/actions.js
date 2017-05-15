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
    console.log(deplay.newtodo);
    let todo = { id: -1, name: deplay.newtodo, done: false };
    //乐观添加
    let index = commit({ type: CType.ADD_TODO, todo });
    debugger;
    axios({
        url: '',
        method: 'post',
        data: {

        }
    }).then(res => {

    }).catch(err => {
        commit({ type: CType.REMOVE_FAILURE_TODO });
    });
}