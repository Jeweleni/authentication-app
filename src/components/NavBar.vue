<template>
  <nav>
    <h1>EMJCREATES</h1>

    <ul class="navlinks">
      <router-link to="/">Home</router-link>
      <router-link to="/loginpage">Login</router-link>
      <router-link to="/signup">Register</router-link>
      <router-link to="/productpage">Products</router-link>
    </ul>
  </nav>
</template>

<script>
// import { Slide } from "vue-burger-menu";
export default {
  name: "NavBar",
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

.navlinks a {
  text-decoration: none;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
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

  h1 {
    font-size: 1rem;
  }

  .navlinks a {
    font-size: 0.8rem;
    padding: 0 0.5rem;
  }
}
</style>
