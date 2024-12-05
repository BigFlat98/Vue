<template>
<div>
    <div id="kakaoLogin">
        <h2>kakaoLogin</h2>
        <a id="kakao-login-btn" @click="loginWithKakao">
            <img src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg" width="222" alt="카카오 로그인 버튼" />
        </a>
        <p id="token-result"></p>
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
    setup(){},
    created(){
        if(!Kakao.isInitialized()){
            console.log("카카오 SDK 초기화 시작");
            Kakao.init("21f61054eb166ba3ce01060f97fa5909");
            if(Kakao.isInitialized()){
                console.log("카카오 SDK 초기화 완료");
            }
        }
    },
    mounted(){},
    unmounted(){},
    methods:{
        loginWithKakao(){
            Kakao.Auth.authorize({
                redirectUri: 'http://localhost:8080/login',
            });
        }
    },
    computed:{},
    watch:{}
}
</script>