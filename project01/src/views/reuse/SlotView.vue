<template>
<div>
    <button class="btn btn-primary" data-bs-toggle = "modal" data-bs-target = "#userModal">
        버튼... <!--data-bs-toggle -> 버튼을 눌렀을 때 어떤 이벤트가 발생하는지 정해줌, data-bs-target -> 해당 id를 갖는 요소를 불러오겠다.-->
    </button>
    <button class="btn btn-primary" data-bs-toggle = "modal" data-bs-target = "#userModal3">
        버튼... 
    </button>
    <slot-modal modalId="userModal2">
        <template v-slot:title>modal window title</template> <!--하위 컴포넌트에 <slot name=title></slot>로 적어놓은 부분에 해당 태그의 내용이 들어감. 이게 슬롯 기능.-->
        <template v-slot:body>
            <div class="row gy-2">
                <table>
                    <tr>
                        <th>a</th>
                        <th>b</th>
                        <th>c</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                    
                </table>
            </div>
        </template>
        <template v-slot:footer>
            <button data-bs-dismiss="modal" class="btn btn-danger">닫기</button>
        </template>
    </slot-modal> <!-- vue 표기법상 slot-modal은 SlotModal과 같은 표기임. 
                        즉 똑같이 적혀있는것과 같음. 여기는 우리가 알고 있는대로 SlotModal컴포넌트를 띄운거임.-->

    <slot-modal> <!-- SlotModal에 기본 ModalID를 UserModal로 적어놨기 때문에 이 컴포넌트의 modalID가 UserModal임. 위에서 버튼 누르면 여기로 옴. -->
        <template v-slot:title>user input window</template>
        <template v-slot:body>
            <div class="row gy-2">
                <div class="col-3">
                    <label for="" class="form-label">email address</label>
                </div>
                <div class="col-9">
                    <input type="email" name="" id="" class="form-contorl" />
                </div>
                <div class="col-3">
                    <label for="" class="form-label">tel</label>
                </div>
                <div class="col-9">
                    <input type="tel" name="" id="" class="form-contorl" />
                </div>
                <div class="col-3">
                    <label for="" class="form-label">address</label>
                </div>
                <div class="col-9">
                    <input type="text" name="" id="" class="form-contorl" />
                </div>
            </div>
        </template>
        <template v-slot:footer>
            <button class="btn btn-primary">save</button>
            <button class="btn btn-danger" data-bs-dismiss="modal">close</button>
        </template>
    </slot-modal>

    <slot-modal modalId="userModal3">
        <template v-slot:title>this is userModal3</template> <!--하위 컴포넌트에 <slot name=title></slot>로 적어놓은 부분에 해당 태그의 내용이 들어감. 이게 슬롯 기능.-->
        <template v-slot:body>
            <div class="row gy-2">
                <table>
                    <tr>
                        <th>a</th>
                        <th>b</th>
                        <th>c</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                </table>
            </div>
        </template>
        <template v-slot:footer>
            <button data-bs-dismiss="modal" class="btn btn-danger">닫기</button>
        </template>
    </slot-modal> 
</div>
</template>


<script>
import SlotModal from '@/components/flagment/SlotModal.vue'
export default{ 
    name:'',
    components:{"SlotModal":SlotModal},
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

<style scoped>
button{
    margin: 0 20px;
}
</style>