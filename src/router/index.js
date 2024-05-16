// router.js

import { createRouter, createWebHistory } from 'vue-router';

// Import your components for routing
import Home from '../views/Home.vue';
import Recordings from '../components/Recordings.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [ 
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/recordings',
      name: 'recordings',
      component: Recordings,
    },
    {
      path: "/live-preview",
      name: "LivePreview",
      component: () => import("../components/LivePreview.vue"),
    },
    // Add more routes as needed
  ],
})

export default router;
