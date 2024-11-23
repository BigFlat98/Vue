<template>
<div>
    <h1>
        Mixin
    </h1>
</div>
</template>


<script>
// import dayFormatter from '@/mixins/formatter.js'
// import Axios from '@/mixins/axios.js'
export default{ 
    name:'',
    components:{},
    //mixins:[dayFormatter,Axios], //다른 곳에서도 자주 사용할 만한 메서드 등을 모아서 정의해놓은 파일을 가져와서 사용. 이렇게 mixins에 파일을 넣으면 해당 파일에 정의된 내용을 this. 로 호출할 수 있음.
    data(){
        return{

        };
    },
    setup(){},
    created(){
        this.getCustomers(); //DjangoApiserver 열어야 작동함. 장고 서버에 데이터를 요청하는 메서드
        console.log('create of views'); //created 와 mounted 는 mixin이 먼저 시작됨. 
                                        //mixin create -> view create / mixin mounted -> view mounted 이렇게 진행됨. 
                                        //서버에서 데이터를 가져오는 경우 보통 모든 컴포넌트에서 사용하기 때문에 데이터를 가져오는 코드는 보통 mixin에서 진행함.
        console.log(this.$convertDateFormat('20241119','mm-dd-yyyy'));//만약 mixins에 정의된 함수가 이 파일 내부에서 같은 이름으로 정의돼 있으면 호출 했을 때 호출 위치에 따라 이 파일에 있는 함수가 먼저 호출됨.
                                                                     //때문에 구분해 주기 위해서 mixin에 정의하는 함수는 함수명 앞에 $를 붙여줘서 구분함.
        },
    mounted(){ 
        console.log('mounted of views');
        },
    unmounted(){},
    methods:{
        convertDateFormat(date, format){
                let year = '' ;
                let month = '' ;
                let day = '' ;

                if(typeof date === 'string' && date.length === 8){
                    year = date.substring(2,4); //python의 문자열 인덱싱과 동일
                    month = date.substring(4,6);
                    day = date.substring(6,8);
                }
                else if(typeof date === 'object'){
                    year =data.getFullYear();
                    month = (date.getMonth()+1).toString().padStart(2,0);
                    day = (date.getDay()+1).toString().padStart(2,0);
                }
                return format.replace('yy',year).replace('mm',month).replace('dd',day)
        },
        async getCustomers(){
            const customers = await this.$get('http://127.0.0.1:3000/');
            console.log(customers);
        }
    },
    computed:{},
    watch:{}
}
</script>