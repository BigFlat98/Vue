<template>
<div>
    <p>{{deepChildData}}</p>
    <p>{{testData1}}</p>

</div>
</template>


<script>
export default{ 
    name:'',
    components:{},
    inject: ['deepChildData','testData1'],
    props:{},
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