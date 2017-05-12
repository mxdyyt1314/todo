import axios from 'axios'

/**
 *获取todos列表
 */
export const getTodos = ({ commit }) => {
    axios({
        url: '/api/task/query',
        method: 'get',
    }).then(res => { 
        
    }).catch(res => { });
}