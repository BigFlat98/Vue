import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import GlobalCompo from '@/components/GlobalCompo.vue'
import mixins from '@/mixin/index.js'
import i18n from '@/plugin/i18n.js'
import { useKakao } from 'vue3-kakao-maps';



//createApp(App).use(store).use(router).mount('#app')
const app = createApp(App);
app.use(store);
app.use(router);
app.use(i18n);
useKakao('21f61054eb166ba3ce01060f97fa5909');
app.mixin(mixins);
app.component('GlobalCompo',GlobalCompo);
app.mount('#app');



