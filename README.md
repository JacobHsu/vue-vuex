# Vuex

Vuex 是一個專為 Vue.js 應用程序開發的狀態管理模式。它採用集中式存儲管理應用的所有組件的狀態，並以相應的規則保證狀態以一種可預測的方式發生變化。

1.使用vue腳手架創建一個簡單的vue項目

[Vue CLI 3](https://cli.vuejs.org/)  [creating-a-project](https://cli.vuejs.org/zh/guide/creating-a-project.html)  
`vue create hello-vuex`  
`cd hello-vuex`  
`npm run serve`  

vue create hello-vuex

[安装 Vuex](https://vuex.vuejs.org/zh/installation.html)  
`npm install vuex --save`  

[State](https://vuex.vuejs.org/zh/guide/)  
> Vuex 通過 store 選項，提供了一種機制將狀態從根組件“注入”到每一個子組件中（需調用 Vue.use(Vuex)） 

[Getter](https://vuex.vuejs.org/zh/guide/getters.html)  
> Vuex 允許我們在 store 中定義“getter”（可以認為是 store 的計算屬性）

[Mutation](https://vuex.vuejs.org/zh/guide/mutations.html)  
> 更改 Vuex 的 store 中的狀態的唯一方法是提交 mutation。調用此函數。”要喚醒一個 mutation handler，你需要以相應的 type 調用 `store.commit` 方法   

[Action](https://vuex.vuejs.org/zh/guide/actions.html)  
> Action 類似於 mutation，不同在於：Action 提交的是 mutation，而不是直接變更狀態。Action 可以包含任意異步操作。