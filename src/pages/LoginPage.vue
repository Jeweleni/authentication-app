<template>
  <NavBar />
  <div class="main">
    <div class="left">
      <h1>Welcome Back</h1>
      <h3>Login to continue</h3>
      <form @submit.prevent="onLogin">
        <div class="login">
          <label for="email">Email</label>
          <input type="email" required id="email" v-model="email" />
        </div>
        <div v-if="error">
          <p class="error">{{ errors.email }}</p>
        </div>
        <div class="login">
          <label for="password">Password</label>
          <input type="password" required id="password" v-model="password" />
        </div>
        <div v-if="errors.password">
          <p class="error">{{ errors.password }}</p>
        </div>
        <button type="submit">
          Submit
        </button>
      </form>
      <p class="signup">
        Don't have an account?
        <router-link to="/signup"> SignUp here</router-link>
      </p>
    </div>

    <div class="right">
      <img src="../assets/login.jpeg" />
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { RouterLink } from "vue-router";
import SignupValidations from "@/utils/SignupValidations.js";
import { useToast } from "vue-toastification";
export default {
  name: "LoginPage",
  components: {
    NavBar,
    RouterLink,
  },
  data() {
    return {
      email: "",
      password: "",
      errors: [],
      user: [],
    };
  },
  methods: {
   onLogin() {
      let validations = new SignupValidations(this.email, this.password);
      const toast = useToast();
      this.errors = validations.checkValidations();
      if (this.errors.length) {
        return false;
      }
      if (
        this.email === this.user.email &&
        this.password === this.user.password
      ) {
        this.$store.commit("auth/login");
        location.reload();
        this.$router.push("/products");
        toast.success("Login Successful");
      } else {
        toast.error("Invalid Credentials");
      }
    },
  },
  mounted() {
    var user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      this.user = user;
    }
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

.login input {
  width: 300px;
  height: 40px;
  /* padding: 5px; */
  border: 1px solid black;
  /* margin-right: auto;
  margin-left: auto; */
  display: flex;
  margin-bottom: 30px;
  border-radius: 12px;
}
button {
  width: 300px;
  height: 40px;
  /* padding: 5px; */
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 30px;
  border: 1px solid black;
  cursor: pointer;
  border-radius: 12px;
}
.signup{
 margin-left: 10%;
  font-family: cursive;
  font-size: 20px;
  margin-top: 0%;
  margin-left: auto;
  margin-right: auto;
}
.signup a {
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
  .login input {
    width: 80%;
  }
  button {
    width: 80%;
  }
}
</style>
