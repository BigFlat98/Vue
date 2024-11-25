// //api호출 로직
// import axios from 'axios';

// export const getKakaoToken = async (code) => {//토큰 발급 메서드
//     const data ={
//         grant_type: 'authorization_code', //
//         client_id: '39769ba2832c9d4374af7614b1192564', //rest api key
//         redirect_uri: 'http://localhost:8080/auth',
//         code: code, //카카오에서 들어오는 인가 코드 저장.
//     };
//     const queryString = Object.keys(data).map((key)=>encodeURIComponent(key)+'='+encodeURIComponent(data[key])).join('&'); //쿼리스트링 형태로 변환.
//     //내 rest api key를 가지고 받은 데이터를 get방식으로 카카오에 보내기 위해 쿼리스트링을 만드는 코드. ex)grant_type=authorization_code&client_id=39769ba2832c9d4374af7614b1192564&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fauth&code=55555555555555555555555555555555

//     return axios.post("https://kauth.kakao.com/oauth/token", queryString,
//         {
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
//             }
//         }//기본적으로 들어가는 파라미터. 그냥 쓸 때 넣어주기만 하면 됨.
//     );
// };

// //카카오 사용자 정보 조회
// export const getKakaoUserInfo = async () => {
//     return window.Kakao.API.request({
//         url: '/v2/user/me',
//     });
// };  

import axios from "axios";

// 카카오 토큰 발급
export const getKakaoToken = async (code) => {
  const data = {
    grant_type: "authorization_code",
    client_id: "39769ba2832c9d4374af7614b1192564", // 카카오 REST API 키
    redirect_uri: "http://localhost:8080/login", // Redirect URI
    code: code,
  };

  const queryString = Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");

  return axios.post("https://kauth.kakao.com/oauth/token", queryString, {
    headers: {
      "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
    },
  });
};

// 카카오 사용자 정보 조회
export const getKakaoUserInfo = async () => {
  return window.Kakao.API.request({
    url: "/v2/user/me",
  });
};