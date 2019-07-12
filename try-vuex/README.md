# try-vuex

commit -> mutations   更改 Vuex 的 store 中的狀態
dispatch -> actions   提交的是 mutation，而不是直接變更狀態  (異步操作)  
getters -> getters 派生出一些狀態


安装 `npm install vuex --save`

`store` directory index.js  
`main.js` import 

[詳解vuex中mapState,mapGetters,mapMutations,mapActions的作用](https://codertw.com/前端開發/203146/)  
map其實就是一個在store檔案中的對映而已，就是不用讓你要呼叫一個值需要敲這麼多程式碼

## vuex-persistedstate  

[vuex-persistedstate](https://www.npmjs.com/package/vuex-persistedstate) - npm
[Vuex持久化插件-解决刷新数据消失的问题](https://juejin.im/post/5b62999fe51d4519610e336e)  
> Local Storage   
key: vuex
value: {"count":2,"numb":10086,"a":{"count":4},"b":{"count":8,"subModule":{"count":101}}}

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
