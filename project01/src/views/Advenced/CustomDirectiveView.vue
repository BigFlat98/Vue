<template>
<div>
    <div> 
        <label for="email" class="form-label">email address</label>
        <input type="text" id="email" class="form-control" v-focus />
    </div>
    <div> 
        <label for="pw" class="form-label">pw</label>
        <input type="password" id="pw" class="form-control" />
    </div>
    <div>
        <label for="" class="form-label">call number</label>
        <input type="text" v-number /> - <input type="text" v-number /> - <input type="text" v-number />
    </div>
    <div>
        <button class="btn btn-primary">login</button>
    </div>
</div>
</template>


<script>
export default{ 
    name:'',
    components:{},
    directives:{// custom directive
        focus : {
            mounted(el, binding){ //써준 디렉티브의 요소가 el로 들어감. 라이프사이클에서 마운트되는 단계에 마운트 되는 요소에 focus를 적용
                el.focus()
            }
        },
        number :{
            mounted(el){
                el.addEventListener('input',(event)=>{
                    event.target.value = event.target.value.replace(/\D/g,""); //숫자 외의 다른 문자는 공백이 입력되도록 하는 정규표현식 적용하는 사용자 지정 디렉티브.
                })
            }
        }
    },
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