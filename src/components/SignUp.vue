<template>
  <div id="top-div">
    <navbar />
    <br /><br />
    <br />
    <div id="main-div">
      <div class="second-div">
        <div>
          <img src="@/assets/logo2.png" class="lock-img" />
        </div>
        <br />
        <div class="lock-div">
          <h3 class="lock-subheading">SIGN UP</h3>
          <br />
          <h6 class="sign-in-sub">
            Sign Up to create, discover and connect <br />
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
            pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" required
          />
          <br />
          <input
            class="input-fel"
            type="password"
            placeholder="Password"
            v-model="password"
          />
          <br />
          <router-link to="/"><p class="forgot-passw"><span class="already-reg">Already Registered?</span> SIGN IN!</p></router-link>
        </div>
        <br />
        <br />
        <div v-if="!loading">
          <button class="log-in" @click.prevent="signUpAndValidate">Sign Up</button>
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
    validateEmail (email) {
      const re = /\S+@\S+\.\S+/
      return re.test(email)
    },
    signUpAndValidate () {
      if (this.email === '') {
        this.$toasted.error('Please, enter your email.')
        return
      }
      if (this.password === '') {
        this.$toasted.error('Please, enter your password.')
        return
      }
      if (!this.validateEmail(this.email)) {
        this.$toasted.error('You have entered an invalid email address!')
        return
      }
      if (this.password.length <= 8) {
        this.$toasted.error('A password must be eight characters.')
        return
      }
      if (this.validateEmail(this.email)) {
      }
      this.loading = true
      this.$http
        .post(process.env.VUE_APP_SERVICE_URL + '/api/auth/signup', {
          // fName: 'User',
          // sName: 'Name',
          email: this.email,
          // sAddress: 'User-address',
          password: this.password,
          roles: ['user']
          // city: 'User-city',
          // pCode: 'User-pcode'
        })
        .then((response) => {
          this.loading = false

          if ('!message' in response.data) {
            this.$toasted.error('User already exist')
            console.log('already', response)
          } else {
            this.$toasted.success('You are successfully signed up. Now you can sign in')
            // this.$router.push('/SignUp')
            console.log('success', response)
          }
          console.log('response', response)
        })
        .catch((error) => {
          this.$toasted.error('User already exist.')
          console.log('error', error)
          this.loading = false
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
  height: 200px;
}

.lock-div {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  font-weight: bold;
}

.lock-subheading {
  font-weight: bold;
  font-size: 25px;
  color: #000;
  font-family: fantasy;
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
  margin-top: 10px;
  color: rgb(74, 0, 192);
  display: inline-block;
}

.already-reg{
  font-size: 13px;
  color: rgb(39, 39, 39);
}

.log-in-loader {
  padding: 11px 29px;
  background-color: rgb(40, 0, 93);
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  font-size: 12px;
}

.log-in {
  padding: 11px 29px;
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
