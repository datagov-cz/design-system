import { pick } from "../../../utils/utils"
import { Variants } from "../../../core/constants/variants"
import { ValueOf } from "../../../types/interfaces"

export const SkeletonVariants = pick(Variants, ["PRIMARY", "SECONDARY", "SUCCESS", "ERROR", "WARNING"])
export type SkeletonVariantsType = `${ValueOf<typeof SkeletonVariants>}`

export enum SkeletonShapes {
	CIRCLE = 'circle',
	REACT = 'rect',
	TEXT = 'text'
}
export type SkeletonShapesType = `${ValueOf<typeof SkeletonShapes>}`

export enum SkeletonAnimation {
	PULSE = 'pulse',
	PROGRESS = 'progress',
	FALSE = 'false'
}
export type SkeletonAnimationType = `${ValueOf<typeof SkeletonAnimation>}`

export const SkeletonClass = {
	root: 'gov-skeleton',
	loader: 'gov-skeleton__loader',
}
