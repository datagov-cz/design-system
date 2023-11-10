module.exports = {
	extends: ['@superkoders/stylelint-config', 'stylelint-prettier/recommended'],
	rules: {
		'custom-property-pattern': null,
		'declaration-no-important': null,
		'font-family-no-missing-generic-family-keyword': null,
		'selector-no-qualifying-type': null,
		'scss/at-extend-no-missing-placeholder': null,
		'scss/at-function-pattern': null,
		'scss/function-unquote-no-unquoted-strings-inside': null,
		'scss/no-duplicate-dollar-variables': null,
		// "order/order": [
		// 	"custom-properties",
		// 	"dollar-variables",
		// 	{
		// 		type: "at-rule",
		// 		hasBlock: false,
		// 	},
		// 	"declarations",
		// 	{
		// 		type: "at-rule",
		// 		hasBlock: true,
		// 	},
		// 	"rules",
		// ],
	},
}
