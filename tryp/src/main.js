import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import GlobalCompo from '@/components/GlobalCompo.vue'
import mixins from '@/mixin/index.js'
import i18n from '@/plugin/i18n.js'

//createApp(App).use(store).use(router).mount('#app')
const app = createApp(App);
app.use(store);
app.use(router);
app.use(i18n);
app.mixin(mixins);
app.component('GlobalCompo',GlobalCompo);
app.mount('#app');



