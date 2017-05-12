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
        commit({ type: CType.INIT_TODOS, todos:todos });
    }).catch(res => {
        console.log(res);
    });
}