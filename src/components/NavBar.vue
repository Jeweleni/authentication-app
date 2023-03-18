<template>
  <nav>
    <h1>EMJ<span>CREATES</span></h1>

    <ul class="navlinks">
      <router-link to="/">Home</router-link>
      <li class="navlinks" v-if="isLoggedIn !== true">
        <router-link to="/login">Login</router-link>
      </li>
      <li class="navlinks">
        <router-link to="/signup">Register</router-link>
      </li>
      <li class="navlinks" v-if="isLoggedIn === true">
        <router-link to="/products">Products</router-link>
      </li>
      <li v-if="isLoggedIn == true" @click="onLogout()" class="logout">
        <a href="/">Logout</a>
      </li>
      
    </ul>
  </nav>
</template>

<script>
import { mapState } from "vuex";
import { useToast } from "vue-toastification";
// import { Slide } from "vue-burger-menu";
export default {
  name: "NavBar",
  data() {},
  methods: {
    onLogout() {
      const toast = useToast();
      this.$store.commit("auth/logout");
      this.$router.push("/");
      toast.success("Logout Successful");
    },
  },
  computed: {
    ...mapState("auth", {
      isLoggedIn: (state) => state.isLoggedIn,
    }),
  },
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  text-decoration: none;
  padding: 0 2rem;
  background-color: rgb(42, 106, 45);
  overflow: hidden;
}

h1 {
  font-size: 1.5rem;
  font-style: italic;
  text-decoration: none;
  color: white;
  text-align: center;
}
.navlinks {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style: none;
  gap: 10px;
  text-decoration: none;
}

.logout {
  background-color: rgb(42, 106, 45);
  color: white;
  gap: 10px;
  border: none;
  flex-direction: row;
  justify-content: space-between;
}

.logout a {
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.logout a:hover {
  background-color: #fff;
  color: rgb(79, 186, 84);
}
.navlinks a {
  text-decoration: none;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}
.navlinks a:hover {
  background-color: #fff;
  color: rgb(79, 186, 84);
}

/* media queries */
@media (max-width: 768px) {
  nav {
    padding-left: 0 0.5rem;
  }
  .navlinks {
    display: flex;
    flex-direction: row;
    gap: 1px;
  }

  .logout {
    flex-direction: row;
    gap: 1px;
  }

  h1 {
    font-size: 1rem;
  }

  .navlinks a {
    font-size: 0.8rem;
    padding: 0 0.5rem;
  }
}
</style>
