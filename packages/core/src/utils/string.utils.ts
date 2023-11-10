function chr4(): string {
	return Math.random().toString(16).slice(-4)
}

export function createID(prefix: string): string {
	return `${prefix}-${chr4()}${chr4()}-${chr4()}-${chr4()}-${chr4()}-${chr4()}${chr4()}${chr4()}`
}

export function removeDiacritics(string: any): string | any {
	if (typeof string !== 'string') return string
	return string.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

export function splitByWhitespace(string: any): string | any {
	if (typeof string !== 'string') return string
	return string.split(/(\s+)/)
}
