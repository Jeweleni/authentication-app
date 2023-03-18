<template>
  <NavBar />
  <RouterLink />
  <div class="main">
    <div class="product">
      <!-- <font-awesome-icon icon="fa-solid fa-user-secret" width="30" /> -->
      <div>
        <h1>
          Welcome
          <span class="user"> {{ user.name }}</span>
        </h1>
        <h2 class="text">These are your available products</h2>
      </div>
    </div>
  </div>

  <div>
    <div v-if="loading">
      <p>Loading...</p>
    </div>
    <div v-else>
      <div
        @click="
          () => $router.push({ name: 'product', params: { id: product.id } })
        "
        v-for="product in products"
        :key="product.id"
      >
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import ProductCard from "@/components/ProductCard.vue";
import { RouterLink } from "vue-router";
import { mapState } from "vuex";
// import authenTicatedUser from "../composables/authenTicatedUser";


export default {
  name: "ProductPage",
  components: {
    NavBar,
    ProductCard,
    RouterLink,
  },
  computed: {
    // ...mapState("auth", {
    //   user: (state) => state.user.username,
    // }),

    user() {
      return this.$store.getters["auth/user"]
    },
    ...mapState("products", {
      loading: (state) => state.isLoading,
      products: (state) => state.products.products,
    }),
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {
    this.$store.dispatch("products/getProducts");
    console.log(this.$store.getters["auth/user"]);
  },
};
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: row;
}

img {
  width: 100%;
  height: 100vh;
}
</style>
