import axios from 'axios'

// axios.defaults.baseURL ='http://localhost:3000'
// axios.defaults.headers['Content-type'] = 'application/json;charset=utf-8'
// axios.defaults.headers['Access-Control-Allow-Origin'] = '*'

export default{ 
    setup(){},
    created(){
        console.log('create of mixin');
    },
    mounted(){console.log('mounted of mixin')},
    unmounted(){},
    methods:{
        $convertDateFormat(date, format){//date ->'20241119' 날짜 문자열 , format변경해줄 형식 
            let year = '' ;
            let month = '' ;
            let day = '' ;

            if(typeof date === 'string' && date.length === 8){
                year = date.substring(0,4); //python의 문자열 인덱싱과 동일
                month = date.substring(4,6);
                day = date.substring(6,8);
            }
            else if(typeof date === 'object'){
                year =data.getFullYear();
                month = (date.getMonth()+1).toString().padStart(2,0);
                day = (date.getDay()+1).toString().padStart(2,0);
            }
            return format.replace('yyyy',year).replace('mm',month).replace('dd',day)
        },
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
    },
    computed:{},
    watch:{}
}