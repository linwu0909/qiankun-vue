import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

import { registerMicroApps, start } from "qiankun";

registerMicroApps([
  // {
  //   name: "child", // 子应用名称
  //   entry: "//localhost:8080", // 子应用入口
  //   container: "#child", // 子应用在主应用中显示的位置
  //   activeRule: "/child", // 子应用激活的路由规则
  //   props: {
  //     initCount: store.count,
  //   },
  // },
  {
    name: "child", // 子应用名称
    entry: "//localhost:10000", // 子应用入口
    container: "#child", // 子应用在主应用中显示的位置
    activeRule: "/child", // 子应用激活的路由规则
    props: {
      initState: store.state,
    },
  },
]);
start();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
