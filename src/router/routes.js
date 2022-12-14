const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/LoginPage.vue ')
      }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/QuestionNaire.vue'),
    children: [
      {
        path: 'question_naire',
        component: () => import('pages/QuestionNairePage.vue')
      },
      {
        path: 'factor',
        component: () => import('pages/FactorPage.vue')
      },
      {
        path: 'factor_detailes/:id',
        component: () => import('pages/FactorDetailes.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
