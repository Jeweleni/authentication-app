<template>
  <div class="home">
    <NavBar />
    <div class="main">
      <h2 class="text">
        Show the world <br />
        the digital you
      </h2>
      <button>
        <a href="/productpage">View Products</a></button>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
export default {
  name: "HomePage",
  components: {
    NavBar,
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
  margin-left: 100px;
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
  font-size: 50px;
  text-align: left;
  padding-top: 150px;
  padding-left: 100px;
}

@media screen and (max-width: 768px) {
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
    font-size: 45px;
    padding-top: 200px;
    padding-left: 50px;
  }
}
</style>
