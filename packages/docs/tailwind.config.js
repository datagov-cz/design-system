module.exports = {
	content: [
		'./.vitepress/theme/**/*.{js,ts,vue}',
		'./komponenty/*.md',
		'./dokumentace/*.md',
		'./dokumentace/**/*.md',
		'./*.md',
	],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			ds: '848px',
			lg: '1024px',
			xl: '1200px',
		},
		fontSize: {
			xs: [
				'var(--gov-text-xs-font-size)',
				{
					lineHeight: 'var(--gov-text-xs-line-height)',
					letterSpacing: 'var(--gov-text-xs-letter-spacing)',
					fontWeight: 'var(--gov-text-xs-font-weight)',
				},
			],
			s: [
				'var(--gov-text-s-font-size)',
				{
					lineHeight: 'var(--gov-text-s-line-height)',
					letterSpacing: 'var(--gov-text-s-letter-spacing)',
					fontWeight: 'var(--gov-text-s-font-weight)',
				},
			],
			m: [
				'var(--gov-text-m-font-size)',
				{
					lineHeight: 'var(--gov-text-m-line-height)',
					letterSpacing: 'var(--gov-text-m-letter-spacing)',
					fontWeight: 'var(--gov-text-m-font-weight)',
				},
			],
			l: [
				'var(--gov-text-l-font-size)',
				{
					lineHeight: 'var(--gov-text-l-line-height)',
					letterSpacing: 'var(--gov-text-l-letter-spacing)',
					fontWeight: 'var(--gov-text-l-font-weight)',
				},
			],
			xl: [
				'var(--gov-text-xl-font-size)',
				{
					lineHeight: 'var(--gov-text-xl-line-height)',
					letterSpacing: 'var(--gov-text-xl-letter-spacing)',
					fontWeight: 'var(--gov-text-xl-font-weight)',
				},
			],
			'2xl': [
				'var(--gov-text-2xl-font-size)',
				{
					lineHeight: 'var(--gov-text-2xl-line-height)',
					letterSpacing: 'var(--gov-text-2xl-letter-spacing)',
					fontWeight: 'var(--gov-text-2xl-font-weight)',
				},
			],
			'3xl': [
				'var(--gov-text-3xl-font-size)',
				{
					lineHeight: 'var(--gov-text-3xl-line-height)',
					letterSpacing: 'var(--gov-text-3xl-letter-spacing)',
					fontWeight: 'var(--gov-text-3xl-font-weight)',
				},
			],
			'4xl': [
				'var(--gov-text-4xl-font-size)',
				{
					lineHeight: 'var(--gov-text-4xl-line-height)',
					letterSpacing: 'var(--gov-text-4xl-letter-spacing)',
					fontWeight: 'var(--gov-text-4xl-font-weight)',
				},
			],
			'5xl': [
				'var(--gov-text-5xl-font-size)',
				{
					lineHeight: 'var(--gov-text-5xl-line-height)',
					letterSpacing: 'var(--gov-text-5xl-letter-spacing)',
					fontWeight: 'var(--gov-text-5xl-font-weight)',
				},
			],
			'6xl': [
				'var(--gov-text-6xl-font-size)',
				{
					lineHeight: 'var(--gov-text-6xl-line-height)',
					letterSpacing: 'var(--gov-text-6xl-letter-spacing)',
					fontWeight: 'var(--gov-text-6xl-font-weight)',
				},
			],
		},
		boxShadow: {
			s: 'var(--gov-box-shadow-s)',
			DEFAULT: 'var(--gov-box-shadow-m)',
			m: 'var(--gov-box-shadow-m)',
			l: 'var(--gov-box-shadow-l)',
			xl: 'var(--gov-box-shadow-xl)',
		},

		colors: {
			primary: {
				100: 'var(--gov-color-primary-100)',
				200: 'var(--gov-color-primary-200)',
				300: 'var(--gov-color-primary-300)',
				400: 'var(--gov-color-primary-400)',
				500: 'var(--gov-color-primary-500)',
				600: 'var(--gov-color-primary-600)',
				700: 'var(--gov-color-primary-700)',
				800: 'var(--gov-color-primary-800)',
				900: 'var(--gov-color-primary-900)',
			},
			secondary: {
				100: 'var(--gov-color-secondary-100)',
				200: 'var(--gov-color-secondary-200)',
				300: 'var(--gov-color-secondary-300)',
				400: 'var(--gov-color-secondary-400)',
				500: 'var(--gov-color-secondary-500)',
				600: 'var(--gov-color-secondary-600)',
				700: 'var(--gov-color-secondary-700)',
				800: 'var(--gov-color-secondary-800)',
				900: 'var(--gov-color-secondary-900)',
			},
			success: {
				100: 'var(--gov-color-success-100)',
				200: 'var(--gov-color-success-200)',
				300: 'var(--gov-color-success-300)',
				400: 'var(--gov-color-success-400)',
				500: 'var(--gov-color-success-500)',
				600: 'var(--gov-color-success-600)',
				700: 'var(--gov-color-success-700)',
			},
			warning: {
				100: 'var(--gov-color-warning-100)',
				200: 'var(--gov-color-warning-200)',
				300: 'var(--gov-color-warning-300)',
				400: 'var(--gov-color-warning-400)',
				500: 'var(--gov-color-warning-500)',
				600: 'var(--gov-color-warning-600)',
				700: 'var(--gov-color-warning-700)',
			},
			error: {
				100: 'var(--gov-color-error-100)',
				200: 'var(--gov-color-error-200)',
				300: 'var(--gov-color-error-300)',
				400: 'var(--gov-color-error-400)',
				500: 'var(--gov-color-error-500)',
				600: 'var(--gov-color-error-600)',
			},
			neutral: {
				white: 'var(--gov-color-neutral-white)',
				black: 'var(--gov-color-neutral-black)',
			},
			transparent: 'transparent',
			focus: {
				base: 'var(--gov-color-focus-base)',
			},
		},

		extend: {
			animation: {
				'fade-in': 'fadeIn 2s',
				'scale-x-in': 'scaleXIn 0.5s',
				'scale-x-out': 'scaleXOut 0.5s',
				'slide-up': 'slideUp 0.5s',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: 0 },
					'100%': { opacity: 1 },
				},
				scaleXIn: {
					'0%': { transform: 'scaleX(0)' },
					'100%': { transform: 'scaleX(1)' },
				},
				scaleXOut: {
					'0%': { transform: 'scaleX(1)' },
					'100%': { transform: 'scaleX(0)' },
				},
				slideUp: {
					'0%': { transform: 'translateY(10px)', opacity: 0 },
					'100%': { transform: 'translateY(0)', opacity: 1 },
				},
			},
			zIndex: {
				100: '100',
				200: '200',
			},
		},
	},
}
