# Vuex

Vuex 是一個專為 Vue.js 應用程序開發的狀態管理模式。它採用集中式存儲管理應用的所有組件的狀態，並以相應的規則保證狀態以一種可預測的方式發生變化。


## 核心概念

### [State](https://vuex.vuejs.org/zh/guide/state.html)  

Vuex 使用**單一狀態樹**——是的，用一個對象就包含了全部的應用層級狀態。至此它便作為一個“唯一數據源 (SSOT)”而存在。這也意味著，每個應用將僅僅包含一個 store 實例。

那麼我們如何在 Vue 組件中展示狀態呢？
> 由於 Vuex 的狀態存儲是響應式的，從 store 實例中讀取狀態最簡單的方法就是在`計算屬性computed`中返回某個狀態

Vuex 通過 `store` 選項，提供了一種機制將狀態從根組件“注入”到每一個子組件中（需調用 `Vue.use(Vuex)`）
通過在根實例中註冊 store 選項，該 store 實例會注入到根組件下的所有子組件中，且子組件能通過 `this.$store` 訪問到。  

使用vue腳手架創建一個簡單的vue項目

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

[Module](https://vuex.vuejs.org/zh/guide/modules.html)  
> 由於使用單一狀態樹，應用的所有狀態會集中到一個比較大的對象。當應用變得非常複雜時，store 對象就有可能變得相當臃腫。為瞭解決以上問題，Vuex 允許我們將 store 分割成模塊（module）。每個模塊擁有自己的 state、mutation、action、getter  

# hexo 

[hexo-theme-doc](https://github.com/zalando-incubator/hexo-theme-doc)  
git clone 下來 新開blog資料夾 將code 複製過去  

_config.yaml
```js
# Site
title: Hello Vuex

# URL
## If your site is put in a subdirectory, set url as 'http://yoursite.com/child' and root as '/child/'
root: /vue-vuex

# Deployment
## Docs: https://hexo.io/docs/deployment.html
deploy:
    type: git
    repository: https://github.com/JacobHsu/vue-vuex
    branch: gh-pages
```

`$doc> npm install`

ERROR Deployer not found: git
`$doc> npm install hexo-deployer-git --save`  

`$doc> hexo g`
`$doc> hexo d`

https://jacobhsu.github.io/vue-vuex  

`$doc> hexo s`  
http://localhost:4000/vue-vuex/   


doc\source\_data \navigation.yaml
```js
  "logo": {
    "text": "Hello Vuex",
    "type": "link",
    "path": "index.html"
  },
```

### debug 
The tag swagger_to_html on line 6 in `swagger/to-html.md` is not a recognized Liquid tag. 

移除 github 不支持的特殊語法  


### References

[build-your-own-vuex](https://github.com/jackiewillen/blog/issues/18)  

