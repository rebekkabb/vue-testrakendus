<template>
<div>
  <p> Form </p>
  <input type="text" v-model="title" :placeholder="this.recipe.title">
  <input type="text" v-model="type" :placeholder="this.recipe.type">
  <input type="number" v-model="time" :placeholder="this.recipe.time">
  <input type="text" v-model="ingredients" :placeholder="this.recipe.ingredients">
  <button @click="editRecipe(); $emit('swap')" > Muuda retsepti </button>
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
      ingredients: this.recipe.ingredients
    }
  },
  methods: {
    editRecipe() {
      axios.patch('/api/recipes/' + this.recipe.id, {
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

<style scoped>

</style>