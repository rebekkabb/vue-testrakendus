<template>
  <div>
    <p> Form </p>
    <input type="text" v-model="title" placeholder="title">
    <input type="text" v-model="type" placeholder="type">
    <input type="number" v-model="time" placeholder="time">
    <input type="text" v-model="ingredients" placeholder="ingredients">
    <button @click="addRecipe(); $emit('swap')" > Lisa retsept </button>
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

<style scoped>

</style>