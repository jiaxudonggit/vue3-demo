import { createWebHistory, createRouter } from 'vue-router'

export const routes = [
  {
    path: '',
    name: 'index',
    component: () => import('@/views/index'),
  },
	{
		path: '/counter',
    name: 'counter',
		component: () => import('@/views/Counter'),
	},
  {
    path: '/counter-setup',
    name: 'counter-setup',
    component: () => import('@/views/CounterSetup'),
  },
  {
    path: '/counter-option',
    name: 'counter-option',
    component: () => import('@/views/CounterOptionAPI'),
  },
  {
    path: '/counter-option-mixin',
    name: 'counter-option-mixin',
    component: () => import('@/views/CounterOptionAPIMixin'),
  },
  {
    path: '/counter-option-slot',
    name: 'counter-option-slot',
    component: () => import('@/views/CounterOptionAPISlot'),
  },
  {
    path: '/element-demo',
    name: 'element-demo',
    component: () => import('@/views/ElementDemo'),
  },
  {
    path: '/auto-import-demo',
    name: 'auto-import-demo',
    component: () => import('@/views/AutoImportDemo'),
  },
]

const router = createRouter({
	history: createWebHistory(),
	routes: routes,
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} else {
			return { top: 0 }
		}
	}
})

export default router
