title: QA
---

在初始化項目時有個選項Use ESLint to lint your code? (Y/n)  
如果選擇是yes,則有可能在你寫.vue文件的js `console.log`時會報錯  

這個錯誤因為你設置了eslint，但你的js代碼不規範的原因
可以重新初始化關掉eslint。

Use /* eslint-disable */ to ignore all warnings in a file.

[How to disable eslint on vue-cli 3?](https://stackoverflow.com/questions/49121110/how-to-disable-eslint-on-vue-cli-3)

You can remove the eslint rule by adding a `vue.config.js` file to your project with the following content.

```js
module.exports = {
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    }
}
```
