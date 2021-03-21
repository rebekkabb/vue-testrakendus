<template>
  <div id="app">
    <ul id="recipes">
      <li v-for="recipe in recipes" v-bind:key="recipe.id">{{ recipe.title }}</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      users: [],
    }
  },
  created() {
    fetch("/api/recipes")
        .then((res) => res.json())
        .then((json) => {
          this.recipes = json.recipes
        })
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
