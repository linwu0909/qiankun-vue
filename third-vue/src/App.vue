<template>
  <div>
    <el-menu :router="true" mode="horizontal" default-active="/">
      <el-menu-item index="/">Home</el-menu-item>
      <el-menu-item index="/about">About</el-menu-item>
      <!-- <el-menu-item index="/child">Child</el-menu-item> -->
      <el-menu-item index="/child">Child</el-menu-item>
    </el-menu>
    <!-- <h1>总应用的state.num：{{ $store.state.count }}</h1> -->
    <!-- <button @click="addCount(10)">总应用增加20</button> -->
    <h1>主应用的state.num：{{ $store.state.num }}</h1>
    <button @click="addNum(10)">主应用增加10</button>
    <router-view></router-view>
    <!-- <div id="child"></div> -->
    <div id="child"></div>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    // addCount() {
    //   this.$store.commit("addCount", 20);
    // },
    addNum() {
      this.$store.commit("addNum", 10);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.child-app {
  width: 400px;
  display: flex;
  border: 1px solid black;
  margin-top: 20px;
  padding: 10px;
}
.child-menu {
  margin-right: 20px;
}
</style>
