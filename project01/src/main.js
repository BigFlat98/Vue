import { createApp } from 'vue'
import App from './App.vue'
import router from './router'//index.js는 기본값이기 때문에 경로에 파일명을 추가하지 않아도 인식함.
import store from './store'
import PageTitle from "@/components/flagment/PageTitle.vue"
import ChildComponent from "@/components/flagment/ChildComponent.vue"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import mixins from '@/mixins/index.js'
import i18n from '@/plugins/i18n.js'
import { useKakao } from 'vue3-kakao-maps'

// createApp(App).use(store).use(router).mount('#app').component(PageTitle)
const app = createApp(App)
app.use(store)
app.use(router)
app.mixin(mixins)
app.use(i18n)
useKakao('21f61054eb166ba3ce01060f97fa5909')
app.component('PageTitle',PageTitle) //component를 추가하는 방법. 보통 여기에 추가해 놓고 View에서 import없이 사용함.
app.component('ChildComponent',ChildComponent)
app.mount('#app')
window.Kakao.init('21f61054eb166ba3ce01060f97fa5909')
//use(router) -> 우리가 라우터를 사용하고 router/index.js에 정의해 놨다는 것을 가리킴.

