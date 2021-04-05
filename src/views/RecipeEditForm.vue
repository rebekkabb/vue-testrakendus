<template>
  <form class='form-container' @submit.prevent="editRecipe">
    <router-link to="/" class="return-link"> Tagasi</router-link>
    <h1> Muuda retsepti </h1>
    <div class='form-element'>
      <label> Retsepti pealkiri
        <input type='text' v-model="recipe.title"/>
      </label>
    </div>
    <div class='form-element'>
      <label>Käik
        <input type='text' v-model="recipe.type"/>
      </label>
    </div>
    <div class='form-element'>
      <label>Valmistusaeg
        <input type='number' v-model="recipe.time"/>
      </label>
    </div>
    <div class='form-element'>
      <label> Koostisosad
        <textarea id='ingredients' v-model="recipe.ingredients"/>
      </label>
    </div>
    <div class='form-element'>
      <label> Juhised
        <textarea id='juhised' v-model="recipe.steps"/>
      </label>
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

  & a {
    text-decoration: none;
    color: #2c3e50;
  }

  & h1 {
    text-align: center;
    margin-top: 25px;
  }
}

.form-element {
  margin: 25px 20px;
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