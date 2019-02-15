<template>
    <div>
        頁面A被加載，預設countA為100
    </div>
</template>

<script>
export default {
  name: 'pageA',
  mounted() {
      setTimeout(() => {
          this.$store.dispatch('incrementAAction');
      }, 5000)
  },
}
</script>
