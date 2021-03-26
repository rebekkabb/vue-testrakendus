<template>
<div>
  <span @click="$emit('swapComponent')">{{ recipe.title }}</span>
  <button @click="$emit('edit')"> Muuda retsepti</button>
  <button @click="$emit('delete')"> Eemalda retsept</button>
</div>
</template>

<script>
export default {
name: "RecipeItem",
  props: ['recipe']
}
</script>

<style scoped>

</style>