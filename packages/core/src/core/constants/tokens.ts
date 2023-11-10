import { Variants } from "./variants"
import { pick } from "../../utils/utils"

const primaryRange = [100, 200, 300, 400, 500, 600, 700, 800, 900]
const secondaryRange = [...primaryRange]
const errorRange = [100, 200, 300, 400, 500, 600]
const successRange = [...errorRange, 700]
const warningRange = [...errorRange, 700]

const tokenVariants = Object.values(pick(Variants, ['PRIMARY', 'SECONDARY', 'ERROR', 'WARNING', 'SUCCESS']))
const tokenVariantRanges = {
	[Variants.PRIMARY]: primaryRange,
	[Variants.SECONDARY]: secondaryRange,
	[Variants.ERROR]: errorRange,
	[Variants.SUCCESS]: successRange,
	[Variants.WARNING]: warningRange,
}

export const backgroundTokenClasses = [].concat(...tokenVariants.map((variant) => tokenVariantRanges[variant].map((token: string) => `gov-bg--${variant}-${token}`)))
