<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
      <a class="navbar-brand" href="/" id="navbar-brand">EINSTEIN BITCOIN</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto"></ul>
        <div class="topnav-1-centered">
          <a href="#home" class="active">Learn</a>
        </div>
        <div class="topnav-2-centered">
          <a href="#home" class="active">Prices</a>
        </div>
        <span class="navbar-text">
          <ul class="navbar-nav mr-auto">
            <router-link to="/"
              ><li class="nav-item" id="btn-nav">
                <span class="nav-link" id="navbar-link">Sign In</span>
              </li></router-link
            >
            <router-link to="SignUp"
              ><li class="nav-item" id="btn-navi">
                <span class="nav-link" id="navbar-links">Sign Up</span>
              </li></router-link
            >
          </ul>
        </span>
      </div>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
a {
  text-decoration: none !important;
}
#navbar {
  margin-top: -50px;
  background-color: #eee !important;
  font-family: Helvetica, Arial, sans-serif;
}
#navbar-brand {
  font-weight: bold;
  position: relative;
  left: 10%;
}
.navbar-nav {
  position: relative;
  right: 80%;
}
#btn-nav {
  margin-right: 10px;
  border-radius: 10px;
}
#btn-nav:hover {
  margin-right: 10px;
  border-radius: 10px;
}
#btn-navi {
  border: 3px solid rgb(160, 160, 160);
  margin-right: 10px;
  border-radius: 10px;
}
#btn-navi:hover {
  border: 3px solid rgb(59, 1, 134);
  background-color: rgb(63, 0, 105);
  margin-right: 10px;
  border-radius: 10px;
}
#navbar-links {
  color: black;
  font-weight: bold;
}
#navbar-link {
  color: black;
  font-weight: bold;
}
#navbar-links:hover {
  color: rgb(255, 255, 255);
}
.topnav-1-centered a {
  float: none;
  position: absolute;
  top: 50%;
  left: 27%;
  transform: translate(-50%, -50%);
  color: rgb(40, 0, 85);
  font-weight: bold;
  font-size: 15px;
}
.topnav-2-centered a {
  float: none;
  position: absolute;
  top: 50%;
  left: 31%;
  transform: translate(-50%, -50%);
  color: rgb(42, 0, 90);
  font-weight: bold;
  font-size: 15px;
}

/* Responsive navigation menu (for mobile devices) */
@media screen and (max-width: 1400px) {
  .topnav-1-centered a {
  left: 31%;
}
.topnav-2-centered a {
  left: 36%;
}
}
@media screen and (max-width: 600px) {
  .topnav-centered a {
    position: relative;
    top: 0;
    left: 0;
    transform: none;
  }
}
</style>
