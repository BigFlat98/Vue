import VueCookies from 'vue-cookies'

export const todo = {

    namespaced:true,
    state() { //전역에서 사용할 데이터들 여기에(보통 함수형으로 바꿔서 사용함. 이유가 갖고있는 데이터가 배열형이나 오브젝트 형이면 안에 있는 특정 데이터를 호출하기가 어렵기 때문에 함수형으로 쓰는거임.)
        //이렇게 함수형으로 써야 다른데서 state를 호출하고 데이터를 찾을 때 this.state.데이터 키 값 -> 이런식으로 호출할 수 있어서. 이게 편해서 함수형으로 쓰는거임.
        return{
          todos:[
            {id:1,title:'할 일 1',done:true},
            {id:2,title:'할 일 2',done:false},
            {id:3,title:'할 일 3',done:false},
          
          ],
          userInfo:{
            name:'hhh',
            email:'hhh@naver.com',
          },
          loginUser:true,
        }
      },
      getters: { //state에 저장된 데이터에 대한 computed 라고 생각하면 되는 부분.
        todosCount(state){
          return state.todos.length
        },
        doneTodosCount(state){
          return state.todos.filter((todo) => todo.done).length
        },
        notDoneTodosCount(state){
          return state.todos.filter((todo) => !todo.done).length
        },
        isLogin(state){
          if(VueCookies.get('userInfo')){ //아까 만들었던 쿠키의 key값으로 쿠키 존재하는지 확인하는 메서드
            return true
          }
          else return false
        }
      },
      mutations: { //다른 컴포넌트에서 이 vuex에 있는 데이터를 변경하고 싶을 경우 이 mutatiolns에 있는 함수를 통해서만 가능. 무결성을 위한 것으로 보임. setter느낌?
                   
        add(state,item){
          state.todos.push(item);
        },
        remove(state,id){
          state.todos = state.todos.filter((todo) => todo.id !== id);
        },
        doneYN(state, doneState){
          state.todos.filter((todo) => todo.id === doneState.id)[0].done = doneState.done ;
        },
        removeAll(state){
          state.todos = [];
        },
        setUserInfo(state){
          console.log(state.userInfo);
          VueCookies.set('userInfo',state.userInfo,'5s'); //첫번째 파라미터는 쿠키에 저장되는 데이터의 키 값 , 두번째는 들어가는 데이터, 세번째는 쿠키 유지 시간.
        },
      }, //커 밋 은 그 냥 mutations에 있 는 함 수 를 실 행 하 는 함 수
      actions: { //mutations에 있는 메서드를 여기서 커밋해서 간접적으로 데이터를 수정할 수 있음. mutations에 정의한 함수처럼 여기서도 똑같이 사용할 수 있음. 하지만 actions에서만 비동기 처리가 가능.
                //예를 들어 사용자가 로그인했을 때의 로그인 정보가 state에 있다고 하면. 로그인 정보가 바뀌었다고 하면 서버측에 비동기 요청을 해서 변경된 값을 서버에도 적용해 줘야힘.
                //이런 상황에서 비동기 처리하는 작업을 하는 함수 등은 actions에 정의함.
        
                //vuex에는 const{commit, state} = context -> 이런식으로 정의된 오브젝트가 있음.
        
        add({commit},item){//그래서 그냥 commit호출해서 쓸 수 있는거임.
          commit('add',item); //mutations에 있는 함수 실행은 commit함수를 통해서 실행 가능. 이 actions에 있는 add함수는 단순히 mutations에 있는 add함수를 실행하는 함수임.
        }
              },
}

