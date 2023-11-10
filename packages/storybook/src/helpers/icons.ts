import { complexIcons, basicIcons, icons } from '../../../core/src/components/gov-icon/list';
export { complexIcons, basicIcons, icons };

export const createIcon = (
	name: string,
	slot: string = undefined,
	type: string = undefined,
	target: HTMLElement = null
): HTMLGovIconElement | null => {
	if (typeof name === 'string') {
		const names = name.split('/');
		if (names.length === 2) {
			const icon = document.createElement('gov-icon');
			icon.setAttribute('type', names[0]);
			icon.setAttribute('name', names[1]);
			if (slot) {
				icon.setAttribute('slot', slot);
			}
			if (type) {
				icon.setAttribute('type', type);
			}
			if (target) {
				target.appendChild(icon);
			}
			return icon;
		}
	}
	return null;
};
