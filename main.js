import Vue from 'vue'
import App from './App'
import pageHead from './components/page_head.vue'
Vue.config.productionTip = false

App.mpType = 'app'



const app = new Vue({
    ...App
})
app.$mount()
