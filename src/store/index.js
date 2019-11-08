import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import caidan_1 from './modules/caidan_1';
const store = new Vuex.Store({
    modules: {
        caidan_1,
    }
})
export default store;