<template>
<div>
    <h2>this high layer component side</h2>
    <p>got data from low layer compo : {{catchedData}}</p>
    <button @click="refCatch">take</button><span>ref test : {{lowCData}}</span>
    <p>got data from global compo : {{takeGlobalCompoData}}</p>
    <br />
    <label for="">write in 'test' (applied custom directive) :</label><input type="text" v-model="checkVmodel" v-cDirective>
    <br />
    <label for="">write the date if you what the format(need to write y-m-d) :</label><input type="text" v-model="writtenDate" v-onlyNum>
    <div> {{changeDateFormat}} </div>
    <div class="sep">
        <low-layer-compo-vue :propsData="defPropsData" @getData="catchData" ref="lowC"> 
            <template #testSlot>
                <div v-if="checkVmodel==='test'">
                    <ul>
                        <li v-for="(value,index) in vForList" :key="index">{{value}}</li>
                    </ul>
                </div>
            </template>
        </low-layer-compo-vue>
    </div>
    <div class="sep">
        <global-compo ref="globalComporef"></global-compo>
    </div>
    <div class="sep">
        <h1>check VueX</h1>
        <checkVueX></checkVueX>
    </div>

</div>
</template>


<script>
import checkVueXVue from '../../components/checkVueX.vue';
import GlobalCompo from '../../components/GlobalCompo.vue';
import LowLayerCompoVue from '../../components/LowLayerCompo.vue';
export default{ 
    name:'',
    components:{'LowLayerCompoVue':LowLayerCompoVue, 'GlobalCompo':GlobalCompo,'checkVueX':checkVueXVue},
    computed:{
        // changeDateFormat(){
        //     return this.convertDateFormat(this.writtenDate , 'mm-dd-yyyy');
        // }, mixin에 정의된 함수를 호출하는 경우 created전에 호출하면 문제가 생길 수 있음. 아직 불러와 지기 전이어서 this 호출 시 정의가 안됐다고 나옴.
    },
    data(){
        return{
            defPropsData : "checked how to use props",
            catchedData : "",
            lowCData : "",
            //takeGlobalCompoData : this.$refs.GlobalCompo.useThisData, -> 이렇게 사용이 불가능함. $refs는 마운트가 끝난 이후에 초기화 됨. 때문에 변수에 넣는 작업은 특정 메서드를 사용해서 마운트가 완료되면 변수에 저장할 수 있도록 해야함.
            takeGlobalCompoData : "",
            checkVmodel : "",
            vForList:['a','b','c'],
            writtenDate : "",
        };
    },
    provide(){
        return {
            provideData:"this is provide data"
        }
    },
    directives:{
        cDirective:{
            mounted(el){
                el.addEventListener('input',(event)=>{
                    event.target.value = event.target.value.replace(/[^a-zA-Z]+/,""); //숫자 외의 다른 문자는 공백이 입력되도록 하는 정규표현식 적용하는 사용자 지정 디렉티브.
                })
            }
        },
        onlyNum:{
            mounted(el){
                el.addEventListener('input',(event)=>{
                    event.target.value = event.target.value.replace(/\D/g,""); //숫자 외의 다른 문자는 공백이 입력되도록 하는 정규표현식 적용하는 사용자 지정 디렉티브.
                })
            }
        },
    },
    setup(){},
    created(){ console.log(this.convertDataFormat('20241119','mm-dd-yyyy'));},
    mounted(){
    },
    unmounted(){},
    methods:{
        catchData(data){
            this.catchedData = data ;
        },
        refCatch(){
            this.lowCData = this.$refs.lowC.refTestData;
            //this.takeGlobalCompoData = this.$refs.GlobalComporef.useThisData; 이건 왠지 모르겠는데 안됨 ;;
        }
    },
    watch:{}
}
</script>

<style scoped>
    .sep{
        border: 3px solid coral;
        margin: 10px;
    }
</style>