<template>
    <div class="text-center">
        <button
        v-if="!user.email"
        @click="kakaoLogin"
        class="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded"
        >
        카카오 로그인
        </button>
        <div v-else>
            <p>닉네임: {{ user.name }}</p>
            <p>이메일: {{ user.email }}</p>
            <button
                @click="kakaoLogout"
                class="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
            >
                로그아웃
            </button>
        </div>
  </div>
</template>


// import { getKakaoToken, getKakaoUserInfo } from '@/api/kakao';
// import { mapActions, mapGetters } from 'vuex';//mapActions -> vuex에 있는 actions를 사용하기 위한 메서드. 안에 있는 메서드를 mapActions.~ 키값으로 호출하듯 사용할 수 있음. Getters는 state에 있는 데이터 참조.
// //modules로 코드를 나눠놔도 그냥 index.js에 있는 것처럼 사용하면 됨.


// export default {
//     computed:{
//         ...mapGetters('kkoLogin',['user'])
//     },
//     created(){
        
//         if(typeof window.Kakao !== "undefined" && !window.Kakao.isInitialized()){ //처음 접속해서 사용자 정보가 없을 때. isInitialized() -> 이 메서드는 카카오 초기화 여부를 확인하는 메서드
//             window.Kakao.init("21f61054eb166ba3ce01060f97fa5909"); //js app key
//         }

//         const urlParams = new URLSearchParams(window.location.search);
//         if (urlParams.has("code")) {
//             const code = urlParams.get("code");
//             this.setKakaoToken(code);
//         }
//     },
//     methods:{
//         ...mapActions('kkoLogin',['setUser','clearUser']),
//         kakaoLogin(){
//             window.Kakao.Auth.authorize({
//                 redirectUri: 'http://localhost:8080/auth'
//             }); 
//         },
//         async setKakaoToken(code){ //인가 코드로 엑세스 토큰을 발급받는 메서드
//             try{
//                 const {data} = await getKakaoToken(code); //kakao.js에 만들어 놓은 토큰 발급 메서드 호출.
//                 window.kakao.Auth.setAccessToken(data.access_token); //getKakaoToken 메서드 호출시 data.access_token에 토큰이 저장됨.
//                 const userInfo = await this.setUserInfo(); //카카오 유저 정보 가져오는 메서드 호출. 
//                 this.$router.push('/auth'); //로그인 성공 후 리다이렉트.    
//             }catch(error){
//                 console.log(error);
//             }
//         },
//         async setUserInfo(){ //카카오 유저 정보 가져오는 메서드
//             try{
//                 const res = await getKakaoUserInfo(); //kakao.js에 만들어 놓은 유저 정보 가져오는 메서드 호출.
//                 const userInfo = {
//                     name : res.kakao_account.profile.nickname,
//                     email : res.kakao_account.email, //속성 이름은 카카오에서 정해줌. kakao 첫글자가 소문자.
//                 };
//                 this.setUser(userInfo);
//             }catch(error){
//                 console.log(error);
//             }   
//         },
//         kakaoLogout(){
//             window.Kakao.Auth.logout(()=>{//window통해서 호출하는 Kakao는 첫글자가 대문자. window가 index.html이고 Kakao는 sdk
//                 this.clearUser();   
//             });
//         },

//     }
// }


  <script>
  
  import { getKakaoToken, getKakaoUserInfo } from "../api/kakao";
  import { mapActions, mapGetters } from "vuex";
  
  export default {
    computed: {
      ...mapGetters(["user"]), // Vuex 사용자 상태 가져오기
    },
    created() {
      // 카카오 SDK 초기화
      if (typeof window.Kakao !== "undefined" && !window.Kakao.isInitialized()) {
        console.log("카카오 SDK 초기화");
        window.Kakao.init("21f61054eb166ba3ce01060f97fa5909"); // 카카오 JavaScript 키
      }
      else{
        console.log("카카오 SDK 이미 초기화됨");
        console.log(window.Kakao);
      }
  
      // URL에서 인가 코드 추출
      const urlParams = new URLSearchParams(window.location.search);
      console.log(urlParams);
      if (urlParams.has("code")) {
        console.log("인가 코드 추출");
        const code = urlParams.get("code");
        console.log(code);
        this.setKakaoToken(code);
      }
    },
    methods: {
      ...mapActions(["setUser", "clearUser"]), // Vuex 액션 매핑
  
      kakaoLogin() {
        console.log("kakaoLogin");
        window.Kakao.Auth.authorize({
          redirectUri: "http://localhost:8080/login", // Redirect URI
        });
      },
      async setKakaoToken(code) {
        try {
          console.log("setKakaoToken");
          const { data } = await getKakaoToken(code); //지금 여기가 문제인 것 같은데...
          console.log("setKakaoToken...2");
          window.Kakao.Auth.setAccessToken(data.access_token);
  
          const userInfo = await this.setUserInfo();
          console.log("로그인 성공:", userInfo);
          this.$router.push("/login"); // Redirect 경로
        } catch (error) {
          console.error("토큰 발급 실패:", error);
        }
      },
      async setUserInfo() {
        try {
          const res = await getKakaoUserInfo();
          const userInfo = {
            name: res.kakao_account.profile.nickname,
            email: res.kakao_account.email,
          };
  
          this.setUser(userInfo); // Vuex 상태 업데이트
          return userInfo;
        } catch (error) {
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
  };
  </script>
  
  <style>
  .text-center {
    text-align: center;
    margin-top: 50px;
  }
  </style>
  

