import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import LoginPage from "../pages/LoginPage.vue";
import SignUp from "../pages/SignUp.vue";
import ProductPage from "../pages/ProductPage.vue";
import ProductDetails from "../pages/ProductDetails.vue";
import ErrorPage from "../pages/ErrorPage.vue";
import ProductImages from "../components/ProductImages.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
    meta: {
      tittle: "Login",
      authIsRequired: false,
    },
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
    meta: {
      tittle: "SignUp",
      authIsRequired: false,
    },
  },
  {
    path: "/productpage",
    name: "Products",
    component: ProductPage,
    meta: {
      tittle: "Products",
      authIsRequired: true,
    },
  },
  {
    path: "/productdetails/:id",
    name: "Product",
    component: ProductDetails,
    meta: {
      tittle: "Product",
      authIsRequired: true,
    },
    children: [
      {
        path: "images/:id",
        component: ProductImages,
        name: "ProductImages",
        props: true,
      },
     
    ],
  },
  {
    path: "/:catchAll(.*)",
    name: "ErrorPage",
    component: ErrorPage
  }
];

const router = createRouter({ history: createWebHistory(), routes });
var isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
console.log(isLoggedIn);
router.beforeEach((to, from, next) => {
  if (
    "authIsRequired" in to.meta &&
    to.meta.authIsRequired &&
    isLoggedIn === true
  ) {
    next("/login");
  } else if (
    "authIsRequired" in to.meta &&
    !to.meta.authIsRequired &&
    isLoggedIn === true
  ) {
    next("/products");
  } else {
    next();
  }
});
export default router;
