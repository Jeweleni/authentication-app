<template>
  <div class="home">
    <NavBar />
    <div class="main">
      <h2 class="text">
        Show the world <br />
        the digital you
      </h2>
      <button>
      <router-link to="/login" class="button"> View Products </router-link>
      </button>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import {RouterLink} from "vue-router";
export default {
  name: "HomePage",
  components: {
    NavBar,
    RouterLink,
  },
};
</script>

<style scoped>
.home {
  margin-top: 0%;
  background: url("../assets/homebackground.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: contain;
  max-width: 100%;
  width: 100%;
  height: 100vh;
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 0%;
  gap: 10px;
}

.main button {
  width: 200px;
  height: 50px;
  margin-left: 140px;
  background-color: rgb(42, 106, 45);
  color: white;
  border-radius: 10px;
  border: none;
}

.main button a {
  text-decoration: none;
  color: white;
}

.text {
  color: rgb(0, 0, 0);
  font-size: 70px;
  text-align: left;
  padding-top: 110px;
  padding-left: 140px;
  font-family: "Roboto", sans-serif;
}
.footer {
  color: rgb(0, 0, 0);
  font-size: 20px;
  text-align: left;
  padding-top: 150px;
  font-family: "Roboto", sans-serif;
}
@media screen and (max-width: 768px) {
  .home {
    background: url("../assets/homebackground.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100vh;
  }
  .main {
    display: flex;
    flex-direction: column;
    margin-left: -30px;
    margin-top: -100px;
    gap: 10px;
  }
  .text {
    color: rgb(0, 0, 0);
    font-size: 50px !important;
    padding-top: 200px;
    padding-left: 120px;
    margin: 0%;
  }
  button {
    width: 200px;
    height: 50px;
    margin-left: 120px;
    background-color: rgb(42, 106, 45);
    color: white;
    border-radius: 10px;
    border: none;
  }
}

@media screen and (max-width: 1024px) {
  .home {
    /* background: url("../assets/homebackground.jpg"); */
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    max-width: 100%;
    width: 100%;
    height: 100vh;
  }
  .text {
    font-size: 75px;
    padding-top: 250px;
    padding-left: 120px;
    font-family: "Roboto", sans-serif;
  }
  .main button {
    width: 200px;
    height: 50px;
    margin-left: 120px;
    background-color: rgb(42, 106, 45);
    color: white;
    border-radius: 10px;
    border: none;
  }
  .footer {
    padding-top: 360px;
  }
}
</style>
