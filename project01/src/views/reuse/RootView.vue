<template>
<div>
    <Child />
</div>
</template>


<script>
import Child from "@/components/flagment/Child.vue"
import GrandChild from "@/components/flagment/GrandChild.vue"
export default{ 
    name:'',
    components:{
        "Child":Child,
        "GrandChild":GrandChild
        },
    provide(){ //provide에 정의 돼있는 값을 하위에 포함되는 어떤 컴포넌트든 inject에서 받아서 사용할 수 있음.
               //GrandChild 컴포넌트에서 확인 가능.
        return {
            deepChildData : " new new word",
            testData2:"testData2",
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