import axios from 'axios'

// axios.defaults.baseURL ='http://localhost:3000'
// axios.defaults.headers['Content-type'] = 'application/json;charset=utf-8'
// axios.defaults.headers['Access-Control-Allow-Origin'] = '*'

export default {
    methods: {
        async $get(url){
            // const response = await axios.get(url);
            // return response.data;
            return await axios.get(url).catch((e)=>{ // js에서 요청을 보내는 fetch함수가 있지만 사용이 복잡함. 때문에 axios라는 트렌디한 요청 방식을 사용하는 것.
                console.log(e);
            }).data // .data -> get(url)을 하면 obj형태로 값들을 받아옴. 거기에는 data말고도 여러 값들이 있어서 .data라고 붙여서 data만 걸러서 가져오는거임.
        },
        async $post(url,data){
            return await axios.post(url,data).catch((e)=>{
                console.log(e);
            })
        },
        async $put(url,data){
            return await axios.put(url,data).catch((e)=>{
                console.log(e);
            })
        },
        async $delete(url){
            return await axios.delete(url).catch((e)=>{
                console.log(e);
            })
        },
    }
}