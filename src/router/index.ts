import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('../views/HomeView.vue'),
		},
		{
			path: '/about',
			name: 'about',
			component: () => import('../views/AboutView.vue'),
		},
		{
			path: '/sandbox',
			name: 'sandbox',
			component: () => import('../views/SandboxView.vue'),
		},
		{
			path: '/kit',
			name: 'kit',
			component: () => import('../views/KitView.vue'),
		},
	],
})

export default router
