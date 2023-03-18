<template>
  <div>
    <p class="footer">All rights reserved. © @EMJCREATES 2023</p>
  </div>
</template>

<script>
export default {
  name: "FooterComponents",
};
</script>

<style scoped>
.footer {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: right;
  margin: 0%;
  font-size: 10px;
  color: #000;
  padding: 170px;
}

@media screen and (max-width: 768px) {
    .footer{
        font-size: 10px;
        padding: 90px;
    }
}
</style>