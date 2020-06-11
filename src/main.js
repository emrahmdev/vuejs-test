import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import VueRouter from 'vue-router'


import Login from "./components/Login"
import Users from "./components/Users"
import Details from "./components/Details"
import store from "./store";

Vue.use(ElementUI, { locale })
Vue.use(VueRouter)
Vue.config.productionTip = false

Vue.component('app', App)

const routes = [
  {path: '/', component: Login, name: 'login'},
  {path: '/users', component: Users, name: 'users', meta: { requiresAuth: true }},
  {path: '/details/:username', component: Details, name: 'details', meta: { requiresAuth: true }},
]

const router = new VueRouter({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !store.state.isAuthenticated) {
    next("/")
  } else {
    next()
  }
})

new Vue({
  render: h => h(App),
  router,
  store,
  components: { App }
}).$mount('#app')
