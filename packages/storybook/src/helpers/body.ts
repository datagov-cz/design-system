export const bodyBackground = () => {
	const gray = 'gov-bg--secondary-200';
	const white = 'gov-bg--neutral-white';
	return {
		secondary: () => {
			document.body.classList.remove(white);
			document.body.classList.add(gray);
		},
		white: () => {
			document.body.classList.remove(gray);
			document.body.classList.add(white);
		},
	};
};
