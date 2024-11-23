<template>
<div>
    <GrandChild :deepChildData="childData" />
    {{testData2}}
</div>
</template>


<script>
import GrandChild from "@/components/flagment/GrandChild.vue"
export default{ 
    name:'',
    props:{
        childData:{
            type:String,
        }
    },
    components:{"GrandChild":GrandChild},
    inject:{
        testData2:"testData2",
    },
    provide(){
        return {
            testData1 : "testData1",
        }
    },
    data(){
        return{

        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{},
    computed:{},
    watch:{}
}
</script>