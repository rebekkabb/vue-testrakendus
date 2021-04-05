<template>
  <form class='form-container' @submit.prevent="addRecipe">
    <router-link to="/" class="return-link"> Tagasi </router-link>
    <h1> Lisa retsept </h1>
    <div class='form-element'>
      <label> Retsepti pealkiri
      <input type='text' v-model="title" placeholder='Lisa pealkiri'/>
      </label>
    </div>
    <div class='form-element'>
      <label>Käik
      <input type='text' v-model="type" placeholder='Lisa käik'/>
      </label>
    </div>
    <div class='form-element'>
      <label>Valmistusaeg
      <input type='number' v-model="time" placeholder='Lisa valmistusaeg'/>
      </label>
    </div>
    <div class='form-element'>
      <label> Koostisosad
      <textarea id='ingredients' v-model="ingredients" placeholder='Lisa koostisosad'/>
      </label>
    </div>
    <div class='form-element'>
      <label> Juhised
      <textarea id='juhised' v-model="steps" placeholder='Lisa juhised'/>
      </label>
    </div>
    <input class='submit-button button-block' type='submit' value='Salvesta retsept'/>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  name: 'RecipeAddForm',
  data() {
    return {
      title: '',
      type: '',
      time: 0,
      ingredients: '',
      steps: ''
    }
  },
  methods: {
    addRecipe() {
      axios.post('/api/recipes', {
        title: this.title,
        type: this.type,
        time: this.time,
        ingredients: this.ingredients,
        steps: this.steps
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

  &:focus{
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