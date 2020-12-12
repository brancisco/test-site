import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Foo from './components/Foo'
import Bar from './components/Bar'
import Lost from './components/Lost'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/' },
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { path: '*', component: Lost }
]

const router = new VueRouter({
  base: '/test-site/',
  mode: 'history',
  routes 
})

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')