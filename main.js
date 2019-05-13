import Vue from 'vue'
import App from './App'
import pageHead from './components/page_head.vue'
import mescroll from './components/mescroll.vue';
Vue.config.productionTip = false

App.mpType = 'app'

// Vue.component('page-head', pageHead)
// Vue.component('me-scroll', mescroll)

const app = new Vue({
    ...App
})
app.$mount()
