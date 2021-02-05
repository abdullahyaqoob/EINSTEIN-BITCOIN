<template>
  <div class="main-full-div">
    <div class="container">
      <!-- <div class="top-black"></div> -->
      <div>
        <div class="panel panel-default">
          <div class="panel-body">
            <div class="text-center">
              <div>
                <h3><img src="@/assets/logo2.png" class="logo-class" /></h3>
              </div>
              <h2 class="heading" style="font-weight:550;font-size:32px;">Reset Password?</h2>
              <p class="sub-heading" style="font-weight:bold;margin-top:8px;font-size:14px;">Type your new password here.</p>
              <br />
              <div class="panel-body">
                <form
                  id="register-form"
                  role="form"
                  autocomplete="off"
                  class="form"
                  @submit.prevent="handleSubmit"
                >
                  <div class="form-groupa">
                    <div class="form-groupa">
                      <label class="inp-label">Password</label><br />
                      <input
                        type="password"
                        class="form-controll"
                        placeholder="Password"
                        v-model="password1"
                        required
                      />
                    </div>
                    <br />
                    <div class="form-groupa">
                      <label class="inp-label">Password Confirm</label><br />
                      <input
                        type="password"
                        class="form-controll"
                        placeholder="Password Confirm"
                        v-model="password2"
                        required
                      />
                    </div>
                    <div>
                      <router-link to="/"><p class="forgot-passw"> SIGN IN!</p></router-link>
                    </div>
                  </div>
                  <br />
                  <br />
                  <div class="form-group" v-if="!loading">
                    <input
                      name="recover-submit"
                      class="btn-control"
                      value="Reset Password"
                      type="submit"
                    />
                  </div>
                  <div class="form-group" v-else>
                    <button class="btn-control">
                      <img src="@/assets/loading.gif" style="vertical-align: sub; width: 17px;" />
                      Loading...
                    </button>
                  </div>

                  <input type="hidden" class="hide" name="token" id="token" value="" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      password1: '',
      password2: '',
      email: '',
      token: ''
    }
  },
  methods: {
    handleSubmit () {
      if (this.password1.length <= 8) {
        this.$toasted.error('Password must be grater than 8 characters!')
        return
      }
      if (this.password2.length <= 8) {
        this.$toasted.error('Password must be grater than 8 characters!')
        return
      }
      if (this.password1 !== this.password2) {
        this.$toasted.error('Both passwords not same')
        return
      }
      this.loading = true
      this.$http
        // .post("http://192.168.43.227:8085/merchant/forgetPassword/changePassword" + "?" + this.email + this.token , {
        .post(process.env.VUE_APP_SERVICE_URL + '/user/forgetPassword/changePassword',
          {
            email: this.$route.query.email,
            token: this.$route.query.token,
            password1: this.password1,
            password2: this.password2
          }
        )
        .then((response) => {
          this.loading = false
          console.log('correct', response)
          this.$toasted.success('Your Password is Successfully Changed')
          // this.$router.push("/SignUp")
        })
        .catch((error) => {
          this.loading = false
          console.log('error:', error)
          this.$toasted.error('error')
        })
    }
  }
}
</script>

<style scoped>
.main-full-div{
  height: 90vh;
}
.container {
  /* border: 1px solid rgb(168, 168, 168); */
  text-align: center;
  width: 30%;
  height: auto;
  margin: 4% auto;
  background: rgb(255, 255, 255);
  /* box-shadow: 0px 3px 20px 25px #e4e4e4; */
  border-radius: 10px;
}
.heading {
  font-size: 35px;
  margin-bottom: -4px;
  font-weight: normal;
}
.sub-heading {
  font-size: 15px;
  margin-top: 8px;
}
.input-group-addon {
  min-width: 33px;
  min-height: 33px;
  position: relative;
  top: 9px;
  right: 3px;
}
.form-control {
  width: 190px;
  height: 27px;
  border: none;
  border: 1px solid rgb(168, 168, 168);
  padding-left: 20px;
  border-radius: 5px;
  color: rgb(117, 117, 117);
  font-weight: bold;
}
.form-control:focus {
  outline: none;
  border: 2px solid rgb(61, 61, 255);
}
.btn-control {
  position: relative;
  left: 2px;
  /* width: 252px;
  height: 42px; */
  padding: 6px 23px;
  border: none;
  background-color: rgb(46, 5, 93);
  color: white;
  border-radius: 5px;
  font-size: 19px;
  margin-top: -5px;
  margin-bottom: 25px;
  cursor: pointer;
}
.top-black {
  border-radius: 4px;
  background: black;
  border: 1px solid black;
  height: 10px;
  width: 107%;
  margin-left: -14px;
}

.form-groupa {
  text-align: start;
  margin-left: 25px;
}
.logo-class {
  max-height: 130px;
  width: 230px;
  margin-top: 20px;
}

.inp-label {
  font-size: 17px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.form-controll {
  width: 87%;
  height: 30px;
  padding-left: 10px;
  margin-top: -3px;
  border-radius: 4px;
  border: none;
  border: 1px solid rgb(209, 209, 209);
  font-size: 14px;
  background-color: #ebeae9;
}
.form-controll:focus {
  outline: none;
  border: 2px solid #44b436;
  border-radius: 5px;
}

.forgot-passw{
  font-size: 10px;
  margin-top: 5px;
  float:right;
  margin-right: 60px;
  color: rgb(74, 0, 192);
  display: inline-block;
}

@media screen and (max-width:850px) {
.top-black {
  width: 108%;
  margin-left: -14px;
}
.container {
  /* border: 1px solid rgb(168, 168, 168); */
  width: 50%;
}
}

@media screen and (max-width:625px) {
.container {
  /* border: 1px solid rgb(168, 168, 168); */
  width: 70%;
}
}

@media screen and (max-width:480px) {
.container {
  /* border: 1px solid rgb(168, 168, 168); */
  width: 90%;
}
}

@media screen and (max-width:400px) {
.container {
  /* border: 1px solid rgb(168, 168, 168); */
  width: 100%;
}
}

@media screen and (max-width:350px) {
  .main-full-div {
  height: 98vh;
}
}
</style>
