
export type Optional<T> = T | undefined;
export type Nullable<T> = T | null;
export type OptionalProperty<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
export type ValueOf<T> = T[keyof T];

export type DeepPartial<T> = {
	[P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type ObjectOrArrayType<T> = T | T[];
export const ObjectOrArray = {
	first: <T>(item: ObjectOrArrayType<T>): T => (Array.isArray(item) ? item[0] : item),
	array: <T>(item: ObjectOrArrayType<T>): T[] => (Array.isArray(item) ? item : [item]),
};

export const Omit = <T extends object, P extends keyof T, R extends Omit<T, P>>(properties: P[], object: T): R =>
	Object.entries(object).reduce(
		(all, [key, value]) => (properties.includes(key as P) ? all : { ...all, [key]: value }),
		{} as R
	);

export const whenDefined =
	<I, O>(fn: (input: I) => O) =>
	(value?: I): O | undefined =>
		value ? fn(value) : undefined;

/**
 * Comparator function which defines the sort order
 * @example
 * ```
 * // sorts objects by `id` property
 * [{ id: 3 }, { id: 2 }, { id: 1 }].sort(compare(['id']))
 *
 * // sorts objects by `id` and `name` properties
 * [{ id: 3, name: 'b' }, { id: 2, name: 'a' }, { id: 1, name: 'b' }].sort(compare(['id', 'name']))
 * ```
 *
 * @param {Array<keyof T>} properties
 * @return {number}
 */
export const compare =
	<T extends object>(properties: Array<keyof T>) =>
	(a: T, b: T): number => {
		const [property, ...rest] = properties;
		if (!property) {
			return 0;
		}
		if (a[property] < b[property]) {
			return -1;
		}
		if (a[property] > b[property]) {
			return 1;
		}
		return rest.length > 0 ? compare(rest)(a, b) : 0;
	};

export const is = <T>(value: T | undefined | null): value is T => value !== undefined && value !== null;

export const has =
	<T extends object, P extends keyof T>(property: P) =>
	(object: OptionalProperty<T, P>): object is T => {
		return !!object[property];
	};

export const equals =
	<A>(a?: A) =>
	(b?: A): boolean =>
		a === b;
export const prop =
	<T, P extends keyof T>(property: P) =>
	(object: T): T[P] =>
		object[property];

export const propOptional =
	<T, P extends keyof T>(property: P) =>
	(object?: T): Optional<T[P]> =>
		object ? object[property] : undefined;

export const hasOwnProperty = <X extends object, Y extends PropertyKey>(
	obj: X,
	prop: Y
): obj is X & Record<Y, ValueOf<X>> => {
	return Object.prototype.hasOwnProperty.call(obj, prop);
};

export const isObject = <T extends object>(obj: unknown): obj is T => typeof obj === 'object';
export const isString = (input: unknown): input is string => is(input) && typeof input === 'string';
export const isNumber = (input: unknown): input is string => is(input) && typeof input === 'number';

type Entries<T> = {
	[K in keyof T]: [K, T[K]];
}[keyof T][];
export const getEntries = <T extends object>(obj: T) => Object.entries(obj) as Entries<T>;

export const getKeys = <T extends object>(obj: T) => Object.keys(obj) as Array<keyof T>;
export const getValues = <T extends object>(obj: T) => Object.values(obj) as Array<ValueOf<T>>;

export const first = <T>(array: T[]): Optional<T> => array[0];

export const pairs = <T>(arr: T[]): Array<[string, string]> =>
	arr.flatMap((item1, index1) => arr.flatMap((item2, index2) => (index1 > index2 ? [[item1, item2]] : []))) as any;

export const find =
	<T, S extends T>(predicate: (item: T) => item is S) =>
	(array?: T[]): Optional<S> =>
		(array || []).find(predicate);
export const filter =
	<T, S extends T>(predicate: (item: T) => item is S) =>
	(array?: T[]): S[] =>
		(array || []).filter(predicate);
