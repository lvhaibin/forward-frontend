<script>
export default {
  props: {
    msg: String
  },

  methods: {
    test() {
      console.log('123')
    }
  },

  render() {
    return (
      <div class="hello">
        <h1>{this.msg}</h1>
        <button onClick={this.test}>xxx</button>
      </div>
    )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
