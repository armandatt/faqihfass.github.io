import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/profile'
    },
    {
      name: 'profile-512.jpg',
      path: '/profile',
      component: () => import('@/views/Profile.vue')
    },
    {
      name: 'contact.html',
      path: '/contact',
      component: () => import('@/views/Contact.vue')
    },
    {
      name: 'projects.html',
      path: '/projects',
      component: () => import('@/views/Projects.vue')
    },
    {
      name: 'manifest.json',
      path: '/manifest',
      component: () => import('@/views/Manifest.vue')
    },
    {
      name: 'package.json',
      path: '/package',
      component: () => import('@/views/Package.vue')
    },
    {
      name: 'README.md',
      path: '/readme',
      component: () => import('@/views/Readme.vue')
    }
  ]
})
