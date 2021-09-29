/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: '/',
    scrollBehavior () {
        return { x: 0, y: 0 }
    },
    routes: [
        // =============================================================================
        // SHOP LAYOUT
        // =============================================================================
        {
          path: '',
          component: () => import('@/layouts/shop-layout/shoplayout.vue'),
          children: [
            {
              path: '/',
              name: 'shop-landing',
              component: () => import('@/views/shoppage/Landing.vue')
            },
            {
              path: '/about',
              name: 'aboutus',
              component: () => import('@/views/shoppage/Aboutus.vue')
            },
            {
              path: '/shop',
              name: 'shoplist',
              component: () => import('@/views/shoppage/Shopping.vue')
            },
            {
              path: '/holders',
              name: 'holderslist',
              component: () => import('@/views/shoppage/Holders.vue')
            },
            {
              path: '/mounts',
              name: 'mountslist',
              component: () => import('@/views/shoppage/Mounting.vue')
            },
            {
              path: '/stands',
              name: 'standsslist',
              component: () => import('@/views/shoppage/Stands.vue')
            },
            {
              path: '/combination',
              name: 'combinationlist',
              component: () => import('@/views/shoppage/combination.vue')
            },
            {
              path: '/contact',
              name: 'contact',
              component: () => import('@/views/shoppage/Contact.vue')
            }
          ],
        },
        {
    // =============================================================================
    // MAIN LAYOUT ROUTES
    // =============================================================================
            path: '',
            component: () => import('./layouts/main/Main.vue'),
            children: [
        // =============================================================================
        // Theme Routes
        // =============================================================================
              {
                path: '/admin',
                name: 'home',
                component: () => import('./views/Home.vue')
              },
              {
                path: '/page2',
                name: 'page-2',
                component: () => import('./views/Page2.vue')
              },
            ],
        },
    // =============================================================================
    // FULL PAGE LAYOUTS
    // =============================================================================
        {
            path: '',
            component: () => import('@/layouts/full-page/FullPage.vue'),
            children: [
        // =============================================================================
        // PAGES
        // =============================================================================
              {
                path: '/pages/login',
                name: 'page-login',
                component: () => import('@/views/pages/Login.vue')
              },
              {
                path: '/pages/error-404',
                name: 'page-error-404',
                component: () => import('@/views/pages/Error404.vue')
              },
            ]
        },
        // Redirect to 404 page, if no match found
        {
            path: '*',
            redirect: '/pages/error-404'
        }
    ],
})

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
    if (appLoading) {
        appLoading.style.display = "none";
    }
})

export default router
