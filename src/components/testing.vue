<template>
  <div>
    <nav id="navbar">
      <input type="checkbox" id="check" />
      <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
      </label>
      <label class="logo">EINSTEIN BITCOIN</label>
      <ul style="margin-top: -10px; margin-right: 150px; background-color: #eee">
        <!-- <div class="topnav-1-centered">
          <a href="#home" class="active">Learn</a>
        </div>
        <div class="topnav-2-centered">
          <a href="#home" class="active">Prices</a>
        </div> -->
        <router-link to="/"
          ><li class="nav-item">
            <span class="nav-link" id="navbar-link">Sign In</span>
          </li></router-link
        >
        <router-link to="SignUp"
          ><li class="nav-item">
            <span class="nav-link" id="navbar-links">Sign Up</span>
          </li></router-link
        >
      </ul>
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

nav {
  background: #0082e6;
  height: 80px;
  width: 100%;
}

label.logo {
  color: #000000;
  font-size: 20px;
  line-height: 80px;
  padding: 0 140px;
  font-weight: bold;
  position: absolute;
  left: -20px;
}

nav ul {
  float: right;
  margin-right: 60px;
}

nav ul li {
  display: inline-block;
  line-height: 80px;
  margin: 0 2px;
}
.nav-link{
  display: inline;
}
.topnav-1-centered a {
  float: none;
  position: absolute;
  margin-top: 50px;
  left: 27%;
  transform: translate(-50%, -50%);
  color: rgb(40, 0, 85);
  font-weight: bold;
  font-size: 15px;
}
.topnav-2-centered a {
  float: none;
  position: absolute;
  margin-top: 50px;
  left: 32%;
  transform: translate(-50%, -50%);
  color: rgb(42, 0, 90);
  font-weight: bold;
  font-size: 15px;
}

#navbar-link {
  color: black;
  font-weight: bold;
}

#navbar-links {
  padding: 11px;
  border-radius: 10px;
  color: #000000;
  font-weight: bold;
  border: none;
  border: 3px solid rgb(160, 160, 160);
}
#navbar-links:hover {
  padding: 11px;
  border-radius: 10px;
  color: #ffffff;
  font-weight: bold;
  background-color: rgb(48, 0, 93);
}

nav ul li a {
  color: #000000;
  font-weight: 500;
  font-size: 20px;
  padding: 7px 13px;
  border-radius: 3px;
  /* text-transform: uppercase; */
  font-family: "Poppins", sans-serif;
}
.checkbtn {
  font-size: 30px;
  color: white;
  float: right;
  line-height: 80px;
  margin-right: 40px;
  cursor: pointer;
  display: none;
}

#check {
  display: none;
}

@media (max-width: 952px) {
  label.logo {
    font-size: 27px;
    padding-left: 25px;
  }
  nav ul li a {
    font-size: 16px;
  }
}

@media (max-width: 858px) {
  .checkbtn {
    display: block;
    margin-right: 40px;
  }
  ul {
    position: fixed;
    width: 100%;
    height: 100vh;
    background: #dfdfdf;
    top: 80px;
    left: -100%;
    text-align: center;
    transition: all 0.5s;
  }
  nav ul li {
    display: block;
    margin: 50px 0;
    line-height: 30px;
  }
  nav ul li a {
    font-size: 20px;
  }
  a:hover,
  a.active {
    background: none;
    color: #0082e6;
  }
  #check:checked ~ ul {
    left: 0;
  }
  @media screen and (max-width: 860px) {
    label.logo {
      font-size: 22px;
      padding: 0 50px;
    }

    .topnav-1-centered a {
      margin-top: 300px;
      left: 49%;
      color: rgb(0, 0, 0);
      font-size: 25px;
      background-color: rgb(255, 255, 255);
      width: 90%;
      height: 64px;
      padding-top: 17px;
      border-radius: 10px;
    }
    .topnav-2-centered a {
      float: none;
      position: absolute;
      margin-top: 408px;
      left: 49%;
      transform: translate(-50%, -50%);
      color: rgb(0, 0, 0);
      font-weight: bold;
      font-size: 25px;
      background-color: rgb(255, 255, 255);
      width: 90%;
      height: 70px;
      padding-top: 20px;
      border-radius: 10px;
    }
    #navbar-link {
      color: rgb(255, 255, 255);
      font-weight: bold;
      position: relative;
      top: 113px;
      right: 7px;
      font-size: 21px;
      background-color: rgb(69, 0, 126);
      height: 63px;
      width: 94%;
      padding-top: 18px;
      border-radius: 10px;
    }

    #navbar-links {
      border-radius: 10px;
      font-size: 20px;
      color: #ffffff;
      font-weight: bold;
      background-color: rgb(69, 0, 126);
      position: relative;
      top: -80px;
      right: 7px;
      padding-top: 20px;
      width: 94%;
      height: 63px;
      border: none;
    }
    #navbar-links:hover {
      border-radius: 10px;
      color: #ffffff;
      font-weight: bold;
      background-color: rgb(69, 0, 126);
      position: relative;
      top: -80px;
      right: 25px;
      padding: 23px 335px;
    }
  }
}
</style>
