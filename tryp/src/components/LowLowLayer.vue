<template>
<div class="lowlow">
    <div>
        <h3>this is the LowLowlayer part</h3>
        <span>take provide data from high Layter component by inject : {{provideData}}</span>
    </div>
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
    inject:['provideData'],
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{},
    computed:{},
    watch:{}
}
</script>

<style scoped>
.lowlow{
    border: 3px solid rgb(51, 218, 236);
    margin: 10px;
}
</style>