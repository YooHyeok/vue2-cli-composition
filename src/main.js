import Vue from 'vue'
import App from './App.vue'
import VueCompositionAPI from '@vue/composition-api';

Vue.use(VueCompositionAPI); // npm install 후 전역 등록
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
