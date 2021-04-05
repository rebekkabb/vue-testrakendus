<template>
  <form class='form-container' @submit.prevent="editRecipe">
    <router-link to="/" class="return-link"> Tagasi</router-link>
    <h1> Muuda retsepti </h1>
    <div class='form-element'>
      <label for="title"> Retsepti pealkiri</label>
        <input id="title" type='text' v-model="recipe.title"/>
    </div>
    <div class='form-element'>
      <label for="type">Käik</label>
        <input id="type" type='text' v-model="recipe.type"/>
    </div>
    <div class='form-element'>
      <label for="time">Valmistusaeg</label>
        <input id="time" type='number' v-model="recipe.time"/>
    </div>
    <div class='form-element'>
      <label for="ingredients"> Koostisosad</label>
        <textarea id='ingredients' v-model="recipe.ingredients"/>
    </div>
    <div class='form-element'>
      <label for="steps"> Juhised </label>
        <textarea id='steps' v-model="recipe.steps"/>
    </div>
    <input class='submit-button button-block' type='submit' value='Salvesta retsept'/>
  </form>

</template>

<script>
import axios from "axios";

export default {
  name: 'RecipeEditForm',
  data() {
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
  methods: {
    editRecipe() {
      axios.patch('/api/recipes/' + this.recipe.id, {
        title: this.recipe.title,
        type: this.recipe.type,
        time: this.recipe.time,
        ingredients: this.recipe.ingredients,
        steps: this.recipe.steps
      }).then(function (response) {
        console.log(response)
      })
      this.$router.push('/')
    }
  }
}
</script>

<style scoped lang="scss">

.form-container {
  min-width: 35vw;
  margin: 25px 20px;

  & h1 {
    text-align: center;
    margin-top: 25px;
  }
}

.form-element {
  margin: 25px 0;
  background-color: #CFDDD3;
  border-radius: 3px;

  & label {
    display: block;
    padding: 5px;
  }

  & input {
    width: 100%;
    height: 25px;
    font-size: 15px;
  }

  & textarea {
    width: 100%;
    height: 100px;
    font-size: 15px;
  }
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

  &:focus {
    outline: none;
  }

  &:active {
    transform: scale(0.60);
  }
}

.button-block {
  display: block;
  width: 100%;
}
.return-link{
  float: right;
}


</style>