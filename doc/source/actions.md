title: Actions
---

Action 類似於 mutation，不同在於：

Action 提交的是 `mutation`，而不是直接變更狀態。
Action 可以包含任意異步操作。 (因此**api操作**要放actions) 

分發 Action 透過 `dispatch`  

讓我們來註冊一個簡單的 action：

```js
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  }
})
```

Action 函數接受一個與 store 實例具有相同方法和屬性的 context 對象，因此你可以調用 `context.commit` 提交一個 `mutation`，或者通過 `context.state` 和 `context.getters` 來獲取 state 和 getters。

https://scrimba.com/p/pnyzgAP/c6ggR3cG  

```js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment (state) {
            state.count++
        },
        decrement (state) {
            state.count--
        }
    },
    actionA ({ commit }) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                commit('someMutation')
                resolve()
            }, 1000)
        })
    },
    actionB ({ dispatch, commit }) {
        return dispatch('actionA').then(() => {
            commit('someOtherMutation')
        })
    },
    async actionC ({ commit }) {
        commit('gotData', await getData()) //等待到取得資料
    },
    async actionD ({ dispatch, commit} ) {
        await dispatch('actionC') //等待到actionC完成
        commit('gotOtherData', await getOtherData())
    }
})

import { mapState, mapMutations } from 'vuex';

new Vue({ 
    el: '#app',
    store,
    data: {
    },
    computed: mapState([ 'count' ]),
    methods: {
        increment () {
            this.$store.commit('increment');
        },
        decrement () {
            this.$store.commit('decrement');
        },
        testAction () {
            this.$store.dispatch('actionA').then(() => {
                
            })
        }
    }
});

```

## 分發 Action

Action 通過 `store.dispatch` 方法觸發：
`store.dispatch('increment')` 

```js
// 以載荷形式分發
store.dispatch('incrementAsync', {
  amount: 10
})

// 以對象形式分發
store.dispatch({
  type: 'incrementAsync',
  amount: 10
})
```

購物車示例，涉及到調用異步 API 和分發多重 mutation：
```js
actions: {
  checkout ({ commit, state }, products) {
    // 把當前購物車的物品備份起來
    const savedCartItems = [...state.cart.added]
    // 發出結賬請求，然後樂觀地清空購物車
    commit(types.CHECKOUT_REQUEST)
    // 購物 API 接受一個成功回調和一個失敗回調
    shop.buyProducts(
      products,
      // 成功操作
      () => commit(types.CHECKOUT_SUCCESS),
      // 失敗操作
      () => commit(types.CHECKOUT_FAILURE, savedCartItems)
    )
  }
}
```

## mapActions  在組件中分發 Action

你在組件中使用 `this.$store.dispatch('xxx')` 分發 action，
或者使用 
mapActions 輔助函數將組件的 methods 映射為 `store.dispatch` 調用（需要先在根節點注入 `store`）  

## 組合 Action

Action 通常是異步的，那麼如何知道 action 什麼時候結束呢？
更重要的是，我們如何才能組合多個 action，以處理更加複雜的異步流程？

首先，你需要明白 `store.dispatch` 可以處理被觸發的 action 的處理函數返回的 Promise，並且 `store.dispatch` 仍舊返回 Promise：

利用 `async / await`，我們可以如下組合 action：
> `await` 顧名思義就是等待，在這個 Promise 結束前後面的程式碼都無法被執行  
> `async`，它的結構非常類似 Promise，只不過他能夠將 await 包在裡面  

[JavaScript Await 與 Async](https://wcc723.github.io/javascript/2017/12/30/javascript-async-await/)  

```js
// 假設 getData() 和 getOtherData() 返回的是 Promise

actions: {
  async actionA ({ commit }) {
    commit('gotData', await getData())
  },
  async actionB ({ dispatch, commit }) {
    await dispatch('actionA') // 等待 actionA 完成
    commit('gotOtherData', await getOtherData())
  }
}
```

> 一個 store.dispatch 在不同模塊中可以觸發多個 action 函數。在這種情況下，只有當所有觸發函數完成後，返回的 Promise 才會執行。