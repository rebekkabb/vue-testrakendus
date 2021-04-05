<template>
  <div class="app">
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.app{
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2c3e50;
  height: 100vh;

}

.container {
  min-height: 60vh;
  max-width: 50vw;
  display: flex;
  flex-direction: row;
  border: 1px solid darkgray;
  border-radius: 5px;
}

</style>
