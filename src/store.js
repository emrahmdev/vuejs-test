import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)

const API_URL = 'https://api.github.com';

const store = new Vuex.Store({
    state: {
        users: [],
        user: {},
        isAuthenticated: false
    },
    actions: {
        loadUsers({ commit }) {
            axios.get(`${API_URL}/users?since=20`).then((response) => {
                commit('updateUsers', response.data);
            });
        },
        loadUser({commit}, username) {
            axios.get(`${API_URL}/users/${username}`).then((response) => {
                commit('updateUser', response.data);
            });
        }
    },
    mutations: {
        updateUsers(state, users) {
            state.users = users
        },
        updateUser(state, user) {
            state.user = user
        },
        changeLoadingState(state, loading) {
            state.loading = loading
        },
        changeAuthState(state, isAuth) {
            state.isAuthenticated = isAuth
        }
    }
});

export default store