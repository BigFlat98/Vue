import { createStore } from 'vuex'
import { todo } from './todos' 
import persistedstate from 'vuex-persistedstate'

export default createStore({
  state: {
    user: {}, // 사용자 정보 저장
  },
  getters: {
    user: (state) => state.user,
  },
  mutations: {
    setUser(state, userInfo) {
      state.user = userInfo;
    },
    clearUser(state) {
      state.user = {};
    },
  },
  actions: {
    setUser({ commit }, userInfo) {
      commit("setUser", userInfo);
    },
    clearUser({ commit }) {
      commit("clearUser");
    },
  },
  modules: { //데이터 정의는 다른 파일에서 하고, index.js modulse(여기)에서 데이터들을 구분해서 사용.
    todo : todo ,
  },
  plugins:[
    persistedstate({paths:["todo.todos"]}) //todos의 state에 있는 todos데이터가 클라이언트 측에 의해 추가되거나 변경되는 경우 해당 값을 랜더링을 다시 했을 때도 유지시키기 위한 코드 vuex-persistedstate패키지 설치 필요.
                                           //옛날에 배웠던 캐시랑 비슷한 개념인 듯. 로그인 정보 유지나 쇼핑몰의 장바구니 등의 정보가 유되도록 해야 할 때 사용.
                                           //브라우저 상에서 도메인마다 local storage라는 저장 공간을 제공함. (약 5mb정도?)
                                           //key와 value로 구성돼있고 지금처럼 사용하면 key에는 vuex, value에는 추가하는 데이터로 들어감.
                                           //근데 이 로컬 저장소는 내가 삭제 해 주지 않으면 브라우저를 종료해도 계속해서 남아있음.
                                           //안 지워주면 계속 남아있음. <- 이것 때문에 쿠키를 사용하는 경우도 있음. 쿠키는 일정 시간 지나면 삭제됨.

                                           
                                           
  ]
})