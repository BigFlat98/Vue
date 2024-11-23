<template>
<div>
    <p>{{ $t('Hello',{name : userName}) }}</p> <!-- 이 변수를 i18n에서 정해준 값으로 변경하겠다. 지금은 main에 적어서 전역으로 사용이 가능하지만 여기에 있는 script부분에 넣어서 지역으로 사용할 수 있는지도 한번 여쭤보면 좋을 듯-->
    <p>{{ $t('Welcome',{name : userName}) }}</p>
    <p>{{ $t('language') }}</p>

    <button @click="changeLanguage('ko')">Korean</button>
    <button @click="changeLanguage('en')">English</button>
    <button @click="changeLanguage('es')">Spanish</button>
</div>
</template>


<script>
export default{ 
    name:'',
    components:{},
    data(){
        return{
            userName : 'hhh',
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        changeLanguage(lang){
            this.$i18n.locale = lang; //i18n을 호출하는데 $표시는 그냥 여기서 정의한 내용이 아니라고 표시해주는 것. 내용도 없고 코드상 인식도 안함.
        }

    },
    computed:{},
    watch:{}
}
</script>