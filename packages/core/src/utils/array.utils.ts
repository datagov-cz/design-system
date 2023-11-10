export const createArrayRange = (from: number, to: number): number[] => {
	if (Number.isInteger(from) && Number.isInteger(to)) {
		return [...Array(to + 1).keys()].slice(from)
	}
	return []
}
