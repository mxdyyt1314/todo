import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions.js';
import mutations from './mutations.js'

Vue.use(Vuex);

const state = {
    newTodo: '1111',
    todos: [],
};

const getters = {
    doneTodos (state) {
        return state.todos.filter(ele => ele.done);
    },
    notDoneTodos (state) {
        return state.todos.filter(ele => !ele.done);
    }
};


export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});