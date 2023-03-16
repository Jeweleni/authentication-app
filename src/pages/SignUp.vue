<template>
  <div>
    <h2>Sign up to create your account</h2>
    <form>
      <div class="signup">
        <label for="name">Name</label>
        <input type="name" required id="name" v-model="name" />
      </div>
      <div class="signup">
        <label for="email">Email</label>
        <input type="email" required id="email" v-model="email" />
      </div>
      <div class="signup">
        <label for="password">Password</label>
        <input type="password" required id="password" v-model="password" />
      </div>
      <div class="signup">
        <label for="confirmPassword">Confirm Password</label>
        <input
          type="confirmPassword"
          required
          id="confirmPassword"
          v-model="confirmPassword"
        />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },

  methods: {
    async signUp() {
      let result = await axios.post("http://localhost:3000/users", {
        name: this.name,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
      });

      console.warn(result);
      if (result.status == 201) {
        localStorage.setItem("user-info", JSON.stringify(result.data))
        this.$router.push("/productpage");
      }
    },
  },
  mounted()
  {
    let user = localStorage.getItem("user-info");
    if(user)
    {
      this.$router.push("/productpage");
    }
  }
};
</script>

<style>
.signup input {
  width: 250px;
  height: 40px;
  padding-left: 20px;
  display: block;
  border: 1px solid black;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 30px;
}

button {
  width: 250px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 30px;
  backdrop-filter: blue;
  border: 1px solid black;
  cursor: pointer;
}
</style>
