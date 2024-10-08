import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/MyHome.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MyAbout.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: window.__POWERED_BY_QIANKUN__ ? "/child" : process.env.BASE_URL,
  routes,
});

export default router;
