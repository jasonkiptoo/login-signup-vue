import Vue from "vue";
import VueRouter from "vue-router";
// import HomeView from "../views/HomeView.vue";
import Login from "./components/Login.vue";
import SignUp from "./components/Signup";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Dashboard,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: SignUp,
    //   return import(/* webpackChunkName: "about" */ "../views/AboutView.vue");
    // },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
