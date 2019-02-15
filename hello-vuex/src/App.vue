<template>
  <div id="app">成功console印出this.$store.state.count的值為0
    <br>Getter成功console印出this.$store.getters.getStatePlusOne的值為1
    <br>Mutation成功在2秒之後console輸出count 0加5後的結果5
    <br>Action成功在3秒之後console輸出count 5加6後的結果11
    <br>Module成功在5秒後A頁面觸發incrementAAction，主界面中的countA變化為101
    <br><br>==============主頁================<br>
    主頁數量count為: {{count}}<br>
    pageA數量count為: {{countA}}<br>
    ==========以下為PageA內容==========<br>
    <page-a></page-a>
  </div>
</template>

<script>
import pageA from './pageA';
export default {
  name: "app",
   components: {
    pageA
  },
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
    },
    countA() {
      return this.$store.state.a.count; // -> moduleA 的狀態
    }
  }
};
</script>
