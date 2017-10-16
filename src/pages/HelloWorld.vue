<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  import server from './../server'

  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        auth: server.authenticator
      }
    },
    mounted () {
      console.log(this.auth)
    }
  }
  </script>
