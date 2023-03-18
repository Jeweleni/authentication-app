<template>
  <div class="error404">
    <img src="../assets/homepage.jpeg" />
    <h2>Page not found</h2>
    <p>Sorry, the page you are looking for does not exist.</p>
    <button class="error">
      <router-link to="/">Go to homepage</router-link>
    </button>
  </div>
  <footer-components />
</template>

<script>
import FooterComponents from "@/components/FooterComponents.vue";
import { RouterLink } from "vue-router";
export default{
    name: "ErrorPage",
    components: {
        RouterLink,
        FooterComponents,
    },
    data(){
        return{
            error: "Page not found"
        }
    }
}
</script>

<style scoped>
.error404{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}
img{
    width: 60%;
    height: 60%;
    object-fit: cover;
    z-index: -1;
}
h2{
    font-size: 30px;
    color: rgb(0, 0, 0);
    text-align: center;
}
p{
    font-size: 20px;
    color: rgb(0, 0, 0);
    text-align: center;
}
button{
    width: 200px;
    height: 50px;
    margin-left: 100px;
    background-color: rgb(42, 106, 45);
    color: white;
    border-radius: 10px;
    border: none;
    position: relative;
    justify-content: center;
}
button a{
    text-decoration: none;
    color: white;
    text-align: center;
}
.error {
    background-color: rgb(42, 106, 45);
    color: white;
    gap: 10px;
    border: none;
    flex-direction: row;
}
</style>