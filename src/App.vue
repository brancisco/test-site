<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Hello World.</h1>
    <p>Website coming soon.</p>
    <ul>
      <li><router-link to="/foo">Go to Foo</router-link></li>
      <li><router-link to="/bar">Go to Bar</router-link></li>
      <li><router-link :to="'/' + fakeUrl">Get Lost</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      fakeUrl: 'nowhere'
    }
  },
  methods: {
    getRandomWord () {
      fetch('https://random-word-api.herokuapp.com/word?number=1&swear=0')
        .then(response => response.json())
        .then(data => {
          this.fakeUrl = data[0] || 'nowhere'
        });
    }
  },
  mounted () {
    this.getRandomWord()
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

ul {
  margin: auto;
  width: 300px;
  display: flex;
  padding-left: 0;
  justify-content: space-between;
}

li {
  padding-left: 0;
}
</style>
