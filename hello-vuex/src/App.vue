<template>
  <div id="app">成功console印出this.$store.state.count的值為0
    <br>成功console印出this.$store.getters.getStatePlusOne的值為1
    <br>成功在2秒之後console輸出count 0加5後的結果5
    <br>成功在3秒之後console輸出count 5加6後的結果11
  </div>
</template>

<script>
export default {
  name: "app",
  created() {
    console.log("打印出this.$store.state.count的结果", this.$store.state.count);
    console.log(
      "打印出this.$store.getters.getStatePlusOne的結果",
      this.$store.getters.getStatePlusOne
    );
  },
  mounted() {
    setTimeout(() => {
      this.$store.commit("incrementFive");
      console.log("打印出store state自增5後的結果", this.$store.state.count);
    }, 2000);
    setTimeout(() => {
      this.$store.dispatch("countPlusSix");
      console.log("打印出store state增6後的結果", this.$store.state.count);
    }, 3000);
  },
  computed: {
    count() {
      return this.$store.state.count;
    }
  }
};
</script>
