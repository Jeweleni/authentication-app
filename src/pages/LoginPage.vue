<template>
  <div>
    <h1>Login</h1>
    <form>
      <div class="login">
        <label for="email">Email</label>
        <input type="email" required id="email" v-model="email" />
      </div>
      <div class="login">
        <label for="password">Password</label>
        <input type="password" required id="password" v-model="password" />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
};
</script>

<style>
.login input {
  width: 250px;
  height: 40px;
  padding-left: 20px;
  display: block;
  border: 1px solid black;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 30px;
}
button {
  width: 250px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 30px;
  backdrop-filter: blue;
  border: 1px solid black;
  cursor: pointer;
}
</style>
