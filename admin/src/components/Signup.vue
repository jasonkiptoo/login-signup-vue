<template>
  <div class="container-login">
    <img
      src="data:image/png;base64,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"
      alt=""
      class="logo"
    />
    <h2 class="title">Create an account</h2>
<div class="container-input">
      <input type="text" class="login-input" placeholder="Username" />
    </div>
    <div class="container-input">
      <input type="email" class="login-input" placeholder="Email" />
    </div>
    <div class="container-input">
      <input type="password" class="login-input" placeholder="********" />
    </div>
   

    <div class="container-btn">
      <button class="login-btn">Register Now</button>
    </div>
    <div class="container-btn">
      <button class="register-btn">
        Already Have an account ?<span class="register-button">
          Login Now</span
        >
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-login {
  background-color: #ffffff;
  width: fit-content;
  border: 1px solid rebeccapurple;
  border-radius: 10px;
  padding: 40px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin: 100px auto;
}

.login-input {
  border-radius: 5px;
  margin-top: 10px;
  width: 100%;
  height: 30px;
  border: 1px solid rebeccapurple;
}
.login-btn {
  color: aliceblue;
  background-color: #24a0ed;
  border: none;
  border-radius: 10px;
  margin-top: 10px;
  cursor: pointer;
  width: 100%;
  height: 30px;
}

.register-btn {
  border: none;
  border-radius: 10px;
  margin-top: 10px;
  cursor: pointer;
  width: 100%;
  height: 30px;
  background: transparent;
}
.register-button {
  color: blue;
}
.forgotpassword-btn {
  background-color: transparent;
  border: none;
  cursor: pointer;
}
.register-button:hover {
  color: red;
}

/* responsive */
/* @media only screen and (max-width: 600px) {
  .container-login {
  background-color: #ffffff;
  width: fit-content;
  border: 1px solid rebeccapurple;
  border-radius: 10px;
  padding: 10px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin: 100px auto;

}
} */
</style>
