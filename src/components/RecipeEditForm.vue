<template>
  <div class="edit-form">
    <label for="title" class="field"> Retsepti pealkiri:</label>
    <input type="text" v-model="title" id='title' :placeholder="this.recipe.title">

    <label for="type" class="field"> Käik:</label>
    <input type="text" v-model="type" id="type" :placeholder="this.recipe.type">

    <label for="time" class="field"> Valmistusaeg:</label>
    <input type="number" v-model="time" id="time" :placeholder="this.recipe.time">

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
    <button @click="editRecipe(); $emit('swap')"> Muuda retsepti</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'RecipeEditForm',
  props: ['recipe'],
  data() {
    return {
      title: this.recipe.title,
      type: this.recipe.type,
      time: this.recipe.time,
      ingredients: this.recipe.ingredients,
      steps: this.recipe.steps
    }
  },
  methods: {
    editRecipe() {
      axios.patch('/api/recipes/' + this.recipe.id, {
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

.edit-form {
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