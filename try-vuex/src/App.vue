<template>
  <div id="app">
    state.a.count={{a}} , state.b.subModule.count={{b}} <br>
    <button>加{{count}}</button> 
  </div>
</template>

<script>
import {mapState} from 'vuex' 

export default {
  name: 'app',
  data () { 
    return { 
      msg: 'Welcome to Your Vue.js App' 
    } 
  }, 
  created() {
    console.log('created...',this.msg)
  },
  computed: mapState({ // mapState相當於對映
      a: state => state.a.count,
      b: state => state.b.subModule.count,
      count: 'numb', //這邊的意思是mapState把'numb'的值對映給了count，所以count等於10086 
  })//,
  //methods: mapActions('some/nested/module',[
      //'foo' //this.foo this['some/nested/module/foo']() some is module in store / foo is a action
  //])

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
