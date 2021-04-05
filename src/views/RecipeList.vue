<template>
  <div class="recipe-list-container">
    <div class="header">
      <h1> Retseptid </h1>
      <router-link to="/add" class="submit-button button-block"> Lisa retsept</router-link>
      <hr/>
    </div>
    <div class="recipes">
      <div v-for="recipe in recipes" :key="recipe.id">
        <Recipe :recipe="recipe"
                v-on:delete="deleteRecipe(recipe)"></Recipe>
      </div>
    </div>
  </div>
</template>

<script>
import Recipe from "../components/Recipe";
import axios from 'axios';

export default {
  name: 'RecipeList',
  components: {
    Recipe,
  },
  data() {
    return {
      recipes: []
    }
  },
  methods: {
    listRecipes() {
      axios.get('/api/recipes')
          .then(function (response) {
            this.recipes = response.data.recipes
          }.bind(this));
    },
    deleteRecipe: function (recipe) {
      axios.delete('/api/recipes/' + recipe.id).then(() => {
        this.listRecipes()
        alert('Retsept on kustutatud!')
      })
    },
  },
  created() {
    this.listRecipes()
  },
}
</script>

<style scoped lang="scss">

.recipe-list-container {
  text-align: center;
  min-width: 38vw;

  & a {
    text-decoration: none;
    color: #2c3e50;
  }
}

.header {
  margin-bottom: 30px;
  padding: 30px 50px;
  background-color: #F1F5F2;

  & h1 {
    margin-bottom: 30px;
  }

  & hr {
    margin-top: 30px;
    color: lightgray;
  }

}

.recipes {
  padding: 0 50px;
  max-height: 30vh;
  overflow-y: auto;
}

.submit-button {
  display: inline-block;
  background: lightgray;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 18px;
  font-family: inherit;
}

.submit-button:focus {
  outline: none;
}

.submit-button:active {
  transform: scale(0.60);
}

.button-block {
  display: block;
  width: 100%;
}

</style>