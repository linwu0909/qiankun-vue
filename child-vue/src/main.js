import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

Vue.config.productionTip = false;

let instance;

function render(props) {
  if (!store.hasModule("global")) {
    // 当独立运行微应用时，state需要初始化赋值，否则会报错
    let initState;
    if (props && props.initState) {
      initState = props.initState
    } else {
      initState = {
        state: 0,
      };
    }
    // 将父应用的数据存储到子应用中，命名空间固定为global
    const globalModule = {
      namespaced: true,
      state: initState,
      mutations: {
        addNum(state, n) {
          state.num += n;
        },
      },
    };
    // 注册一个动态模块
    store.registerModule("global", globalModule);
  }
  instance = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount("#app");
}

// 独立运行微应用
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

// 被主应用使用时
if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

export async function bootstrap() {}

export async function mount(props) {
  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance = null;
}
