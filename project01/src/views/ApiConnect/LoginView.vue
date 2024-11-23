<template>
<div>
    <p v-if="nickname">안녕하세요, {{ nickname }}님!</p>
    <a id="kakao-login-btn" @click="loginKakao">
        <img src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg" width="222" alt="카카오 로그인 버튼" />
    </a>
    <p id="token-result"></p>
</div>
</template>


<script>
export default{ 
    name:'',
    components:{},
    data(){
        return{
            nickname:'',
        };
    },
    setup(){},
    created(){},
    mounted(){
        
    },
    unmounted(){},
    methods:{
        loginKakao(){
            Kakao.Auth.authorize({
                redirectUri: 'http://localhost:8080/auth',
                //prompt: 'login', 함수 호출되면 매번 로그인 정보 넣는 화면이 나옴.
                
            });
        },
    },
    computed:{},
    watch:{}
}
</script>
<style scoped>
    a{
        cursor: pointer;
    }
</style>