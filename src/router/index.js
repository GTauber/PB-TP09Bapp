import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ContactsView from "@/views/ContactsView";
import ServicesView from "@/views/ServicesView";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactsView
  },
  {
    path: '/services',
    name: 'services',
    component: ServicesView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
