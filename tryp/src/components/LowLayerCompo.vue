<template>
<div>
    <h3>low layer component side</h3>
    <p>how to use props : {{ propsData }}</p>
    <p>
        <button @click="sendDataToHigh"> data send to high layer compo. use $emit </button>
    </p>

    <div class="testSlotpart">
        <h3>test slot part</h3>
        <slot name="testSlot">

        </slot>
    </div>
    <low-low-layer></low-low-layer>
</div>
</template>


<script>
import LowLowLayerVue from './LowLowLayer.vue';
export default{ 
    name:'',
    components:{'LowLowLayer':LowLowLayerVue},
    props:{
        propsData:{
            type:String,
            default :"default"
        }
    },
    data(){
        return{
            emitData:"data for sending to high layer compo",
            refTestData:"ref test data",
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        sendDataToHigh(){
            this.$emit('getData',this.emitData);
        }
    },
    computed:{},
    watch:{}
}
</script>
<style scoped>
.testSlotpart{
    border: 2px dotted rgb(112, 169, 27);
    margin: 10px;
}
</style>