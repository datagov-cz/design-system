import { govWarningLog } from '../Log/gov.log'

// @TODO: deal with optional values
export const validateProp = <T extends Record<string, string>>(valueEnum: T, value: string, component: string): void => {
	const values = Object.values(valueEnum)
	const isValid = values.indexOf(value) > -1
	if (!isValid) {
		govWarningLog(`[${component}]: Bad parameter with value (${value}). Available parameters are (${values.join(', ')}).`)
	}
}
