<template>
  <div id="app">
    <button @click="increment">加{{count}}</button> 
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {mapState,mapActions} from 'vuex' 

export default {
  name: 'app',
  data () { 
    return { 
      msg: 'Welcome to Your Vue.js App' 
    } 
  }, 
  methods:{ 
    increment() { 
      this.$store.dispatch('incrementsync').then(() => { 
        console.log('then'); 
      }); 
    } 
  }, 
  computed:
    mapState({ // mapState相當於對映 
      count: 'numb', //這邊的意思是mapState把'numb'的值對映給了count，所以count等於10086 
    }),
  components: {
    HelloWorld
  }
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
