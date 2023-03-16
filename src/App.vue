<template>

<router-view/>

</template>

<script>
import {RouterView} from 'vue-router'



export default {
  name: 'App',
  components: {
    RouterView,

  }

  
}
</script>

<style scoped>
@import url('https://fonts.cdnfonts.com/css/roboto');
#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}
</style>
