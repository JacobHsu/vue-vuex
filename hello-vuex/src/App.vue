<template>
  <div id="app">
    成功console印出this.$store.state.count的值為0
  </div>
</template>

<script>
export default {
  name: 'app',
  created() {
    console.log('打印出this.$store.state.count的结果',this.$store.state.count);
  },
}
</script>
