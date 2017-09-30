<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Hello Vue 2.0'
    }
  },
  render(createElement) {
    return createElement('h1', 'Hello from App.vue')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
