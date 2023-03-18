<template>
  <NavBar />
  <!-- <div>
    <div>
      <img :src="product.thumbnail" alt="product" />
      <div>
        <h1>
          {{ product.title }}
        </h1>

        <p>
          <span>
            <font-awesome-icon icon="fa-solid fa-star" />
          </span>
          {{ product.rating }}
        </p>
        <div>
          <h2>Description:</h2>
          <p>{{ product.description }}</p>
        </div>
        <div>
          <h2>Category:</h2>
          <p>
            {{ product.category }}
          </p>
        </div>
        <div>
          <h2>Price:</h2>
          <p>${{ product.price }}</p>
        </div>
        <div>
          <router-link
            :to="{
              name: 'product-images',
              // params: { id: product.id },
            }"
          >
            <h2>Show Other Images</h2>
          </router-link>
          <hr />
        </div>
      </div>
    </div>
  </div> -->
  <div class="main">
    <div class="left">
      <img :src="img" />
    </div>
    <div class="right">
      <div class="brand">
        <h1>{{ brand }}</h1>
        <h2>{{ category }}</h2>
      </div>
      <div class="title">
        <h1>{{ title }}</h1>
        <h2>{{ price }}</h2>
      </div>
      <div class="rating">
        <h1>{{ rating }}</h1>
      </div>
      <div class="description">
        <h1>{{ description }}</h1>
      </div>
      <div class="goBack"  @click="goBack">
   Go Back
      </div>
  
    </div>
    <footer-components />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
// import { useRoute } from "vue-router";
import axios from "axios";
import FooterComponents from '@/components/FooterComponents.vue';
export default {
  name: "ProductDetails",
  components: {
    NavBar,
    FooterComponents,
  },

created() {
    this.getProducts();
  },
  data() {
    return {
      products: [],
      img: "",
      brand: "",
      category: "",
      title: "",
      price: "",
      rating: "",
      description: "",
    };
  },
  methods: {
    async getProducts() {
      try {
        const parameter = this.$route.params.id;
        console.log(parameter)
        const res = await axios.get(
          `https://dummyjson.com/products/${parameter}`
        );
        console.log(res.data);
        this.products = res.data;
        this.img = res.data.images[0];
        this.brand = res.data.brand;
        this.category = res.data.category;
        this.title = res.data.title;
        this.price = `$ ${res.data.price}`;
        this.rating = `Rating: ${res.data.rating}`;
        this.description = res.data.description;
      } catch (err) {
        console.log(err);
      }
    },
    goBack() {
      this.$router.push("/products");
    },
  },

  // data() {
  //   return {
  //     product: {},
  //   };
  // },
  // methods: {
  //   fetchProduct() {
  //     const route = useRoute();
  //     const { id } = route.params;
  //     const endpoint = `https://dummyjson.com/products/${id}`;
  //     axios
  //       .get(endpoint)
  //       .then((res) => {
  //         this.product = res.data;
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   },
  // },
  // mounted() {
  //   console.log(this.$route.params.id);
  //   this.fetchProduct();
  // },
};
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
}
.left {
  width: 50%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.right {
  width: 50%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
h1 {
  width: 100%;
  height: 10%;
  display: flex;
  font-size: 15;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h2{
  width: 100%;
  height: 10%;
  display: flex;
  font-size: 15;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title {
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.rating {
   display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: 300;
  color: #666;
}
.description {
font-size: 15px;
  font-weight: 300;
  margin-top: 50px;
  margin-bottom: 10px;
  color: rgb(0, 0, 0);
}
.goBack{
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;
  color: #fff;
  cursor: pointer;
}

</style>