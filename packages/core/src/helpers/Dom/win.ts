import { property } from '../../utils/utils'

interface IConfig {
	canValidateWcagOnRender: boolean
	iconsPath: string
	iconsLazyLoad: boolean
	documentNode: Document
}

export const isWindow = typeof window !== "undefined"

const getWindowProperty = <T>(name: string): Partial<T> | undefined => isWindow && window && property(name as keyof typeof window, window)

const config = (): IConfig => {
	const defaultConfig: IConfig = {
		canValidateWcagOnRender: false,
		iconsPath: '/assets/icons',
		iconsLazyLoad: true,
		documentNode: document ? document : null,
	}

	const windowProperty = getWindowProperty<IConfig>('GOV_DS_CONFIG')
	if (windowProperty) {
		return { ...defaultConfig, ...windowProperty }
	}

	return defaultConfig
}

export const canValidateWcagOnRender = (): IConfig['canValidateWcagOnRender'] => config().canValidateWcagOnRender
export const iconsPath = (): IConfig['iconsPath'] => config().iconsPath
export const iconsLazyLoad = (): IConfig['iconsLazyLoad'] => config().iconsLazyLoad
export const documentNode = (): IConfig['documentNode'] => config().documentNode
