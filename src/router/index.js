import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/home'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/home', name: 'home', redirect: '/home/candan1_1', component: Home ,children: [
      {path: 'candan1_1', name: 'candan1_1', component: () => import("../page/candan1/candan1_1.vue") },
      {path: 'candan1_2', name: 'candan1_2', component: () => import("../page/candan1/candan1_2.vue") },
      {path: 'candan1_3', name: 'candan1_3', component: () => import("../page/candan1/candan1_3.vue") },
      {path: 'candan1_4', name: 'candan1_4', component: () => import("../page/candan1/candan1_4.vue") }
    ]}
  ]
})
