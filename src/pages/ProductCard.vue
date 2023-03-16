<template>
<NavBar/>
    <div>
        <h1>This is the product page</h1>
        
        <div class="product">
            <div class="product-image">
                <img :src="product.image" />
            </div>
            <div class="product-info">
                <h1>{{product.name}}</h1>
                <p>{{product.description}}</p>
                <p>{{product.price}}</p>
                <button class="btn btn-primary" @click="addToCart">Add to Cart</button>
            </div>
        </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
    name: "ProductPage",
    components: {
        NavBar,
    },
    data() {
        return {
            product: {
                id: "Product ID",
                tittle: "Product Name",
                brand: "Product Brand",
                image: "https://images.unsplash.com/photo-1611831924381-8b1b2f1b1f1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                description: "Product Description",
                price: "Product Price",
                rating: "Product Rating"
            }
        }
    },
    methods: {
        addToCart() {
            this.$store.commit("cart/addToCart", this.product);
            alert("Product added to cart");
        }
    }
}
</script>

<style scoped>

</style>