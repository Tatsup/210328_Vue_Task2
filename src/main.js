import Vue from 'vue'
import VueRouter from 'vue-router' // VueRouterをインポート
import App from './App.vue'
import { routes } from './routes' // routes.jsをインポート
import store from './store/store' // store.jsをインポート
import { sync } from 'vuex-router-sync' // routerとstoreを結びつける


Vue.use(VueRouter); // VueRouterをVueのミドルウェアとして使用する宣言

// routes.jsの情報をVueRouterに入れる
const router = new VueRouter({
  mode: 'history',
  routes
});

sync(store, router); // routerとstoreを結びつける

new Vue({
  router, // Vueをインスタンス化する際にrouterを渡す
  store, // Vueをインスタンス化する際にstoreを渡す
  render: h => h(App),
}).$mount('#app')
