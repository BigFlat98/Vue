<template>
<div>
    <button @click="sendData" class="btn btn-warning">sendData</button>
    <button @click="doDelete" class="btn btn-warning">deleteData</button>
    <SimpleGrid :headers="headerData" :items="dataForSend" @diff-change="changeDiff" @change-radio-item="radioSelected" @change-item="checkBoxSelected" />
</div>
</template>


<script>
import SimpleGrid from "@/components/flagment/SimpleGrid.vue"
export default{ 
    name:'',
    components:{"SimpleGrid":SimpleGrid},
    data(){
        return{
            headerData : [
                {title:"통화",key:"exchange"},
                {title:"살 때",key:"sale"},
                {title:"팔 때",key:"buy"},
                {title:"전일대비",key:"diff"},
            ],
            allData : [],
            dataForSend : [],
            checkedItems : [],
            
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        sendData(){
            this.allData = [
            {  exchange : "미국 USD",
                sale : 1396,
                buy : 1420,
                diff : "전일 상승"
            },{  
                exchange : "유럽 EUR",
                sale : 1473,
                buy : 1502,
                diff : "전일 하락"
            },{  exchange : "일본 JPY",
                sale : 894,
                buy : 909,
                diff : "전일 하락"
            },{  exchange : "중국 CNY",
                sale : 192,
                buy : 202,
                diff : "전일 상승"
            }];
            this.dataForSend = this.allData
        },
        changeDiff(data){
            if(data ==='up'){
                this.dataForSend = this.allData.filter((pdata)=>{
                    return pdata.diff=='전일 상승'
                })
            }
            else if(data ==='down'){
                this.dataForSend = this.allData.filter((pdata)=>{
                    return pdata.diff=='전일 하락'
                })
            }
            else {
                this.dataForSend = this.allData;
            }
        },
        checkBoxSelected(data){
            console.log(data)
            this.checkedItems = data;
        },
        radioSelected(data){
            this.checkedItems = data;
        },
        doDelete(){
            this.dataForSend = this.dataForSend.filter(
                (data)=>!(this.checkedItems.includes(data.exchange)) //includes는 적용하는 배열에 파라미터의 값이 있으면 true 리턴
                                                                     //filter함수로 dataforsend에 있는 오브젝트 하나씩 data에 들어가고
                                                                     //data에 있는 exchange 값이 changedItems에 포함돼 있는지 확인.
            );
            
        },
    },
    computed:{},
    watch:{}
}
</script>

<style scoped>
button{
    margin: 20px;
}
</style>