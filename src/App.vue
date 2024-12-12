<template>
  <div id="app">
    Count: {{ count }}, double: {{ double }} <br>
    <button @click="increment">Increase</button>
  </div>
</template>
<script>

export default {
  name: 'App',
  data() {
    return {
      count: 0
    }
  },
  computed: {
    double() {
      return this.count*2;
    }
  },
  methods: {
    increment() {
      this.count++;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
