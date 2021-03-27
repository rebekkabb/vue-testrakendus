<template>
  <div id="app">
    <div class="container">
      <div class="recipe-list">
        <div class="header">
          <h1> Retseptid </h1>
          <button @click="swapComponent('add', '')"> Lisa retsept</button>
        </div>
        <div id="recipes" v-for="recipe in recipes" v-bind:key="recipe.id">
          <RecipeItem :recipe="recipe"
                      v-on:swapComponent="swapComponent('display', recipe)"
                      v-on:delete="deleteRecipe(recipe)"
                      v-on:edit="swapComponent('edit', recipe)"></RecipeItem>
        </div>
      </div>
      <component class="component-container" :is="currentComponent" v-bind="{ recipe: this.currentRecipe}"
                 v-on:swap="swapComponent('intro', '')"></component>
    </div>
  </div>

</template>

<script>

import RecipeDisplay from "./components/RecipeDisplay";
import RecipeItem from "./components/RecipeItem";
import IntroDisplay from "./components/IntroDisplay";
import RecipeAddForm from "./components/RecipeAddForm";
import RecipeEditForm from "./components/RecipeEditForm";
import axios from 'axios';

export default {
  name: 'App',
  components: {
    RecipeItem,
    'display': RecipeDisplay,
    'intro': IntroDisplay,
    'add': RecipeAddForm,
    'edit': RecipeEditForm
  },
  data() {
    return {
      recipes: [],
      currentRecipe: null,
      currentComponent: 'intro'
    }
  },
  methods: {
    listRecipes() {
      axios.get('/api/recipes')
          .then(function (response) {
            this.recipes = response.data.recipes
          }.bind(this));
    },
    swapComponent: function (component, recipe) {
      this.currentComponent = component
      this.currentRecipe = recipe
      this.listRecipes()
    },
    deleteRecipe: function (recipe) {
      fetch("/api/recipes/" + recipe.id, {method: 'delete', body: JSON.stringify(recipe)})
          .then(res => res.json())
          .then(data => {
            alert(data.message)
          })
      this.swapComponent('intro', '')
    },
  },
  created() {
    this.listRecipes()
  },
}
</script>

<style lang="scss">

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2c3e50;
  height: 100vh;
}

.container {
  height: 50vh;
  display: flex;
  flex-direction: row;
  border: 1px solid gray;
}

.header {
  margin-bottom: 30px;
}


.recipe-list {
  width: 20vw;
  text-align: center;
  background-color: #F1F5F2;
  overflow-y:auto
}

.component-container {
  text-align: center;
  width: 30vw;
}
</style>
