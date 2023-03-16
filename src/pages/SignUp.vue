<template>
  <NavBar />
  <div class="main">
    <div class="left">
      <h1>WELCOME!!!</h1>
      <h3>Sign up to create your account</h3>
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
        <button
          type="submit"
          class="btn btn-primary"
          @click="signUp"
          onclick="event.preventDefault();"
        >
          Submit
        </button>
      </form>
      <p class="login">
        Already have an account?
        <router-link to="/login">Login here</router-link>
      </p>
    </div>

    <div class="right">
      <img src="../assets/login.jpeg" />
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "SignUp",
  components: {
    NavBar,
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },

  methods: {
    signUp() {
      this.$store.commit("auth/registerUser", {
        name: this.name,
        // name: this.lname,
        email: this.email,
        password: this.password,
      });
      alert("You have successfully signed up!");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
* {
  font-family: "Roboto", sans-serif;
  overflow: hidden;
}

.main {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 0%;
  gap: 10px;
}

.left {
  width: 50%;
  margin-left: 10%;
}

.right {
  width: 50%;
}

img {
  width: 100%;
  height: 100vh;
  border-radius: 6rem 0 0 2rem;
}

h1 {
  text-align: center;
  margin-top: 50px;
  color: rgb(42, 106, 45);
  font-family: "Roboto", sans-serif;
}
h3 {
  text-align: left;
  margin-top: 30px;
  color: rgb(12, 24, 13);
  font-family: "Roboto", sans-serif;
}


.signup input {
  width: 250px;
  height: 40px;
  /* padding-left: 20px; */
  border: 1px solid black;
  /* margin-right: auto; */
  display: flex;
  /* margin-left: auto; */
  margin-bottom: 30px;
  border-radius: 12px;
}

button {
  width: 250px;
  height: 40px;
  /* padding-left: 20px; */
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 30px;
  border: 1px solid black;
  cursor: pointer;
  border-radius: 12px;
}
.login{
  margin-left: 10%;
  font-family: cursive;
  font-size: 20px;
  margin-top: 10px;
  
}

.login a {
  text-decoration: none;
  color: rgb(42, 106, 45);
}

@media screen and (max-width: 768px) {
  .main {
    flex-direction: column;
  }
  .left {
    width: 100%;
  }

  img {
    display: none;
  }
  .signup input {
    width: 80%;
  }
  button {
    width: 80%;
  }
}
</style>
