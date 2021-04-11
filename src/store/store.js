import Vue from 'vue'
import Vuex from 'vuex' // Vuexをインポート

Vue.use(Vuex); // VuexをVueのミドルウェアとして使用する宣言

// Vuex.Storeの情報を登録
const store = new Vuex.Store({
  state: {
    sex: '',
    birthday: '',
    answer1: '',
    answer2: '',
    answer3: '',
    formContents: ''
  },
  mutations: {
    selectStep1Info (state, { userSex, userBirthday}) {
      state.sex = userSex,
      state.birthday = userBirthday
    },
    selectStep2Info (state, { answer1, answer2, answer3}) {
      state.answer1 = answer1,
      state.answer2 = answer2,
      state.answer3 = answer3
    },
    selectStep3Info (state, formContents) {
      state.formContents = formContents
    },
  },
  actions: {},
  getters: {
    outputInfo: (state) => state
  }
});

export default store; // sotreをエクスポート