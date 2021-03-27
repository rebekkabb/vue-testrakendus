<template>
  <div class="add-form">
    <label for="title" class="field"> Retsepti pealkiri:</label>
    <input type="text" v-model="title" id='title' placeholder="Retsepti pealkiri">
    <label for="type" class="field"> Käik:</label>
    <input type="text" v-model="type" id="type" placeholder="Käik">
    <label for="time" class="field"> Valmistusaeg:</label>
    <input type="number" v-model="time" id="time" placeholder="Valmistusaeg">
    <label for="ingredients" class="field"> Koostisosad:</label>
    <textarea v-model="ingredients" id="ingredients" placeholder="Koostisosad"></textarea>
    <button @click="addRecipe(); $emit('swap')"> Lisa retsept</button>
  </div>
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
      ingredients: ''
    }
  },
  methods: {
    addRecipe() {
      axios.post('/api/recipes', {
        title: this.title,
        type: this.type,
        time: this.time,
        ingredients: this.ingredients
      }).then(function (response) {
        console.log(response)
      })
    }
  }
}
</script>

<style scoped lang="scss">

.add-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & input {
    margin-bottom: 30px;
    width: 15vw;
    display: block;
  }

  & label {
    font-size: 20px;
    width: 15vw;
    float: left;
    display: block;
  }
  & #time {
    width: 5vw;
  }

  & textarea {
    height: 10vh;
    width: 20vw;
    margin-bottom: 30px;
  }
}


</style>