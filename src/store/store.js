import Vue from 'vue'
import Vuex from 'vuex' // Vuexをインポート

Vue.use(Vuex); // VuexをVueのミドルウェアとして使用する宣言

// Vuex.Storeの情報を登録
const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {}
});

export default store; // sotreをエクスポート