import axios from 'axios';


const state = () => ({
    todos: [],
    todos1: [],
    todos2: []
})

const getters = {
    Todos: state => state.todos,
    Todos1: state => state.todos1,
    Todos2: state => state.todos2,
};

const actions = {
    async fetchTodos({ commit }) {
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/todos'
        );
        //console.log(response.data);
        commit('setTodos', response.data);
    },
    async fetchTodos1({ commit }) {
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/todos'
        );
        //console.log(response.data);
        commit('setTodos1', response.data);
    },
    async fetchTodos2({ commit }) {
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/todos'
        );
        //console.log(response.data);
        commit('setTodos2', response.data);
    }
};

const mutations = {
    setTodos: (state, payload) => (state.todos = payload),
    setTodos1: (state, payload) => (state.todos1 = payload),
    setTodos2: (state, payload) => (state.todos2 = payload)
};

export default {
    state,
    getters,
    actions,
    mutations
};