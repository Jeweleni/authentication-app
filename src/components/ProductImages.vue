// <template lang="">
//   <NavBar />
//   <div>
   
//     <img v-bind="image in images"  :src="images.url" alt="product"   />
//   </div>
// </template>
// <script>
// import NavBar from "@/components/NavBar.vue";
// import { useRoute} from "vue-router";
// import axios from "axios";

// export default {
//   name: "ProductImages",
//   components: {
//     NavBar,
//   },
//   data() {
//     return {
//       images: [],
//     };
//   },
//   methods: {
//     fetchImages() {
//       const route = useRoute();
//       const { id } = route.params;
//       const endpoint = `https://dummyjson.com/products/${id}`;
//       axios
//         .get(endpoint)
//         .then((res) => {
//           console.log(res.data.images);
//           this.images = res.data.images;
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     },
//   },
//   mounted() {
//     console.log(this.$route.params.id);
//     this.fetchImages();
//   },
// };
// </script>
// <style scoped></style>
