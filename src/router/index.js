 import { createRouter, createWebHistory } from 'vue-router'
import RegisterLoginForgotpassword from '../views/RegisterLoginForgotpassword.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     {
      path: '/',
      name: 'signup',
      component: RegisterLoginForgotpassword,
       children: [
        {
          path: '/',
          name: "Register",
          component: () => import('../components/views/Register.vue')
        },
        {
          path: 'login',
          name: "Login",
          component: () => import('../components/views/Login.vue')
        },
        {
          path: 'forgotpassword',
          name: "Forgotpassword",
          component: () => import('../components/views/Forgotpassword.vue')
        },/**/
      ],   
    }, 
    {
      path: '/loggedIn',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/StudentHome.vue'),
      children: [
       {
         path: '/loggedIn',
         name: "My Courses",
         component: () => import('../components/views/StudentHome/MyCourses.vue')
       },
       {
         path: '/courseModule',
         name: "Course Module",
         component: () => import('../components/views/StudentHome/CourseModule.vue')
       },
       {
         path: 'forgotpassword',
         name: "Forgotpassword",
         component: () => import('../components/views/Forgotpassword.vue')
       },/**/
     ],   
    },/*
    {
      path: '/',
      name: 'test',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Test.vue')
    }*/
  ]
})

export default router 
