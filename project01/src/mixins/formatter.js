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
            
        },
        computed:{},
        watch:{}
    }