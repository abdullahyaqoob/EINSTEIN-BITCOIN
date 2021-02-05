<template>
  <div id="top-div">
    <br /><br /><br />
    <div id="main-div">
      <div class="second-div">
        <div>
          <!-- <img src="@/assets/images/lock.svg" class="lock-img" /> -->
          <img src="@/assets/logo2.png" class="lock-img" />
        </div>
        <div class="lock-div">
          <!-- <h2 class="lock-subheading">Welcome to name</h2> -->
          <br />
          <h3 class="lock-subheading">SIGN UP</h3>
          <br />
          <h5 class="sign-up-sub">
            Sign Up to create, discover and connect <br />
            with the global community.
          </h5>
        </div>
        <br /><br />
        <form action="#">
          <div>
            <input class="input-fel-full" type="text" placeholder="Enter Your Email:" v-model="email" />
            <br /><br />
            <b-container class="bv-example-row">
              <b-row>
                <b-col
                  ><input class="input-fel" type="text" placeholder="First Name:" v-model="fName"
                /></b-col>
                <b-col
                  ><input class="input-fell" type="text" placeholder="Last Name:" v-model="sName"
                /></b-col>
              </b-row>
            </b-container>
            <br />
            <b-container class="bv-example-row">
              <b-row>
                <b-col
                  ><input class="input-fel" type="password" placeholder="Your Password:"
                /></b-col>
                <b-col
                  ><input class="input-fell" type="password" placeholder="Confirm Password:" v-model="password"
                /></b-col>
              </b-row>
            </b-container>
            <br />
            <b-container class="bv-example-row">
              <b-row>
                <b-col><input class="input-fel" type="text" placeholder="City:" v-model="city" /></b-col>
                <b-col
                  ><input class="input-fell" type="number" placeholder="Postal Code:"  v-model="pCode"
                /></b-col>
              </b-row>
            </b-container>
            <br />
            <input
              class="input-fel-full"
              type="text"
              placeholder="Enter Your Street Address"  v-model="sAddress"
            />
            <br />
            <div class="end-two-links">
              <!-- <router-link to="/"><p class="Sign-In"><span class="Sign-In-already">Already a member? </span> Sign In</p></router-link> -->
              <router-link to="/"><p class="Sign-In">Sign In</p></router-link>
            </div>
          </div>
          <br />
          <br />
          <!-- <br /> -->
          <div>
            <button class="log-in" v-on:click.prevent="signUpAndValidate">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      signUp: false,
      loading: false,
      fName: '',
      sName: '',
      email: '',
      password: '',
      city: '',
      sAddress: '',
      pCode: ''

    }
  },
  methods: {
    signUpAndValidate () {
      this.loading = true
      // this.splitDOB();
      // if (this.formValidity()) {
      //   this.validityCheck(false, this.formValidity())
      //   return
      // }
      if (this.email === '') {
        this.$toasted.error('First Enter your Email')
        return
      }
      if (this.fName === '') {
        this.$toasted.error('First Enter your First Name')
        return
      }
      if (this.sName === '') {
        this.$toasted.error('First Enter your Last Name')
        return
      }
      if (this.password === '') {
        this.$toasted.error('First Enter your Password')
        return
      }
      if (this.city === '') {
        this.$toasted.error('First Enter your City')
        return
      }
      if (this.pCode === '') {
        this.$toasted.error('First Enter your Postal Code')
        return
      }
      if (this.sAddress === '') {
        this.$toasted.error('First Enter your Address')
        return
      }
      this.$http
        .post(process.env.VUE_APP_SERVICE_URL + '/api/auth/signup', {
        // .post('http://api.haideryaqoob.com/api/auth/signup', {
          fName: this.fName,
          sName: this.sName,
          email: this.email,
          sAddress: this.sAddress,
          password: this.password,
          roles: ['user'],
          city: this.city,
          pCode: this.pCode
        })
        .then((response) => {
          // alert("corect");
          // this.loading = false

          if ('!message' in response.data) {
            // this.validityCheck(false, "Username already exists.");
            this.$toasted.error('User already exist')
            console.log('already', response)
          } else {
            this.$toasted.success('You are Successfully Signed Up Now you Sign In')
            // this.$router.push('/SignUp')
            console.log('success', response)
          }
          console.log('response', response)
        })
        .catch((error) => {
          // error;
          // this.validityCheck(false, 'Error in Sign Up')
          console.log('error', error)
          alert('error')
        })
    }
  }
}
</script>

<style scoped>
#top-div {
  margin: -20px;
  padding: 0;
  /* height: 100vh; */
  height: 120vh;
  background-color: #eee;
  color: rgb(68, 68, 68);
  font-family: Arial, Helvetica, sans-serif;
}

#main-div {
  border-radius: 3px;
  width: 700px;
  margin: 60px auto;
  background: rgb(255, 255, 255);
  margin: -50px auto;
}

.second-div {
  border-radius: 3px;
  box-shadow: 0px 0px 0px 1px #e4e4e4;
  text-align: center;
  width: 700px;
  height: 820px;
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
  max-height: 170px;
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
  font-size: 30px;
  color: #000;
  font-family: fantasy;
}

.sign-up-sub {
  font-size: 16px;
  font-weight: bold;
  margin-top: -5px;
}

.input-fel-full {
  width: 510px;
  border: none;
  padding-bottom: 7px;
  border-bottom: 2px solid rgb(163, 163, 163);
  /* for moving of feild */
  transition-property: width;
  transition-duration: 1s;
  /* transition-delay: 1s; */
  display: inline-block;
}

.input-fel-full:hover {
  border-bottom: 2px solid rgb(11, 2, 126);
  /* for moving of feild */
  width: 490px;
}

.input-fel-full:focus {
  outline: none;
  border: none;
  border-bottom: 2px solid rgb(11, 2, 126);
}

.input-fel {
  width: 225px;
  border: none;
  margin-right: -70px;
  padding-bottom: 7px;
  border-bottom: 2px solid rgb(163, 163, 163);
  /* for moving of feild */
  transition-property: width;
  transition-duration: 1s;
  /* transition-delay: 1s; */
  display: inline-block;
}

.input-fel:hover {
  border-bottom: 2px solid rgb(11, 2, 126);
  /* for moving of feild */
  width: 250px;
}

.input-fel:focus {
  outline: none;
  border: none;
  border-bottom: 2px solid rgb(11, 2, 126);
}

.input-fell {
  width: 225px;
  border: none;
  margin-right: 70px;
  padding-bottom: 7px;
  border-bottom: 2px solid rgb(163, 163, 163);
  /* for moving of feild */
  transition-property: width;
  transition-duration: 1s;
  /* transition-delay: 1s; */
  display: inline-block;
}

.input-fell:hover {
  border-bottom: 2px solid rgb(11, 2, 126);
  /* for moving of feild */
  width: 250px;
}

.input-fell:focus {
  outline: none;
  border: none;
  border-bottom: 2px solid rgb(11, 2, 126);
}

.end-two-links {
  margin-top: 13px;
}

.forgot-pass {
  font-size: 10px;
  margin-left: 65px;
  color: rgb(74, 0, 192);
  display: inline-block;
}

.Sign-In {
  font-size: 15px;
  margin-right: 450px;
  color: rgb(74, 0, 192);
  display: inline-block;
  /* text-decoration: underline; */
}

.Sign-In-already{
  font-size: 19px;
  color: rgb(51, 51, 51);
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

.log-in:hover {
  background-color: rgb(231, 231, 231);
  color: #000;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  border: 1px solid rgb(185, 185, 185);
}

@media screen and (max-width:767px) {
.input-fell {
  margin-right: 0px;
  display: inline-block;
}
.input-fel {
  margin-right: 30px;
  display: inline-block;
}
}
@media screen and (max-width:700px) {
  #main-div {
  width: 600px;
}

.second-div {
  width: 600px;
  /* height: auto; */
}
}
@media screen and (max-width:700px) {
  #main-div {
  width: 560px;
}

.second-div {
  width: 560px;
}
}
@media screen and (max-width:575px) {
#main-div {
  width: 500px;
}

.second-div {
  width: 500px;
}
.input-fel-full {
  width: 350px;
}
.input-fel {
  width: 150px;
  margin-right: -50px;
}
.input-fell {
  width: 150px;
  margin-right: 50px;
}
.Sign-In {
  margin-right: 300px;
}
}
@media screen and (max-width:485px) {
#main-div {
  width: 440px;
}

.second-div {
  width: 440px;
}
.input-fel-full {
  width: 320px;
}
.input-fel {
  width: 120px;
  margin-right: -25px;
}
.input-fell {
  width: 120px;
  margin-right: 20px;
  font-size: 14px;
}
.Sign-In {
  margin-right: 250px;
}
}
@media screen and (max-width:425px) {
#main-div {
  width: 360px;
  height: 1050px;
}

.second-div {
  width: 360px;
  height: 1050px;
}
.input-fel-full {
  width: 280px;
}
.input-fel {
  width: 280px;
  margin-right: 0px;
}
.input-fell {
  width: 280px;
  margin-right: 0px;
  font-size: 14px;
  margin-top: 30px;
}
.Sign-In {
  margin-right: 220px;
}
}
</style>
