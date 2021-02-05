<template>
  <div id="top-div">
    <navbar />
    <br /><br />
    <br />
    <div id="main-div">
      <div class="second-div">
        <div>
          <!-- <img src="@/assets/images/lock.svg" class="lock-img" /> -->
          <img src="@/assets/logo2.png" class="lock-img" />
        </div>
        <br />
        <div class="lock-div">
          <!-- <h2 class="lock-subheading">Welcome to name</h2> -->
          <h3 class="lock-subheading">SIGN IN</h3>
          <br />
          <h6 class="sign-in-sub">
            Sign in to create, discover and connect <br />
            with the global community.
          </h6>
        </div>
        <br />
        <div>
          <input
            class="input-fel"
            type="text"
            placeholder="Email"
            style="margin-bottom: 15px"
            v-model="email"
          />
          <br />
          <input
            class="input-fel"
            type="password"
            placeholder="Password"
            v-model="password"
          />
          <br />
          <router-link to="SignUp"
            ><p class="forgot-passw">Create an account!</p></router-link
          >
          <router-link to="forgot"><p class="forgot-pass" style="text-align: start">Forgot my password!</p></router-link>
        </div>
        <br />
        <br />
        <div v-if="!loading">
          <button class="log-in" @click.prevent="signInAndValidate">Log In</button>
        </div>
        <div v-else>
          <button class="log-in-loader">
            <img src="@/assets/loading.gif" style="vertical-align: sub; width: 17px;" />
            Loading...
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '../components/navbar.vue'
export default {
  name: 'Home',
  components: {
    navbar
  },
  data () {
    return {
      signUp: false,
      email: '',
      password: '',
      loading: false
    }
  },
  methods: {
    signInAndValidate () {
      this.loading = true
      console.log('function called')
      if (this.email === '') {
        this.$toasted.error('Invalid email or password. Try clicking Forgot Password if youre having trouble signing in.')
        this.loading = false
        return
      } else if (this.password === '') {
        this.$toasted.error('Invalid email or password. Try clicking Forgot Password if youre having trouble signing in.')
        this.loading = false
        return
      }
      this.$http
        //  .post("https://backendapi.youvegotmailagain.com/login", {
        .post(process.env.VUE_APP_SERVICE_URL + '/api/auth/signin', {
          password: this.password,
          email: this.email,
          roles: 'merchant'
        })
        .then((response) => {
          this.loading = false
          console.log('response:', response)
          console.log('sign in token', response.data.accessToken)
          console.log('sign in id', response.data.id)
          localStorage.setItem('token', response.data.accessToken)
          localStorage.setItem('id', response.data.id)
          this.$toasted.success('You are successfully loged in.')
          // this.$router.push('/generateApi')
        })
        .catch((error) => {
          this.loading = false
          // this.$log.debug(error.response);
          console.log('error:', error)
          this.$toasted.error('Invalid username or password.')
        })
    }
  }
}
</script>

<style scoped>
#top-div {
  margin: -8px;
  padding: 0;
  height: 98vh;
  background-color: #eee;
  color: rgb(68, 68, 68);
  font-family: Arial, Helvetica, sans-serif;
}

#main-div {
  border-radius: 3px;
  width: 500px;
  margin: 60px auto;
  background: rgb(255, 255, 255);
  margin: 0px auto;
}

.second-div {
  border-radius: 3px;
  box-shadow: 0px 0px 0px 1px #e4e4e4;
  text-align: center;
  width: 500px;
  height: 550px;
  /* height: auto; */
}

a {
  list-style: none;
  text-decoration: none;
  list-style-type: none;
  color: rgb(83, 83, 83);
  font-size: 18px;
}

.lock-img {
  max-height: 130px;
  width: 230px;
  margin-top: 30px;
  /* margin-bottom: -90px; */
  height: 200px;
}

.lock-div {
  /* color: rgba(226, 10, 10, 0); */
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  font-weight: bold;
}

.lock-subheading {
  font-weight: bold;
  font-size: 25px;
  color: #000;
  font-family: Arial, Helvetica, sans-serif;
}

.sign-in-sub {
  font-size: 14px;
  font-weight: bold;
  margin-top: -5px;
}

.input-fel {
  width: 250px;
  border: none;
  padding-bottom: 7px;
  border-bottom: 2px solid rgb(163, 163, 163);
  /* for moving of feild */
  transition-property: width;
  transition-duration: 1s;
  /* transition-delay: 1s; */
  font-size: 13px;
}

.input-fel:hover {
  border-bottom: 2px solid rgb(11, 2, 126);
  /* for moving of feild */
  width: 230px;
}

.input-fel:focus {
  outline: none;
  border: none;
  border-bottom: 2px solid rgb(11, 2, 126);
}

.forgot-pass {
  font-size: 10px;
  margin-left: 65px;
  color: rgb(74, 0, 192);
  display: inline-block;
}

.forgot-passw {
  font-size: 10px;
  margin-right: 7px;
  color: rgb(74, 0, 192);
  display: inline-block;
}

.log-in {
  padding: 11px 29px;
  /* background-color: rgb(97, 50, 158); */
  background-color: rgb(40, 0, 93);
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  font-size: 12px;
}
.log-in-loader {
  padding: 11px 29px;
  /* background-color: rgb(97, 50, 158); */
  background-color: rgb(40, 0, 93);
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  font-size: 12px;
}

.log-in:hover {
  background-color: rgb(231, 231, 231);
  color: #000;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  border: 1px solid rgb(185, 185, 185);
}

@media screen and (max-width:500px) {
#main-div {
  width: 400px;
}

.second-div {
  width: 400px;
}
}

@media screen and (max-width:400px) {
#main-div {
  width: 350px;
  margin: -90px auto;
}

.second-div {
  width: 350px;
}
}

</style>
