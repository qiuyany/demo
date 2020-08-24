import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/Home"
import PageA from "../components/PageA/PageA"
import PageB from "../components/PageB/PageB"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect : {name :"pageA"},
      children:[
        {
          path: '/pageA',
          name: 'pageA',
          component: PageA
        },
        {
          path: '/pageB',
          component: PageB
        }
      ]
    }
  ]
})
