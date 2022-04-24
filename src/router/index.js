import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/pages/Home/Home.vue";
import Users from "@/pages/Users/Users.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    breadcrumb: "Home"
  },
  {
    path: "/users",
    name: "users",
    component: Users,
    breadcrumb: "Usuários",
    previous: "Home"
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
