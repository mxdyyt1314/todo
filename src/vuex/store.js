import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions.js';
import mutations from './mutations.js'
import * as CType from './type.js';

Vue.use(Vuex);

const state = {
    todos: [],
};

const getters = {

};


export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});