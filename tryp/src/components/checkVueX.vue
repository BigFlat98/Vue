<template>
<div>
    <button @click="checkData">console</button>
    <table class="student-table">
        <thead>
            <tr>
                <th v-for="att in studentsAtt" :key="att.key" class="table-header">{{att.title}}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(student,index) in students" :key="student.id || index" class="table-row">
                <td v-for="att in studentsAtt" :key="att.key" class="table-cell">{{student[att.key]}}</td>
            </tr>
        </tbody>
    </table>
    <p>학생 수 : {{studentsCount}}</p>
    <button @click="addNewStudent">추가</button>
    <button @click="graduate(5)">제거</button>
</div>
</template>

<style scoped>
.student-table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    background-color: #ffffff;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
}

.table-header {
    background-color: #f8f9fa;
    padding: 12px;
    text-align: center;
    font-weight: bold;
    color: #495057;
    border-bottom: 2px solid #dee2e6;
}

.table-row:nth-child(even) {
    background-color: #f8f9fa;
}

.table-row:hover {
    background-color: #f1f3f5;
}

.table-cell {
    padding: 12px;
    text-align: center;
    border-bottom: 1px solid #dee2e6;
}
</style>

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