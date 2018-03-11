<template>
  <div id="app">
    <router-link to="/Home">首页</router-link>
    <router-link to="/Mine">我的</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>

</style>
