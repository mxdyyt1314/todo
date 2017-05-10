<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
    if (!window.localStorage.token) {
      console.log(this.$router)
    }
  }
}
</script>

<style scoped>

</style>
