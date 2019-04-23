title: State
---

Vuex 使用**單一狀態樹**——是的，用一個對象就包含了全部的應用層級狀態。至此它便作為一個“唯一數據源 (SSOT)”而存在。這也意味著，每個應用將僅僅包含一個 store 實例。單一狀態樹讓我們能夠直接地定位任一特定的狀態片段，在調試的過程中也能輕易地取得整個當前應用狀態的快照。

# 在 Vue 組件中獲得 Vuex 狀態

那麼我們如何在 Vue 組件中展示狀態呢？
由於 Vuex 的狀態存儲是響應式的，從 store 實例中讀取狀態最簡單的方法就是在`計算屬性computed`中返回某個狀態

https://jsbin.com/qocogojose/edit?html,output
https://jsbin.com/muxodoziba/edit?html,js,output

Vuex 通過 `store` 選項，提供了一種機制將狀態從根組件“注入”到每一個子組件中（需調用 `Vue.use(Vuex)`）

```js
const app = new Vue({
  el: '#app',
  // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
  store,
  components: { Counter },
  template: `
    <div class="app">
      <counter></counter>
    </div>
  `
})
```

通過在根實例中註冊 `store` 選項，該 store 實例會注入到根組件下的所有子組件中，且子組件能通過 `this.$store` 訪問到。讓我們更新下 Counter 的實現：

```js
const Counter = {
  template: `<div>{{ count }}</div>`,
  computed: {
    count () {
      return this.$store.state.count
    }
  }
}
```

# mapState 輔助函數

當一個組件需要獲取多個狀態時候，將這些狀態都聲明為計算屬性會有些重複和冗餘。為瞭解決這個問題，我們可以使用 `mapState` 輔助函數幫助我們生成計算屬性，讓你少按幾次鍵：

https://scrimba.com/c/c6g8R6f9

```js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 3
    }
});

import { mapState } from 'vuex';

new Vue({ 
    el: '#app',
    store,
    data: {
        localCount: 4
    },
    computed: mapState([
        'count'
    ])
});
```


##　對象展開運算符

`mapState` 函數返回的是一個對象。我們如何將它與局部計算屬性混合使用呢？通常，我們需要使用一個工具函數將多個對象合併為一個，以使我們可以將最終對象傳給 computed 屬性。但是自從有了對象展開運算符

```js
computed: {
  localComputed () { /* ... */ },
  // 使用對象展開運算符將此對象混入到外部對象中
  ...mapState({
    // ...
  })
}
```





