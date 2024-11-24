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

    <div>
        <h2>
            how to use plugin
        </h2>
        <p>
            <p>{{ $t('hello')}}</p> <!-- 이 변수를 i18n에서 정해준 값으로 변경하겠다. 지금은 main에 적어서 전역으로 사용이 가능하지만 여기에 있는 script부분에 넣어서 지역으로 사용할 수 있는지도 한번 여쭤보면 좋을 듯-->
            <p>{{ $t('cheese') }}</p>
            <p>{{ $t('milk') }}</p>
            <p>{{ $t('good',{name : userName}) }}
                
        </p>

    <button @click="changeLanguage('es')">Español</button>
    <button @click="changeLanguage('en')">English</button>
        </p>
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
            userName:"hhh",
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        sendDataToHigh(){
            this.$emit('getData',this.emitData);
        },
        changeLanguage(lang){
            this.$i18n.locale = lang; //i18n을 호출하는데 $표시는 그냥 여기서 정의한 내용이 아니라고 표시해주는 것. 내용도 없고 코드상 인식도 안함.
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