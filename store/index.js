import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
			menuIndex: 1,
			menuColor: '#ff8815'
		},
    mutations: {
			saveMenuIndex(state, val) {
				state.menuIndex = val
			},
			saveMenuColor(state, val) {
				state.menuColor = val
			}
		},
    actions: {}
})
export default store