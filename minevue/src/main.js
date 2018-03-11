// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Home from './views/Home'
import Mine from './views/Mine'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes=[
	{path:'/Home',component:Home},
	{path:'/Mine',component:Mine}
]

const router=new VueRouter({
	routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
