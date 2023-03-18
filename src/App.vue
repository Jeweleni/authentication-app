<template>

  <RouterView />
  <RouterLink />
   <p class="footer">
    @EMJCREATES AltSchool 3rd semester exam 2023
  </p>

   
</template>

<script>
import { RouterView } from "vue-router";
import { RouterLink } from "vue-router";

export default {
  name: "App",
  components: {
    RouterView,
    RouterLink,
  },
  mounted() {
    this.$store.getters("auth/intializeState");
  },
};
</script>

<style scoped>
@import url("https://fonts.cdnfonts.com/css/roboto");

#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0%;
}

</style>
