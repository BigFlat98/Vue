export const studentA = {
    namespace : true,
    state() {
        return{
            studentsAtt : [
              {title:"이름" , key:"name"},
              {title:"학생번호" , key:"stNum"},
              {title:"수업" , key:"class"},
            ],
            students : [
                {
                name : 'hhh',
                stNum : 1,
                class : "it"
                },
                {
                name : 'ddd',
                stNum : 2,
                class : "it"
                },
                {
                name : 'jjj',
                stNum : 3,
                class : "sport"
                },
                {
                name : 'xxx',
                stNum : 4,
                class : "literature"
                },
            ]
          
        } 
      },
      getters: {
        studentCount(state){
          return state.students.length
        },
        studentClassCount(state,clase){
          return state.students.filter((std)=>{std.class === clase}).length
        }
    
      },
      mutations: {
        addStudent(state,std){
          state.students.push(std);
        },
        Graduation(state,stid){
          state.students = state.students.filter((std)=>std.stNum != stid);
        },
        test(){
          console.log("test")
        }
      },
      actions: {
        addStudent({commit},std){
          commit('addStudent',std);
        },
        Graduation({commit},stid){
          commit('Graduation',stid)
        }
      },
    
}