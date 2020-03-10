<template>
  <div id="app">
    <div class="header">
      <h1>Agile Principles</h1>
    </div>

    <div class="content">
      <router-view />
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
  height: calc(100vh - 90px);
}

.header {
  padding: 5px;
  background: #3F85ED;
  color: white;
}
</style>
