import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import LoginPage from "../pages/LoginPage.vue";
import SignUp from "../pages/SignUp.vue";
import ProductPage from "../pages/ProductPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/LoginPage",
    name: "Login",
    component: LoginPage,
  },
  {
    path: "/SignUp",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/ProductPage",
    name: "ProductPage",
    component: ProductPage,
    meta: {
      requiresAuth: true,
    }
  },
  // {
  //   path: "/:catchAll(.*)",
  //   name: "ErrorPage",
  //   component: ErrorPage
  // }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
