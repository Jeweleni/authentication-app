<template>
  <div class="main">
    <div class="cards" v-for="product in products" :key="product.id">
      <img :src="product.images[0]" alt="" />
      <div>
        <div class="tittle">
          <h1>
            {{ product.title }}
          </h1>
          <font-awesome-icon icon="fa-solid fa-bookmark" />
        </div>
        <div>
          <p class="description">
            {{ product.description }}
          </p>
        </div>
        <!-- reviews -->
        <div>
          <font-awesome-icon icon="fa-solid fa-star" />
          <p class="rating">
            {{ product.rating }}
            <span>(1112 Reviews)</span>
          </p>
        </div>
        <!-- price and Category -->
      </div>
      <div class="price">
        <p>$ {{ product.price }}</p>
        <p>{{ product.category }}</p>
      </div>
      <div class="more">
        <button>
          <router-link :to="{ name: 'product', params: { id: product.id } }">
            View Product
          </router-link>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "ProductCard",
  data() {
    return {
      products: [],
    };
  },
  async created() {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      this.products = response.data.products.slice(0, 12);
      console.log(this.products);
    } catch (error) {
      console.log(error);
    }
  },
  // name: "ProductCard",
  // props: {
  //   product: {
  //     type: Object,
  //     required: true,
  //   },
  // },
  // data() {
  //   return {};
  // },
  // methods: {},
};
</script>

<style scoped>
.main {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
}
.cards {
  width: 300px;
  height: 400px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px #ccc;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}
.cards img {
  width: 100%;
  height: 170px;
  object-fit: cover;
}
.tittle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.tittle h1 {
  font-size: 20px;
  font-weight: 500;
  color: rgb(0, 0, 0);
  font-weight: bolder;
}
.description {
  font-size: 15px;
  font-weight: 300;
  color: rgb(0, 0, 0);
}
.rating {
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: 300;
  color: rgb(152, 41, 41);
}
.rating span {
  font-size: 12px;
  font-weight: 300;
  color: rgb(152, 41, 41);
}
.price {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.price p {
  font-size: 15px;
  font-weight: 300;
  color: rgb(0, 0, 0);
}
.more {
  width: 100%;
  display: flex;
  justify-content: center;
}
.more button {
  width: 100%;
  height: 40px;
  background-color: #2a6a2d;
  color: white;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}
.more button a {
  text-decoration: none;
  color: white;
}
</style>
