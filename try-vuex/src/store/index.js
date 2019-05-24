import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moduleA = {
    state: { 
        count: 3
    },
    mutations: {
        
    },
    getters: {
        
    },
    actions: {
        
    }
}


const moduleB = {
    state: {
        count: 8
    },
    mutations: {
        
    },
    getters: {
        
    },
    actions: {
        
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

console.log(store.state.a.count); //3
console.log(store.state.b.count); //8

export default store; 