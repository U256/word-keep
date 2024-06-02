export interface ParsedError {
	code?: number
	message: string
}

const DEFAULT_ERROR = 'Something went wrong'

export const parseError = (e: unknown, defaultError = DEFAULT_ERROR): ParsedError => {
	if (typeof e === 'string') {
		return {
			code: undefined,
			message: e || defaultError,
		}
	}
	if (typeof e === 'object' && e !== null) {
		return parseObjectInError(e, defaultError)
	}

	if (Array.isArray(e)) {
		const firstOfTrace = e[0]
		if (typeof firstOfTrace === 'string') {
			return {
				code: undefined,
				message: firstOfTrace || defaultError,
			}
		}
		if (typeof firstOfTrace === 'object' && firstOfTrace !== null) {
			return parseObjectInError(firstOfTrace, defaultError)
		}
	}

	return {
		code: undefined,
		message: defaultError,
	}
}

function parseObjectInError(object: object, defaultError: string): ParsedError {
	if ('data' in object && typeof object.data === 'object' && object.data !== null) {
		return {
			code: parseCode(object.data),
			message: parseMessage(object.data) || defaultError,
		}
	}
	if ('error' in object && typeof object.error === 'object' && object.error !== null) {
		return {
			code: parseCode(object.error),
			message: parseMessage(object.error) || defaultError,
		}
	}
	if ('message' in object && typeof object.message === 'string') {
		return {
			code: undefined,
			message: object.message || defaultError,
		}
	}
	return {
		code: undefined,
		message: defaultError,
	}
}

function parseCode(object: object) {
	return 'code' in object && (typeof object.code === 'number' || typeof object.code === 'string')
		? Number(object.code)
		: undefined
}
function parseMessage(object: object) {
	return 'message' in object && typeof object.message === 'string' ? object.message : ''
}
