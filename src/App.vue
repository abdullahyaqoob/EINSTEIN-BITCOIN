<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Sign In</router-link> |
      <router-link to="/SignUp">Sign Up</router-link> |
      <router-link to="/forgot">Forgot</router-link> -->
      <!-- <router-link to="/Resetpass">Reset Pass</router-link> -->
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #eee;
}

#nav {
  margin: -8px;
  padding: 30px;
  background-color: #eee;
  // margin-bottom: -80px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
