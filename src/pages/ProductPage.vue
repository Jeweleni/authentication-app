<template>
    <NavBar/>
    <div>

        <h1>This is the product page</h1>
        
    </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default{
    name: "ProductPage",
    components: {
        NavBar,
    },
    data() {
        return {
            product: {
                name: "Product Name",
                image: "https://images.unsplash.com/photo-1611831924381-8b1b2f1b1f1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                description: "Product Description",
                price: "Product Price"
            }
        }
    },
   
}
</script>