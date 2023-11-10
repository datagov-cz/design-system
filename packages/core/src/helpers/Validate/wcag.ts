import { govWarningLog } from '../Log/gov.log'
import { splitByWhitespace } from '../../utils/string.utils'
import { documentNode } from '../Dom/win'

export const validateWcagProp = (value: string | undefined, propName: string, component: string): void => {
	if (value === undefined || String(value).length === 0) {
		govWarningLog(`[${component}]: The (${propName}) attribute is important for correct accessibility.`)
	}
}

export const validateWcagRef = (referenceId: string, name: string, component: string): boolean => {
	if (typeof referenceId === 'undefined' || referenceId === undefined) {
		return true
	}
	if (String(referenceId).length === 0) {
		govWarningLog(`[${component}]: Attribute (${name}) is defined with an empty value.`)
		return false
	}
	let strings = []
	const referenceIds = splitByWhitespace(referenceId)
	if (Array.isArray(referenceIds)) {
		strings = referenceIds.filter(function (e) {
			return e.trim().length > 0
		})
	}

	return !!strings.filter(referenceId => {
		if (documentNode().getElementById(referenceId) === null) {
			//govWarningLog(`[${component}][${name}]: Reference to element with id (${referenceId}) does not exist.`)
			return false
		} else {
			return true
		}
	}).length
}

export const validateWcagLabelFor = (inputId: string, labelledBy: string | undefined, component: string): boolean => {
	const labelEl = documentNode().querySelector(`[for=${inputId}]`)
	if (labelEl === null) {
		const labelledByEl = documentNode().getElementById(labelledBy)
		if (labelledByEl === null) {
			govWarningLog(`[${component}]: The form element has no defined wcag-label or wcag-labelled-by attribute.`)
			return false
		}
	}
	return true
}

export const validateWcagLabel = (label: string | undefined, labelledBy: string | undefined, component: string): boolean => {
	if (typeof label === 'string' && label.length > 0) {
		return true
	}
	if (typeof labelledBy === 'string' && labelledBy.length > 0) {
		const labelledByEl = documentNode().getElementById(labelledBy)
		if (labelledByEl) {
			return true
		}
	}
	govWarningLog(`[${component}]: The element has no defined wcag-label or wcag-labelled-by attribute.`)
	return false
}
