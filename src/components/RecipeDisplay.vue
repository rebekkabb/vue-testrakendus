<template>
  <div>
    <p>{{ this.recipe.title }}</p>
    <p>{{ this.recipe.type }}</p>
  </div>
</template>

<script>
export default {
  name: 'RecipeDisplay',
  props: ['recipe']
}
</script>

<style scoped>

</style>