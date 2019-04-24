title: Mutations
---

更改 Vuex 的 `store` 中的狀態的**唯一方法是提交 `mutation`**。
在 Vuex 中，`mutation` 都是**同步事務**：處理異步操作，使用 `Action`。  

Vuex 中的 mutation 非常類似於**事件**：每個 mutation 都有一個字符串的 `事件類型 (type)` 和 一個 `回調函數 (handler)`。這個回調函數就是我們實際進行狀態更改的地方，並且它會接受 state 作為第一個參數：

```js
const store = new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    increment (state) {
      // 變更狀態
      state.count++
    }
  }
})
```

你不能直接調用一個 `mutation handler`。這個選項更像是**事件註冊**：“當觸發一個類型為 increment 的 mutation 時，調用此函數。”要喚醒一個 mutation handler，你需要以相應的 type 調用 store.commit 方法：

`store.commit('increment')` 


https://scrimba.com/p/pnyzgAP/ckMZp4HN
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
        incrementBy (state, payload) {
            state.count += payload.amount
        }
    }
});
import { mapState } from 'vuex';

new Vue({ 
    el: '#app',
    store,
    data: {
    },
    computed: mapState([
        'count'
    ]),
    methods: {
        // <button @click='increment'>+</button>
        increment () {
            this.$store.commit('increment')  // call mutations increment 
        }
    }
});

store.commit('increment');
console.log(store.state.count); //-> 1
store.commit('incrementBy', { amount: 29 });
console.log(store.state.count); //-> 29

store.commit({
    type: 'incrementBy',
    amount: 40
})
console.log(store.state.count); //-> 40
```

### mapMutations

```js
import { mapState, mapMutations } from 'vuex';

new Vue({ 
    el: '#app',
    store,
    data: {
    },
    computed: mapState([
        'count'
    ]),
    // 可將 increment incrementBy 放置store/index.js vuex中呼叫
    methods: mapMutations([
        'increment',
        'incrementBy'
    ])
});
```




## 提交載荷（Payload）

你可以向 `store.commit` 傳入額外的參數，即 mutation 的 載荷（`payload`）：

```js
// ...
mutations: {
  increment (state, n) {
    state.count += n
  }
}
```

`store.commit('increment', 10) //額外的參數 n`  

在大多數情況下，載荷應該是一個**對象**，這樣可以包含多個字段並且記錄的 mutation 會更易讀：

```js
// ...
mutations: {
  increment (state, payload) {
    state.count += payload.amount
  }
}
```

```js
store.commit('increment', {
  amount: 10
})
```

payload `{amount: 10}` 

提交方式 包含 `type`

提交 `mutation` 的另一種方式是直接使用包含 type 屬性的對象：

```js
store.commit({
  type: 'increment',
  amount: 10
})
```

當使用對象風格的提交方式，整個對象都作為載荷傳給 mutation 函數，因此 handler 保持不變：

```js
mutations: {
  increment (state, payload) {
    state.count += payload.amount
  }
}
```

## Mutation 需遵守 Vue 的響應規則

既然 Vuex 的 store 中的狀態是響應式的，那麼當我們變更狀態時，監視狀態的 Vue 組件也會自動更新。這也意味著 Vuex 中的 mutation 也需要與使用 Vue 一樣遵守一些注意事項：

1. 最好提前在你的 store 中初始化好所有所需屬性。

2. 當需要在對象上添加新屬性時，你應該
`Vue.set(obj, 'newProp', 123)` or 
`state.obj = { ...state.obj, newProp: 123 }`  以新對象替換老對象。例如利用對象展開運算符


> ! Mutation 必須是同步函數 Mutation 必須是同步函數 Mutation 必須是同步函數 

```js
mutations: {
  someMutation (state) {
    // 異步
    api.callAsyncMethod(() => {
      state.count++
    })
  }
}
```

# 在組件中提交 Mutation

在組件中使用 `this.$store.commit('xxx')` 提交 `mutation`

或者

使用 `mapMutations 輔助函數`將組件中的 `methods` 映射為 `store.commit` 調用（需要在根節點注入 `store`）


