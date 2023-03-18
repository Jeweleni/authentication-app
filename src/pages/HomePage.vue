<template>
  <div class="home">
    <NavBar />
    <div class="main">
      <h2 class="text">
        Show the world <br />
        the digital you
      </h2>
      <button>
        <a href="/products">View Products</a>
      </button>
    </div>
     <p class="footer">
    @EMJCREATES AltSchool 3rd semester exam 2023
  </p>
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
.footer{
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
    max-width: 100%;
    width: 100%;
    height: 100vh;
  }
 h2{
    font-size: 20px;
    padding-top: 150px;
    padding-left: 70px;
    font-family: "Roboto", sans-serif;
    width: 70%;
 }
  .text {
    font-size: x-small;
    padding-top: 150px;
    padding-left: 80px;
    font-family: "Roboto", sans-serif;
    width: 70%;
  }
  
  .main button {

    margin-left: 40px;
    background-color: rgb(42, 106, 45);
    color: white;
    border-radius: 10px;
    border: none;
  }
  /* .footer{
      padding-top: 400px;
  } */
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
  .footer{
      padding-top: 360px;
  }
}
</style>
