<template>
  <div class="add-form">
    <label for="title" class="field"> Retsepti pealkiri</label>
    <input type="text" v-model="title" id='title' placeholder="Retsepti pealkiri">
    <label for="type" class="field"> Käik</label>
    <input type="text" v-model="type" id="type" placeholder="Käik">
    <label for="time" class="field"> Valmistusaeg</label>
    <input type="number" v-model="time" id="time" placeholder="Valmistusaeg">

    <div class="textareas">
      <div>
        <label for="ingredients" class="field"> Koostisosad</label>
        <textarea v-model="ingredients" id="ingredients" placeholder="Koostisosad"></textarea>
      </div>
      <div>
        <label for="juhised" class="field"> Juhised</label>
        <textarea v-model="steps" id="juhised" placeholder="Juhised"></textarea>
      </div>
    </div>
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
  }

  & #time {
    width: 5vw;
  }

  & textarea {
    height: 10vh;
    width: 15vw;
    margin-bottom: 30px;
  }
}

.textareas {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

}


</style>