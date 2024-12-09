export const kakaoLogin = {
    namespace : true,
    state() {
        return{
            user:{}
        }
      },
      getters: {
        user:(state)=>state.user
      },
      mutations: {
        setUser(state,userInfo){
            state.user = userInfo;
        },
        clearUser(state){
            state.user = {};
        }
      },
      actions: {
        setUser({commit},userInfo){
            commit('setUser',userInfo);
        },
        clearUser({commit}){
            commit('clearUser');
        }
      },
    
}