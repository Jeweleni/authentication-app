<template>
  <nav>
    <div>
      <h1 class="logo">
        <router-link to="/">EMJCREATES</router-link>
      </h1>
    </div>
    <ul class="navlinks">
      <router-link to="/loginpage">Login</router-link>
      <router-link to="/signup">Register</router-link>
      <router-link to="/productpage">Products</router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding: 0 2rem;
}

.logo {
  font-size: 1.5rem;
  font-style: italic;
  color: rgb(177, 153, 153);
}
.navlinks {
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  width: 20rem;

}

/* media queries */
@media (max-width: 768px) {
  .navlinks {
    width: 100%;
  }
}
</style>
