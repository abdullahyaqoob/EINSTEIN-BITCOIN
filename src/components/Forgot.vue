<template>
  <div class="main-full-div">
    <navbar />
    <div class="container">
      <!-- <div class="top-black"></div> -->
      <br />
      <div>
        <div class="panel panel-default">
          <div class="panel-body">
            <div class="text-center">
              <div>
                <h3>
                  <img src="@/assets/logo2.png" class="logo-class" />
                </h3>
              </div>
              <h2 class="heading" style="font-weight:550;font-size:30px;margin-top:20px">Reset Login Password</h2>
              <p class="sub-heading" style="font-weight:bold;margin-top:8px;font-size:14px;">You can reset your password here.</p><br>
              <div class="panel-body">
                <form
                  id="register-form"
                  role="form"
                  autocomplete="off"
                  class="form"
                  @submit.prevent="handleSubmit"
                >
                  <div class="form-group">
                    <div class="input-group">
                      <span class="input-group-addon"
                        ><i style="position:absolute;margin-top:-12px;margin-right:-19px" class="fas fa-envelope fa-2x evvelope-class"></i
                      ></span>
                      <!-- <input
                        id="email"
                        name="email"
                        placeholder="Email address"
                        class="form-control"
                        type="email"
                        v-model="email"
                      /> -->
                    </div>
                  </div>
                  <div style="margin-left:20px;margin-bottom:-15px">
                    <input class="email-add" type="email" placeholder="Enter your email address" v-model="email">
                  </div>
                  <br />
                  <!-------------------------------------     Recaptcha      -------------------------------------->
                  <!-- <div class="recaptcha">
                    <div class="col-sm-10">
                    <vue-recaptcha
                      class="recaptcha"
                      sitekey="6Ld_4y4aAAAAADCsgfTbXC7qkhL0MqxIBQBCv28t"
                      required
                    ></vue-recaptcha>
                    </div>
                  </div> -->
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
                    <button class="btn-control-loader">
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
      loading: false,
      email: ''
    }
  },
  methods: {
    handleSubmit () {
      if (this.email === '') {
        this.$toasted.error('First enter your email.')
        return
      }
      this.loading = true
      this.$http
        .post(process.env.VUE_APP_SERVICE_URL + '/user/forgetPassword', {
          email: this.email
        })
        .then((response) => {
          this.loading = false
          console.log('correct', response)
          this.$toasted.success('Email is successfully sent. Please check your email.')
          // this.$router.push("/Resetpass")
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
.main-full-div {
  height: 100vh;
}
.container {
  /* border: 1px solid rgb(168, 168, 168); */
  text-align: center;
  width: 30%;
  height: auto;
  margin: 4% auto;
  background: rgb(255, 255, 255);
  border-radius: 3px;
}
.top-black {
  border-radius: 4px;
  background: black;
  border: 1px solid black;
  height: 10px;
  /* width: 500px; */
  width: 106.2%;
  margin-left: -14px;
}
.heading {
  font-size: 35px;
  margin-bottom: -4px;
  font-weight: normal;
}
.sub-heading {
  margin-top: 10px;
  font-size: 15px;
}
.sign-up-sub {
  font-size: 16px;
  font-weight: bold;
  margin-top: -5px;
}

.logo-class {
  /* max-height: 170px; */
  max-height: 130px;
  width: 230px;
  margin-top: 0px;
  /* margin-bottom: -90px; */
  height: 200px;
}
.input-group-addon {
  position: relative;
  top: 9px;
  left: 40px;
}

.evvelope-class {
  position: relative;
  right: -90px;
  /* top: -2px; */
}
.form-control {
  margin: 10px auto;
  max-width: 220px;
  height: 32px;
  border: none;
  border: 2px solid rgb(168, 168, 168);
  /* padding-left: 20px; */
  border-radius: 15px;
  color: rgb(117, 117, 117);
  font-weight: bold;
  font-size: 14px;
  /* for moving of feild */
  transition-property: max-width;
  transition-duration: 0.4s;
  /* transition-delay: 1s; */
}
.form-control:hover {
  border: 2px solid rgb(11, 2, 126);
  /* for moving of feild */
  max-width: 210px;
}
.form-control:focus {
  outline: none;
  border: 2px solid #4b127a;
}

.email-add{
  padding: 2px 40px;
  padding-left: 2px;
  margin-left: 10px;
  font-size: 15px;
  border: none;
  border-bottom: 2px solid rgb(108, 27, 184);
  /* border-left: 2px solid rgb(241, 241, 241); */
  position: relative;
  top: -20px;
}

.email-add:focus {
  outline: none;
}

.recaptcha {
  /* margin: 0 auto; */
  /* position: relative; */
  /* left: 45px; */
  /* left: 10%; */
  margin: 10px 35px;
}

.btn-control {
  position: relative;
  left: 2px;
  padding: 6px 23px;
  border: none;
  background-color: rgb(40, 0, 93);
  color: white;
  border-radius: 5px;
  font-size: 19px;
  /* margin-top: -5px; */
  margin-top: 10px;
  margin-bottom: 35px;
  cursor: pointer;
}

.btn-control-loader {
  position: relative;
  left: 2px;
  padding: 6px 23px;
  border: none;
  background-color: rgb(40, 0, 93);
  color: white;
  border-radius: 5px;
  font-size: 19px;
  /* margin-top: -5px; */
  margin-top: 10px;
  margin-bottom: 35px;
  cursor: pointer;
}

.btn-control:hover {
  background-color: #eee;
  color: black;
  cursor: pointer;
  border: 1px solid rgb(160, 160, 160);
}

@media screen and (max-width:1812px) {
.evvelope-class {
  position: relative;
  right: -80px;
}
.recaptcha {
  margin: 10px 35px;
}
}
@media screen and (min-width:1746px) {
.evvelope-class {
  position: relative;
  right: -100px;
}
.recaptcha {
  margin: 10px 50px;
}
}
@media screen and (max-width:1745px) {
.evvelope-class {
  position: relative;
  right: -70px;
}
.recaptcha {
  margin: 10px 35px;
}
}
@media screen and (max-width:1684px) {
.evvelope-class {
  position: relative;
  right: -60px;
}
.recaptcha {
  margin: 10px 30px;
}
}
@media screen and (max-width:1615px) {
.evvelope-class {
  right: -50px;
}
.recaptcha {
  margin: 10px 20px;
}
}
@media screen and (max-width:1615px) {
.evvelope-class {
  right: -40px;
}
}
@media screen and (max-width:1482px) {
.evvelope-class {
  right: -30px;
}
.recaptcha {
  margin: 10px 15px;
}
}
@media screen and (max-width:1415px) {
.evvelope-class {
  right: -20px;
}
.recaptcha {
  margin: 10px 10px;
}
}
@media screen and (max-width:1350px) {
.evvelope-class {
  right: -10px;
}
.recaptcha {
  margin: 10px 8px;
}
}
@media screen and (max-width:1274px) {
.evvelope-class {
  right: 0px;
}
.recaptcha {
  margin: 10px 5px;
}
}
@media screen and (max-width:1214px) {
.evvelope-class {
  right: 5px;
}
.recaptcha {
  margin: 10px 0px;
}
}
@media screen and (max-width:1178px) {
.evvelope-class {
  right: 10px;
}
.recaptcha {
  margin: 10px -3px;
}
}
@media screen and (max-width:1146px) {
.evvelope-class {
  right: 18px;
}
.recaptcha {
  margin: 10px -7px;
}
}
@media screen and (max-width:1085px) {
.evvelope-class {
  right: 25px;
}
.recaptcha {
  margin: 10px -11px;
}
}
@media screen and (max-width:850px) {
  .container {
  width: 60%;
}
.evvelope-class {
  right: -65px;
}
.recaptcha {
  margin: 10px 37px;
}
}
@media screen and (max-width:850px) {
.evvelope-class {
  right: -60px;
}
.recaptcha {
  margin: 10px 33px;
}
}
@media screen and (max-width:802px) {
.evvelope-class {
  right: -50px;
}
.recaptcha {
  margin: 10px 26px;
}
}
@media screen and (max-width:770px) {
.evvelope-class {
  right: -40px;
}
.recaptcha {
  margin: 10px 16px;
}
.top-black {
  margin-left: -12px;
}
}
@media screen and (max-width:740px) {
.evvelope-class {
  right: -30px;
}
.recaptcha {
  margin: 10px 10px;
}
}
@media screen and (max-width:700px) {
.evvelope-class {
  right: -20px;
}
}
@media screen and (max-width:670px) {
.evvelope-class {
  right: -10px;
}
}
@media screen and (max-width:635px) {
.evvelope-class {
  right: 0px;
}
.recaptcha {
  margin: 10px 0px;
}
.top-black {
  margin-left: -10px;
}
}
@media screen and (max-width:450px) {
.container {
  width: 85%;
}
.evvelope-class {
  right: 10px;
}
.recaptcha {
  margin: 10px 0px;
}
}
@media screen and (max-width:400px) {
.container {
  margin: 0% auto;
}
.evvelope-class {
  right: 20px;
}
.recaptcha {
  margin: 10px -7px;
}
}
@media screen and (max-width:380px) {
.evvelope-class {
  right: 28px;
}
.recaptcha {
  margin: 10px -12px;
}
}
@media screen and (max-width:380px) {
.evvelope-class {
  right: 30px;
}
.recaptcha {
  margin: 10px -12px;
}
.heading {
  font-size: 32px;
}
}
@media screen and (max-width:360px) {
  .container {
  width: 90%;
  margin: 0% auto;
}
.evvelope-class {
  right: 25px;
}
.recaptcha {
  margin: 10px -11px;
}
.main-full-div {
  height: 100vh;
}
}
</style>
