<template>
  <div class="item" @click="$emit('swapComponent')">
    <span class='title' >{{ recipe.title }}</span>
    <div class="buttons">
      <EditButton @click.native.stop="$emit('edit')"></EditButton>
      <DeleteButton @click.native.stop="$emit('delete')"></DeleteButton>
    </div>
  </div>
</template>

<script>
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

export default {
  name: "RecipeItem",
  components: {EditButton, DeleteButton},
  props: ['recipe']
}
</script>

<style lang="scss">

.item {
  background-color: #CFDDD3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  margin-bottom: 2px;
  border-radius: 3px;


  &:hover {
    background-color: #DBE6DE;
    cursor: pointer;
  }
}

.title {
  font-size: 20px;
  cursor: pointer;
  margin-left: 20px;

}

.buttons {
  margin-right: 10px;
}

</style>