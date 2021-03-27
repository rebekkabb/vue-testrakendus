<template>
  <div class="layout">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="image">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
    <p>{{ this.recipe.time }} minutit</p>
  </div>
</template>

<script>
export default {
  name: "RecipeTime",
  props: ['recipe']
}
</script>

<style scoped lang="scss">

.layout {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.image {
  height: 25px;
  width: 25px;
  margin-right: 5px;
}

</style>