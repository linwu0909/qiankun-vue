import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // count: 0,
    num: 0,
  },
  mutations: {
    // addCount(state, n) {
    //   state.count += n;
    // },
    addNum(state, n) {
      state.num += n;
    },
  },
  actions: {},
  modules: {},
});
