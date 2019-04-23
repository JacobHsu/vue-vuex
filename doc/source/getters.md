title: Getter
---

https://vuex.vuejs.org/zh/guide/getters.html

Vuex 允許我們在 store 中定義`“getter”`（可以認為是 store 的計算屬性）。就像計算屬性一樣，getter 的返回值會根據它的依賴被緩存起來，且只有當它的依賴值發生了改變才會被重新計算。

Vuex | [Getters](https://scrimba.com/p/pnyzgAP/c2Be7TB)  


```js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
   state: {
       todos: [
           { id: 1, text: '...', done: true },
           { id: 2, text: '...', done: false },
       ]
   },
   getters: {
       // Getter 接受 state 作為其第一個參數
       doneTodos: state => {
           return state.todos.filter(todo => todo.done);
       },
       // Getter 也可以接受其他 getter 作為第二個參數
       doneTodosCount: (state, getters) => {
           return getters.doneTodos.length
       },
       // 通過方法訪問 通過讓 getter 返回一個函數，來實現給 getter 傳參
       getTodoById: (state) => (id) => {
           return state.todos.find(todo => todo.id === id)
       }
   }
});

new Vue({ 
    el: '#app',
    store,
    data: {
    },
    computed: {
        // 可以很容易地在任何組件中使用它
        doneTodosCount () {
            return this.$store.getters.doneTodosCount //1
        }
    }
});

// Getter 會暴露為 store.getters 對象，你可以以屬性的形式訪問這些值
console.log(store.getters.doneTodos )  // -> [{ id: 1, text: '...', done: true }]
console.log(store.getters.getTodoById(2)) //{id: 2, text: "...", done: false}
```

> 注意，getter 在通過屬性訪問時是作為 Vue 的響應式系統的一部分緩存其中的。

# mapGetters  輔助函數

`mapGetters` 輔助函數僅僅是將 store 中的 getter 映射到局部計算屬性

```js
import { mapGetters } from 'vuex';

new Vue({ 
    el: '#app',
    store,
    data: {
    },
    // // 使用對象展開運算符將 getter 混入 computed 對象中
    computed: mapGetters([
        'doneTodos', 'doneTodosCount', 'getTodoById'
    ])
});
```
