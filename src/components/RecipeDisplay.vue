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
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in hendrerit purus, nec dapibus nulla. Ut volutpat
      justo porttitor venenatis ornare. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
      curae; Sed nec lacus id ipsum tempus sodales non ac lacus. Nulla facilisi. In ac commodo nulla, vitae sodales
      lorem. Suspendisse potenti. Aliquam varius dignissim neque sed malesuada. Proin accumsan metus eget ante blandit
      hendrerit. Praesent in tortor a lorem dictum efficitur sit amet non eros.
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