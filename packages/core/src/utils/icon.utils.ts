import { getAssetPath } from "@stencil/core"
import { dsVersion } from "./ds.utils"
import { iconsPath } from "../helpers/Dom/win"

const iconCache: { [key: string]: string } = {}
const requestCache: { [key: string]: Promise<string> } = {}

const isExternalUrl = (path: string) => path.startsWith("http://") || path.startsWith("https://")
const iconUrl = (path: string, name: string, type: string) => {
	if (isExternalUrl(path)) {
		return `${path}/${type}/${name}.svg?v=${dsVersion()}`
	}
	return getAssetPath(`${path}/${type}/${name}.svg`) + `?v=${dsVersion()}`
}

export async function fetchIcon({ name, type }: { name: string; type: string }): Promise<string> {
	const cacheKey = type + "-" + name
	if (iconCache[cacheKey]) {
		return iconCache[cacheKey]
	}
	if (!requestCache[cacheKey]) {
		requestCache[cacheKey] = fetch(iconUrl(iconsPath(), name, type)).then(resp => {
			if (resp.status === 200) {
				return resp.text()
			} else {
				throw new Error("Gov Icon doesn't exists")
			}
		})
	}
	const path = await requestCache[cacheKey]
	iconCache[cacheKey] = path
	return path
}
