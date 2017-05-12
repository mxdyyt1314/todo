import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions.js';

Vue.use(Vuex);

const state = {
    todos: [],
};
const mutations = {
    INIT_TODOS (state, todos) {
        state.todos = todos;
    }
};
const getters = {};


export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});