// コンポーネントをインポート
import PersonalInfo from './components/PersonalInfo.vue'
import Questions from './components/Questions.vue'
import CommunicateForm from './components/CommunicateForm.vue'

// インポートしたコンポーネントを表示したいパスと繋げる
export const routes = [
  { path:'/personalinfo',
    component: PersonalInfo
  },
  { path:'/questions',
    component: Questions
  },
  { path:'/communicationform',
    component: CommunicateForm
  },
  { path: '*',
    redirect: '/personalinfo'
  }
];