<template>
  <div id="app">
    
    <h2> Agile Princples </h2>

    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.content {
  width: 100vw;
  height: calc(100vh - 68px);
}
</style>
