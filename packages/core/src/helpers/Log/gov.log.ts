interface ColorConfig {
	bg: string
	text: string
}

const WARNING_COLORS: ColorConfig = { bg: '#ecae1a', text: '#3b3b3b' }
const INFO_COLORS: ColorConfig = { bg: '#2362a2', text: '#fff' }
const ERROR_COLORS: ColorConfig = { bg: '#c52a3a', text: '#fff' }

export const govLog = (message: string, colors: ColorConfig = INFO_COLORS): void => {
	const styles = ['color: ' + colors.text, 'background: ' + colors.bg, 'font-size: 11px', 'padding: 2px 4px', 'border-radius: 3px', 'font-weight: 600'].join(
		';'
	)

	console.log('%cgov', styles, message)
}

export const govWarningLog = (message: string): void => {
	govLog(message, WARNING_COLORS)
}

export const govErrorLog = (message: string): void => {
	govLog(message, ERROR_COLORS)
}
