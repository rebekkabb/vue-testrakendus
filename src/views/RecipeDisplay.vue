<template>
  <div class="display-container">
    <div class="upper-container">
      <h2>{{ this.recipe.title }}</h2>
      <router-link to="/" class="return-link"> Tagasi</router-link>
    </div>
    <div class='with-svg-container small-margin'>
      <div class='with-svg'>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
             stroke="currentColor"
             stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="image">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
        <p>{{ this.recipe.time }}</p>
      </div>
      <div class='with-svg'>
        <svg class="image" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
             fill="none"
             stroke="currentColor"
             stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
          <line x1="7" y1="7" x2="7.01" y2="7"/>
        </svg>
        <p> {{ this.recipe.type }} </p>
      </div>
    </div>
    <h3> Koostisosad: </h3>
    <p class='display-whitespace'> {{ this.recipe.ingredients }} </p>
    <hr/>
    <h3> Juhised: </h3>
    <p class='display-whitespace'> {{ this.recipe.steps }} </p>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: 'RecipeDisplay',
  data(){
    return {
      recipe: {}
    }
  },

  created() {
    let id = this.$route.params.id
    axios.get('/api/recipes/' + id).then(res => {
      this.recipe = res.data.recipe
    });
  },

}
</script>

<style scoped lang="scss">

.display-container {
  overflow-y: auto;
  max-width: 35vw;
  min-width: 35vw;
  max-height: 70vh;
  display: flex;
  flex-direction: column;
  padding: 60px 50px;

  & a {
    text-decoration: none;
    color: #2c3e50;
  }
}

.upper-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
}

.with-svg-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 10vw;
}

.with-svg {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.small-margin {
  margin-bottom: 60px;
}

.display-container hr {
  margin: 30px 0;
}

.display-whitespace {
  white-space: pre-line;
}

</style>