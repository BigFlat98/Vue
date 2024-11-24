<template>
<div>
    <button @click="checkData">console</button>
    <table>
        <thead>
            <tr>
                <th v-for="att in studentsAtt" :key="att">{{att.title}}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(student,index) in students" :key="student">
                <td v-for="att in studentsAtt" :key="att">{{student[att.key]}}</td>
            </tr>
        </tbody>
    </table>
    <p>학생 수 : {{studentsCount}}</p>
    <button @click="addNewStudent">추가</button>
    <button @click="graduate(5)">제거</button>
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
    created(){},
    mounted(){this.test()},
    unmounted(){},
    methods:{
        addNewStudent(){
            this.$store.dispatch('addStudent',{name:"ttt",stNum:5,class:"literature"});
        },
        graduate(id){
            this.$store.dispatch('Graduation',id);
        },
        checkData(){
            console.log(this.students);
            console.log(this.studentsAtt);
        },
        test(){
            this.$store.commit('test');
        }
    },
    computed:{
        students(){
            return this.$store.state.student.students
        },
        studentsAtt(){
            return this.$store.state.student.studentsAtt
        },
        studentsCount(){
            return this.$store.getters['studentCount']
        },

    },
    watch:{}
}
</script>