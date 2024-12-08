const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HomePage.vue') },
      {
        name: 'Finance',
        path: 'finance',
        component: () => import('pages/Finance.vue'),
        meta: { requiresAuth: true }, // Protected route
      },
      {
        name: 'AddingData',
        path: 'submit-transaction',
        component: () => import('pages/AddingData.vue'),
        meta: { requiresAuth: true }, // Protected route
      },
      {
        name: 'Settings',
        path: 'settings',
        component: () => import('pages/Settings.vue'),
        meta: { requiresAuth: true }, // Protected route
      },
      {
        name: 'Login',
        path: 'login',
        component: () => import('pages/Login.vue'),
      },
      {
        name: 'SignUp',
        path: '/signup',
        component: () => import('../pages/SignUp.vue'),
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
];

export default routes;
