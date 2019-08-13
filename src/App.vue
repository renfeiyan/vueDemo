<template>
  <div id="app">
    <router-link to="color">颜色选择</router-link>
    <router-link to="cart">购物车</router-link>
    <router-link to="vuexD">状态管理</router-link>
    <router-link to="drawerDemo">抽屉实践demo</router-link>
    <router-link to="drawerSelf">抽屉自己写</router-link>
    <router-link to="login">后台管理Demo</router-link>
<hr>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
     
    }
  }
}
</script>

<style>

</style>
