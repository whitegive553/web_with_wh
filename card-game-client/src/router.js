import Vue from 'vue'
import Router from 'vue-router'
import GameTable from './pages/GameTable.vue'
import Login from './pages/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',   // 确保使用 hash 模式
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/gameTable'   // 根路径重定向到 gameTable
    },
    {
      path: '/gameTable',
      name: 'gameTable',
      component: GameTable
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
