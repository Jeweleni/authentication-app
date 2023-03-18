import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import LoginPage from "../pages/LoginPage.vue";
import SignUp from "../pages/SignUp.vue";
import ProductPage from "../pages/ProductPage.vue";
import ProductDetails from "../pages/ProductDetails.vue";
import ErrorPage from "../pages/ErrorPage.vue";
import ProductImages from "../components/ProductImages.vue";
import store from "@/store/store";

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
    path: "/products",
    name: "Products",
    component: ProductPage,
    meta: {
      tittle: "Products",
      authIsRequired: true,
    },
  },
  {
    path: "/products/:id",
    name: "product",
    component: ProductDetails,
    meta: {
      tittle: "Product",
      authIsRequired: true,
    },
    children: [
      {
        path: "images/:id",
        component: ProductImages,
        name: "product-images",
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

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.authIsRequired);
  var isAuthenticated = store.getters["auth/isAuthenticated"];
  console.log(isAuthenticated);
  

  if ("authIsRequired" in to.meta && requiresAuth && isAuthenticated !== true) {
    next("/login");
  } else if (
    "authIsRequired" in to.meta &&
    !requiresAuth &&
    isAuthenticated === true
  ) {
    next("/products");
  } else {
    next();
  }
});
export default router;
