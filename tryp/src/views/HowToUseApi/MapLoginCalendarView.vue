<template>
<div>
    <div class="container">
        <h1>map</h1>
        <div>
            <kakaoMap></kakaoMap>
        </div>
    </div>
    <div class="container">
        <h1>login</h1>
        <div>
            <kakaoLogin></kakaoLogin>
        </div>
    </div>
    <div class="container">
        <h1>calendar</h1>
        <div>
            <calendar></calendar>
        </div>
    </div>
</div>
</template>


<script>
import kakaoMap from '@/components/api/kakaoMap.vue';
import kakaoLogin from '@/components/api/kakaoLogin.vue';
import calendar from '@/components/api/fullCalendar.vue';

export default{ 
    name:'',
    components:{'kakaoMap':kakaoMap,'kakaoLogin':kakaoLogin,'calendar':calendar},
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

<style scoped>
.container{
    border: 1px solid black;
    width: 100%;
    margin: 10px 0;
}
</style>