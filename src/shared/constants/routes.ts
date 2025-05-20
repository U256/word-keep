export interface StaticRoute {
	label: string
  name: string
	path: string
}
export interface DynamicRoute {
	label: string
	name: string
	path: string | ((id: string) => string)
}


export const routesConfig = {
	HOME: {
		label: 'Home',
		name: 'Home',
		path: '/',
	},
	SANDBOX: {
		label: 'Sandbox',
		name: 'Sandbox',
		path: '/sandbox',
	},
	KIT: {
		label: 'Kit',
		name: 'Kit',
		path: '/kit',
	},
	LIST: {
		label: 'List',
		name: 'List',
		path: '/list',
	},
	LIST_ITEM: {
		label: 'List Item',
		name: 'list_id',
		path: (id) => `/list/${id}`,
	},
} as const satisfies Record<string, StaticRoute | DynamicRoute>
