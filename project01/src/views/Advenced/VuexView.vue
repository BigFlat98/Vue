<template>
<div>
    <div>{{ todos }}</div>
    <div>{{ todosCount }}</div>
    <div>{{ doneTodosCount }}</div>
    <div>{{ notDoneTodosCount }}</div>
    <p>{{ isLoginCheck }}</p>
    <button @click="addItem">추가</button>
    <button @click="removeItem(4)">삭제</button>
    <button @click="doneYN({id:2,done:true})">수정</button>
    <button @click="removeAll">전부 삭제</button>
</div>
</template>


<script>
export default{ 
    name:'',
    components:{},
    data(){
        return{

        };
    },
    setup(){},
    created(){
        
    },
    mounted(){
        this.$store.commit('todo/setUserInfo');
    },
    unmounted(){},
    methods:{
        addItem(){
            //this.$store.commit('add',{id:4,title:'할 일 4',done:false}); -> commit은 mutations에 있는 함수 호출시 사용
            this.$store.dispatch('todo/add',{id:4,title:'할 일 4',done:false}); // -> dispatch는 actions에 있는 함수 호출을 위한 commit이라고 생각하면 됨.
        },
        removeItem(id){
            this.$store.commit('todo/remove',id); //mutations에 있는 함수를 쓰기 위해서는 commit함수를 써야함. 첫번째 파라미터가 mutations에 정의한 함수명. 나머지가 mutations
        },
        doneYN(doneState){
            this.$store.commit('todo/doneYN',doneState)
        },
        removeAll(){
            this.$store.commit('todo/removeAll');
        },
        
       
    },
    computed:{//vuex에서 불러오는 데이터나 메서드는 컴퓨티드에서 호출해주는게 좋음.
        todos(){
            return this.$store.state.todo.todos //vuex에서 데이터 호출. store폴더에 있는 index.js 에 있는 state에 있는 todos 호출
        },
        todosCount(){
            return this.$store.getters['todo/todosCount'] //state에 있는 데이터 호출 때와 달리 getters에 있는 함수는 이렇게 인덱스 형태로 호출해야 함.
        },
        doneTodosCount(){
            return this.$store.getters['todo/doneTodosCount']
        },
        notDoneTodosCount(){
            return this.$store.getters['todo/notDoneTodosCount']
        },
        isLoginCheck(){
            return this.$store.getters['todo/isLogin']
        }
    },
    watch:{}
}
</script>