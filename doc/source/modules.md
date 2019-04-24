title: Module
---

由於使用單一狀態樹，應用的所有狀態會集中到一個比較大的對象。當應用變得非常複雜時，store 對象就有可能變得相當臃腫。

為瞭解決以上問題，Vuex 允許我們將 store 分割成**模塊（module）**。每個模塊擁有自己的 `state`、`mutation`、`action`、`getter`、甚至是嵌套子模塊——從上至下進行同樣方式的分割：


```js
const moduleA = {
  state: { ... },
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}

const moduleB = {
  state: { ... },
  mutations: { ... },
  actions: { ... }
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

store.state.a // -> moduleA 的狀態
store.state.b // -> moduleB 的狀態
```


https://scrimba.com/p/pnyzgAP/cqKK4psq

```js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const moduleA = {
    namespaced: true,
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
    namespaced: true,
    modules: {
        subModule: {
            namespaced: true,
            state: {
                
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
            
            dispatch('someOtherAction');
            dispatch('someOtherAction', null, { root: true });
            
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
        count: 2
    },
    mutations: {
        
    },
    getters: {
        
    },
    actions: {
        
    }
})

import { mapState, mapActions } from 'vuex';

new Vue({ 
    el: '#app',
    store,
    data: {
    },
    computed: mapState({
        a: state => state.a.count,
        b: state => state.b.subModule.count,
    }),
    methods: mapActions('some/nested/module', [
        'foo' // thisfoo()
    ])
});

// console.log(store.state.a.count);
// // console.log(store.state.b.count);
// store.commit('a/increment');
// console.log(store.state.a.count);

store.commit('b/subModule/login');
store.dispatch('b/subModule/login');
store.getters['b/subModule/login'];
```

## store 下檔案分 modules

https://github.com/vuejs/vuex/tree/dev/examples/shopping-cart/store

└── store
    ├── index.js          # 我們組裝模塊並導出 store 的地方
    ├── actions.js        # 根級別的 action
    ├── mutations.js      # 根級別的 mutation
    └── modules
        ├── cart.js       # 購物車模塊
        └── products.js   # 產品模塊


└── store
    ├── index.js          # 我們組裝模塊並導出 store 的地方
    ├── cart.js           # 購物車模塊
    └── products.js       # 產品模塊

```js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


const requireModules = require.context('.', false, /\.js$/) //cart.js, products.js
let modules = {}
requireModules.keys().forEach(file => {

   if (file === './index.js') return; 
   
   const moduleKey = file.replace(/(\.\/|\.js)/g, "") //cart, products
   modules[moduleKey] = requireModules(file)
})

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
   modules,
    // modules: {
    //     cart,
    //     products
    // },
   strick: debug,
})

```