import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import Success from '../views/index-success.vue'
import Page1 from '../views/page1.vue'
import Page2 from '../views/page2.vue'
import Page3 from '../views/page3.vue'
import Page4 from '../views/page4.vue'
import Page5 from '../views/page5.vue'
import Page6 from '../views/page6.vue'
import Page7 from '../views/page7.vue'
import Page8 from '../views/page8.vue'
import Page9 from '../views/page9.vue'
import Page10 from '../views/page10.vue'
import Child1 from '../components/Child1.vue'
import Child2 from '../components/Child2.vue'
import Child3 from '../components/Child3.vue'
import Child4 from '../components/Child4.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Index
  },
  {
    path: '/success',
    component: Success
  },
  {
    path: '/page1',
    component: Page1
  },
  {
    path: '/page2',
    component: Page2
  },
  {
    path: '/page3',
    component: Page3
  },
  {
    path: '/page4',
    component: Page4
  },
  {
    path: '/page5',
    component: Page5
  },
  {
    path: '/page6',
    component: Page6
  },
  {
    path: '/page7',
    component: Page7
  },
  {
    path: '/page8',
    component: Page8
  },
  {
    path: '/page9',
    component: Page9,
    redirect: '/page9/child1',
    children: [
      {
        path: 'child1',
        component: Child1
      },
      {
        path: 'child2',
        component: Child2
      },
      {
        path: 'child3',
        component: Child3
      },
      {
        path: 'child4',
        component: Child4
      }
    ]
  },
  {
    path: '/page10',
    component: Page10,
    redirect:'/page10/child1',
    children: [
      {
        path: 'child1',
        component: Child1
      },
      {
        path: 'child2',
        component: Child2
      },
      {
        path: 'child3',
        component: Child3
      },
      {
        path: 'child4',
        component: Child4
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
