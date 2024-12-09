import { createStore } from 'vuex'
import { studentA } from './student.js'
import { kakaoLogin } from './kakaoLogin.js'

export default createStore({
  modules: {
    student:studentA,
    kakaoLogin:kakaoLogin
  },
})
