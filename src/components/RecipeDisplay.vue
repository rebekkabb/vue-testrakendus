<template>
  <div class="display">
    <div class="upper-section">
      <div class="header">
        <h2>{{ this.recipe.title }}</h2>
        <div class="details">
          <RecipeType :recipe="this.recipe"></RecipeType>
          <RecipeTime :recipe="this.recipe"></RecipeTime>
        </div>
      </div>
      <div class="ingredients">
        <p>{{ this.recipe.ingredients }}</p>
      </div>
    </div>
    <div class="lower-section">
      <p> {{ this.recipe.steps }}</p>
    </div>
  </div>
</template>

<script>
import RecipeType from "./RecipeType";
import RecipeTime from "./RecipeTime";

export default {
  name: 'RecipeDisplay',
  components: {RecipeTime, RecipeType},
  props: ['recipe']
}
</script>

<style scoped lang="scss">
.display {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.upper-section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 20vh;
}

.lower-section {
  height: 25vh;
  width: 30vw;
}

.header {
  display: flex;
  flex-direction: column;
  width: 15vw;
}

.ingredients {
  margin-top: 2vh;
  width: 20vw;
}

.details {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

</style>