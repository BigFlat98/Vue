<template>
<div>
    <p>this is the global component. imported in main.js</p>
</div>
</template>


<script>
export default{ 
    name:'',
    components:{},
    data(){
        return{
            useThisData:"globalCompoData"
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