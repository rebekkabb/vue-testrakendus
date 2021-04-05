<template>
  <div class="item">
    <div class='recipe-title'>
      <router-link :to="{name: 'RecipeDisplay', params: {id: recipe.id}}">
        <h3>{{ recipe.title }}</h3>
      </router-link>
    </div>
    <div class="buttons">
      <router-link :to="{name: 'RecipeEditForm' ,params: {id: recipe.id}}">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
             stroke="currentColor"
             stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="button">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
        </svg>
      </router-link>
      <svg @click="$emit('delete', recipe.id)" class='button' xmlns="http://www.w3.org/2000/svg" width="20" height="20"
           viewBox="0 0 24 24" fill="none"
           stroke="currentColor"
           stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="3 6 5 6 21 6"></polyline>
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        <line x1="10" y1="11" x2="10" y2="17"></line>
        <line x1="14" y1="11" x2="14" y2="17"></line>
      </svg>
    </div>
  </div>
</template>

<script>

export default {
  name: "Recipe",
  props: ['recipe']
}
</script>

<style lang="scss">

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2px;
}

.recipe-title {
  font-size: 18px;
  cursor: pointer;
  width: 25vw;
  height: 40px;
  border-radius: 3px;
  background-color: #CFDDD3;

  &:hover {
    background-color: #DBE6DE;
    cursor: pointer;
  }

  & h3 {
    font-size: 18px;
  }

}

.buttons {
  margin: 0 10px;
}

.button {
  height: 25px;
  width: 25px;
  transition: transform 0.15s linear;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

}

</style>