export function format(first: string, middle: string, last: string): string {
	return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '')
}

export async function delay(miliseconds: number): Promise<void> {
	return new Promise(resolve => setTimeout(resolve, miliseconds))
}

export function throttle(f: (entries) => void, delay: number) {
	let timer: any = 0
	return function (...args) {
		clearTimeout(timer)
		timer = setTimeout(() => f.apply(this, args), delay)
	}
}

/**
 * Checks if object has that property
 *
 * @param {K} prop
 * @param {T} obj
 * @return {obj is T & Record<K, V>}
 */
export const has = <T extends object, K extends PropertyKey, V>(prop: K, obj: T): obj is T & Record<K, V> => {
	return Object.prototype.hasOwnProperty.call(obj, prop)
}

/**
 * Returns property of given Object
 *
 * @param {K} name
 * @param {T} object
 * @return {(T & Record<K, unknown>)[K]}
 */
export const property = <T extends object, K extends keyof T>(name: K, object: T) => {
	return has(name, object) ? object[name] : undefined
}

export const pick = <T extends Record<string, unknown>, K extends keyof T>(obj: T, keys: readonly K[]): Pick<T, K> =>
	Object.fromEntries(Object.entries(obj).filter(([key]) => (keys as readonly string[]).includes(key))) as Pick<T, K>
