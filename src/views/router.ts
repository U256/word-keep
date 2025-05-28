import NotFound from './NotFound.vue'
import { createRouter, createWebHistory, type RouteLocationNormalizedGeneric } from 'vue-router'
import { routesConfig } from '@/shared/constants/routes'

function removeQueryParams(to: RouteLocationNormalizedGeneric) {
	if (Object.keys(to.query).length) return { path: to.path, query: {}, hash: to.hash }
}
function removeHash(to: RouteLocationNormalizedGeneric) {
	if (to.hash) return { path: to.path, query: to.query, hash: '' }
}

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			...routesConfig.HOME,
			component: () => import('./HomeView.vue'),
		},
		{
			...routesConfig.SANDBOX,
			component: () => import('./Sandbox/SandboxView.vue'),
		},
		{
			...routesConfig.KIT,
			component: () => import('./KitView.vue'),
		},
		{
			...routesConfig.LIST,
			component: () => import('./ListView.vue'),
		},
		{
			...routesConfig.LIST_ITEM,
			path: '/list/:id',
			component: () => import('./ListItemView.vue'),
			props: { isPage: true }, // Pass props to the component; for cases when the component can be used in multiple places
			beforeEnter: [removeHash, removeQueryParams],
		},
		{ path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
	],
})

router.beforeEach(async (to, from) => {
	const _never = Math.random() > 1
	if (to.path !== '/' && _never) {
		// conditional redirect to a different route, e.g. if the user is not logged in
		return '/'
	}
})

export default router
