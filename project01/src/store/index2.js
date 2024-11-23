//모든 컴포넌트를 위한 중앙 집중식 데이터
//이 파일은 main에 import돼있기 때문에 전역으로 사용 가능
//이 store에 있는 내용이 vuex라고 칭해도 됨. 같은 
import { createStore } from 'vuex'

export default createStore({
  state() { //전역에서 사용할 데이터들 여기에(보통 함수형으로 바꿔서 사용함. 이유가 갖고있는 데이터가 배열형이나 오브젝트 형이면 안에 있는 특정 데이터를 호출하기가 어렵기 때문에 함수형으로 쓰는거임.)
    //이렇게 함수형으로 써야 다른데서 state를 호출하고 데이터를 찾을 때 this.state.데이터 키 값 -> 이런식으로 호출할 수 있어서. 이게 편해서 함수형으로 쓰는거임.
    return{
      todos:[
        {id:1,title:'할 일 1',done:true},
        {id:2,title:'할 일 2',done:false},
        {id:3,title:'할 일 3',done:false},
      ],
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
    }
  }, //커 밋 은 그 냥 mutations에 있 는 함 수 를 실 행 하 는 함 수
  actions: { //mutations에 있는 메서드를 여기서 커밋해서 간접적으로 데이터를 수정할 수 있음. mutations에 정의한 함수처럼 여기서도 똑같이 사용할 수 있음. 하지만 actions에서만 비동기 처리가 가능.
            //예를 들어 사용자가 로그인했을 때의 로그인 정보가 state에 있다고 하면. 로그인 정보가 바뀌었다고 하면 서버측에 비동기 요청을 해서 변경된 값을 서버에도 적용해 줘야힘.
            //이런 상황에서 비동기 처리하는 작업을 하는 함수 등은 actions에 정의함.
    
            //vuex에는 const{commit, state} = context -> 이런식으로 정의된 오브젝트가 있음.
    
    add({commit},item){//그래서 그냥 commit호출해서 쓸 수 있는거임.
      commit('add',item); //mutations에 있는 함수 실행은 commit함수를 통해서 실행 가능. 이 actions에 있는 add함수는 단순히 mutations에 있는 add함수를 실행하는 함수임.
    }
          },
  modules: { //데이터 정의는 다른 파일에서 하고, index.js modulse(여기)에서 데이터들을 구분해서 사용.

  }
})


const obj={
  name:'h',
  age:30
};

const {name,age} = obj; //이미 만든 obj에서 key값들을 뽑아 하나의 obj로 만들 수 있음. 
console.log(name); // 그럼 이렇게 그냥 참조 가능
