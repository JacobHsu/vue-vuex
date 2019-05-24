import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moduleA = {
    namespaced: true, //false by default
    state: { 
        count: 3
    },
    mutations: {
        increment (state) {
            state.count++
        }        
    },
    getters: {
        doubleCount (state) {
            return state.count * 2
        }  
    },
    actions: {
        incrementIfOdd({state, commit}) {
            if (state.count % 2 === 1) {
                commit('increment');
            }
        }
    }
}


const moduleB = {
    namespaced: true, //b/login
    modules: {
        subModule: {
            namespaced: true,
            state: {
               count: 101
            },
            mutations: {
              login () {}
            },
            getters: {
              login () {}  
            },
            actions: {
              login () {}  
            }
        }
    },
    state: {
        count: 8
    },
    mutations: {
        
    },
    getters: {
        someGetter (state, getters, rootState, rootGetters) {
            rootState.count;
            state.count;
            
            getters.someOtherGetter;
            rootGetters.someOtherGetter;
        }
    },
    actions: {
        someAction({ dispatch, commit, getters, rootGetters }) {
            getters.someGetter;
            rootGetters.someGetter;
            
            dispatch('someOtherAction'); // look into our modules
            dispatch('someOtherAction', null, { root: true }); //look into our stores

            commit('someMutation');
            commit('someMutation', null, { root: true });
        }
    }
}

const store = new Vuex.Store({
    modules: {
        a: moduleA,
        b: moduleB
    },
    state: {
        count: 10,
        numb: 10086
    },
    getters: {
        add: (state, getter) => {
            state.count = getter.add;
            return state.count;
        },
    },
    mutations: {
        increment(state) {
            state.count = 2;
        },
    },
    actions: {
        actionA({ dispatch, commit }) {
            return commit('add');
        },
    }
}); 

// --- a ---
console.log(store.state.a.count); //=>3
//console.log(store.state.b.count); //8
store.commit('increment'); //mutations namespaced so not working
store.commit('a/increment'); 
console.log(store.state.a.count); //=>4

// --- b ---
//store.commit('b/login'); // mutations
//store.dispatch('b/login'); //actions
//store.getters['b/login']; //getters

store.commit('b/subModule/login');
store.dispatch('b/subModule/login');
store.getters['b/subModule/login'];

export default store; 