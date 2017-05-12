import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions.js';

Vue.use(Vuex);

const state = {
    todos:[],
};
const mutations = {

};
const getters = {};


export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});