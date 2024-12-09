<template>
<div>
    <div id="kakaoLogin">
        <h2>kakaoLogin</h2>
        <a v-if="!user.email" id="kakao-login-btn" @click="loginWithKakao">
            <img src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg" width="222" alt="카카오 로그인 버튼" />
        </a>
        <div v-else>
            <p>닉네임: {{ user.name }}</p>
            <p>이메일: {{ user.email }}</p>
            <button @click="kakaoLogout" class="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded">
                로그아웃
            </button>
        </div>
        <p id="token-result"></p>
    </div>
</div>
</template>


<script>
import {mapGetters , mapActions} from 'vuex';
import axios from 'axios';
export default{ 
    name:'',
    components:{
        
    },
    data(){
        return{

        };
    },
    setup(){},
    created(){
        if(!window.Kakao.isInitialized()){
            console.log("카카오 SDK 초기화 시작");
            window.Kakao.init("21f61054eb166ba3ce01060f97fa5909");
            if(window.Kakao.isInitialized()){
                console.log("카카오 SDK 초기화 완료");
            }
        }
        else{
            console.log("카카오 SDK 이미 초기화됨");
            console.log(window.Kakao);
        }

        const urlParams = new URLSearchParams(window.location.search);
        console.log(urlParams);
        if(urlParams.has("code")){
            console.log("인가 코드 추출");
            const code = urlParams.get("code");
            console.log(code);
            this.setKakaoToken(code);
        }
    },
    mounted(){},
    unmounted(){},
    methods:{
        ...mapActions(['setUser' , 'clearUser']),
        loginWithKakao(){
            Kakao.Auth.authorize({
                redirectUri: 'http://localhost:8080/login',
            });
        },
        async getKakaoToken(code){
            const data = {
                grant_type: "authorization_code",
                client_id: "39769ba2832c9d4374af7614b1192564", // 카카오 REST API 키
                redirect_uri: "http://localhost:8080/login", // Redirect URI
                code: code,
            };
            const queryString = Object.keys(data).map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&");
            console.log("queryString:", queryString);
            axios.defaults.baseURL = 'http://localhost:8080';

            return axios.post(
                "https://kauth.kakao.com/oauth/token", 
                queryString, 
                { headers: {"Content-type": "application/x-www-form-urlencoded;charset=utf-8",},}
            );
        },
        async getKakaoUserInfo(){
            console.log("getKakaoUserInfo");
            return window.Kakao.API.request({
                url: "/v2/user/me",
            });
        },


        async setKakaoToken(code){
            try{
                const {data} = await this.getKakaoToken(code);
                window.Kakao.Auth.setAccessToken(data.access_token);
                const userInfo = await this.setUserInfo();
                console.log("로그인 성공:", userInfo);
                this.$router.push("/login"); 
            }
            catch(error){
                console.error("토큰 발급 실패:", error);
            }
        },
        async setUserInfo() {
            try {
                const res = await this.getKakaoUserInfo();
                console.log("res:", res);
                const userInfo = {
                    name: res.kakao_account.profile.nickname,
                    email: res.kakao_account.email,
                };
    
                this.setUser(userInfo); // Vuex 상태 업데이트
                return userInfo;
            } 
            catch (error) {
                console.error("사용자 정보 조회 실패:", error);
            }
        },
        kakaoLogout() {
            window.Kakao.Auth.logout(() => {
                console.log("로그아웃 성공");
                this.clearUser(); // Vuex 상태 초기화
            });
        },
    },
    computed:{
        ...mapGetters(['user']),
    },
    watch:{}
}
</script>